variable "name" {
  description = "Name of the Azure Static Web App."
  type        = string
}

variable "resource_group_name" {
  description = "Resource group name to create/use for the Static Web App."
  type        = string
}

variable "location" {
  description = "Azure region for the resource group and Static Web App."
  type        = string
  default     = "westus2"
}

variable "sku_tier" {
  description = "Static Web Apps SKU tier (Free or Standard)."
  type        = string
  default     = "Free"
}

variable "sku_size" {
  description = "Static Web Apps SKU size (Free or Standard)."
  type        = string
  default     = "Free"
}

variable "tags" {
  description = "Tags to apply to resources."
  type        = map(string)
  default     = {}
}
