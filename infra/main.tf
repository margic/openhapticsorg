module "static_webapp" {
  source              = "./modules/static-webapp"
  name                = var.static_web_app_name
  resource_group_name = var.resource_group_name
  location            = var.location
  tags                = var.tags
}

resource "azurerm_dns_zone" "openhaptics" {
  name                = "openhaptics.org"
  resource_group_name = var.resource_group_name
  tags                = var.tags
}

locals {
  custom_domain_record_name = trimsuffix(var.custom_domain_name, ".${azurerm_dns_zone.openhaptics.name}")
}

resource "azurerm_dns_cname_record" "custom_domain" {
  name                = local.custom_domain_record_name
  zone_name           = azurerm_dns_zone.openhaptics.name
  resource_group_name = var.resource_group_name
  ttl                 = 300
  record              = module.static_webapp.static_web_app_default_hostname
}

resource "time_sleep" "wait_for_cname" {
  count           = var.enable_swa_custom_domain ? 1 : 0
  depends_on      = [azurerm_dns_cname_record.custom_domain]
  create_duration = "60s"
}

resource "azurerm_static_web_app_custom_domain" "custom_domain" {
  count             = var.enable_swa_custom_domain ? 1 : 0
  static_web_app_id = module.static_webapp.static_web_app_id
  domain_name       = var.custom_domain_name
  validation_type   = "cname-delegation"

  depends_on = [time_sleep.wait_for_cname]
}

resource "azurerm_cdn_frontdoor_profile" "this" {
  name                = var.front_door_profile_name
  resource_group_name = var.resource_group_name
  sku_name            = "Standard_AzureFrontDoor"
  tags                = var.tags
}

resource "azurerm_cdn_frontdoor_endpoint" "this" {
  name                     = var.front_door_endpoint_name
  cdn_frontdoor_profile_id = azurerm_cdn_frontdoor_profile.this.id
}

resource "azurerm_cdn_frontdoor_origin_group" "this" {
  name                     = "swa-origin-group"
  cdn_frontdoor_profile_id = azurerm_cdn_frontdoor_profile.this.id

  health_probe {
    interval_in_seconds = 120
    path                = "/"
    protocol            = "Https"
    request_type        = "GET"
  }

  load_balancing {
    sample_size                 = 4
    successful_samples_required = 3
  }
}

resource "azurerm_cdn_frontdoor_origin" "this" {
  name                          = "swa-origin"
  cdn_frontdoor_origin_group_id = azurerm_cdn_frontdoor_origin_group.this.id

  host_name          = module.static_webapp.static_web_app_default_hostname
  origin_host_header = module.static_webapp.static_web_app_default_hostname
  http_port          = 80
  https_port         = 443
  certificate_name_check_enabled = true
  priority           = 1
  weight             = 1000
  enabled            = true
}

resource "azurerm_cdn_frontdoor_route" "this" {
  name                          = "swa-route"
  cdn_frontdoor_endpoint_id     = azurerm_cdn_frontdoor_endpoint.this.id
  cdn_frontdoor_origin_group_id = azurerm_cdn_frontdoor_origin_group.this.id
  cdn_frontdoor_origin_ids      = [azurerm_cdn_frontdoor_origin.this.id]
  cdn_frontdoor_custom_domain_ids = var.enable_apex_domain_association ? [azurerm_cdn_frontdoor_custom_domain.apex.id] : []

  patterns_to_match      = ["/*"]
  supported_protocols    = ["Http", "Https"]
  forwarding_protocol    = "HttpsOnly"
  https_redirect_enabled = true
  link_to_default_domain = true

  depends_on = [azurerm_dns_txt_record.front_door_validation]
}

resource "azurerm_cdn_frontdoor_custom_domain" "apex" {
  name                     = "apex-domain"
  cdn_frontdoor_profile_id = azurerm_cdn_frontdoor_profile.this.id
  host_name                = var.apex_domain_name

  tls {
    certificate_type    = "ManagedCertificate"
    minimum_tls_version = "TLS12"
  }
}

resource "azurerm_dns_txt_record" "front_door_validation" {
  name                = "_dnsauth"
  zone_name           = azurerm_dns_zone.openhaptics.name
  resource_group_name = var.resource_group_name
  ttl                 = 300
  record {
    value = azurerm_cdn_frontdoor_custom_domain.apex.validation_token
  }
}

resource "azurerm_dns_a_record" "apex_alias" {
  name                = "@"
  zone_name           = azurerm_dns_zone.openhaptics.name
  resource_group_name = var.resource_group_name
  ttl                 = 300
  target_resource_id  = azurerm_cdn_frontdoor_endpoint.this.id
}
