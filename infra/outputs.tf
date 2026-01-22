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
