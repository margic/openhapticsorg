terraform {
  required_version = ">= 1.5.0"

  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "~> 3.111"
    }
    time = {
      source  = "hashicorp/time"
      version = "~> 0.12"
    }
  }
}
