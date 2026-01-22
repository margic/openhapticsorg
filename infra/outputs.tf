output "static_web_app_id" {
  description = "Resource ID of the Static Web App."
  value       = module.static_webapp.static_web_app_id
}

output "static_web_app_default_hostname" {
  description = "Default hostname for the Static Web App."
  value       = module.static_webapp.static_web_app_default_hostname
}

output "static_web_app_api_key" {
  description = "Deployment token for GitHub Actions."
  value       = module.static_webapp.static_web_app_api_key
  sensitive   = true
}

output "dns_zone_id" {
  description = "Resource ID of the DNS zone."
  value       = azurerm_dns_zone.openhaptics.id
}

output "dns_zone_name_servers" {
  description = "Authoritative name servers for the DNS zone."
  value       = azurerm_dns_zone.openhaptics.name_servers
}

output "custom_domain_name" {
  description = "Custom domain attached to the Static Web App."
  value       = var.custom_domain_name
}

output "apex_domain_name" {
  description = "Apex domain attached via Front Door."
  value       = var.apex_domain_name
}

output "front_door_endpoint_hostname" {
  description = "Front Door endpoint hostname."
  value       = azurerm_cdn_frontdoor_endpoint.this.host_name
}
