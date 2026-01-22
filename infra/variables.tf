variable "static_web_app_name" {
  description = "Name for the Azure Static Web App."
  type        = string
  default     = "openhaptics-static-webapp"
}

variable "resource_group_name" {
  description = "Resource group name for the Static Web App."
  type        = string
  default     = "openhaptics-rg"
}

variable "location" {
  description = "Azure region for resources."
  type        = string
  default     = "westus2"
}

variable "tags" {
  description = "Tags to apply to resources."
  type        = map(string)
  default = {
    project = "OpenHaptic-Sports"
  }
}

variable "custom_domain_name" {
  description = "Custom domain to attach to the Static Web App (subdomain only)."
  type        = string
  default     = "www.openhaptics.org"
}

variable "enable_swa_custom_domain" {
  description = "Enable attaching the subdomain to the Static Web App after DNS is delegated."
  type        = bool
  default     = true
}

variable "apex_domain_name" {
  description = "Apex/root domain to attach via Front Door."
  type        = string
  default     = "openhaptics.org"
}

variable "front_door_profile_name" {
  description = "Name for the Azure Front Door profile. Must be globally unique."
  type        = string
  default     = "openhaptics-frontdoor"
}

variable "front_door_endpoint_name" {
  description = "Name for the Azure Front Door endpoint. Must be globally unique."
  type        = string
  default     = "openhaptics-frontdoor-endpoint"
}

variable "enable_apex_domain_association" {
  description = "Enable associating the apex domain to the Front Door route after DNS validation."
  type        = bool
  default     = true
}
