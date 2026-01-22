# Azure Static Web App Module

Creates an Azure Static Web App plus a resource group.

## Usage

```hcl
module "static_webapp" {
  source              = "../modules/static-webapp"
  name                = "ohs-static-webapp"
  resource_group_name = "ohs-rg"
  location            = "westus2"
  tags = {
    project = "OpenHaptic-Sports"
  }
}
```

## Outputs
- `static_web_app_api_key` (sensitive) – use as GitHub Actions secret for deployment.
- `static_web_app_default_hostname`
