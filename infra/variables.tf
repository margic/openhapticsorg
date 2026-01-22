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
