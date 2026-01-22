output "static_web_app_id" {
  description = "Resource ID of the Static Web App."
  value       = azurerm_static_web_app.this.id
}

output "static_web_app_name" {
  description = "Name of the Static Web App."
  value       = azurerm_static_web_app.this.name
}

output "static_web_app_default_hostname" {
  description = "Default hostname for the Static Web App."
  value       = azurerm_static_web_app.this.default_host_name
}

output "static_web_app_api_key" {
  description = "Deployment token for GitHub Actions."
  value       = azurerm_static_web_app.this.api_key
  sensitive   = true
}

output "resource_group_name" {
  description = "Resource group name used for the Static Web App."
  value       = azurerm_resource_group.this.name
}
