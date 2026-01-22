# openhapticsorg

Experimental repo for open haptics experimentation.

## Development

- Install dependencies: `npm install`
- Start dev server: `npm run dev`

## Infrastructure (Terraform)

Terraform configuration lives in [infra/](infra/). It provisions the infrastructure used by this project.

### Prerequisites

- Terraform CLI installed
- Access to the target cloud subscription/account configured via environment variables or local CLI auth

### Common Commands

From the repository root:

- Initialize the working directory:
	- `cd infra`
	- `terraform init`
- Review changes:
	- `terraform plan`
- Apply changes:
	- `terraform apply`
- Destroy resources (use with caution):
	- `terraform destroy`

### Notes

- Keep state files out of version control (already ignored). Do not commit `terraform.tfstate`.
- If you use a remote backend, ensure the backend configuration is set before running `terraform init`.

## GitHub Actions

This repository uses GitHub Actions for CI and automation.

### What they do

- Run checks on pull requests (linting, tests, or build validation)
- Optionally deploy or publish artifacts when changes are merged to `main`

### How to use

- Open a pull request to trigger validation workflows automatically.
- Merges to `main` trigger any configured deployment or publish workflows.

If you add new workflows, document their purpose and required secrets in this README.
