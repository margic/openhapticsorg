# Dev Container Configuration

This directory contains the GitHub Codespaces dev container configuration for the OpenHaptics React development environment.

## Features

### High Contrast Accessibility Settings

This dev container is specifically configured with accessibility features for visually impaired developers:

- **High Contrast Theme**: Default High Contrast theme is pre-configured
- **Enhanced Font Settings**: Larger font size (16px), heavier font weight (500), and increased line height (24px)
- **Audio Signals**: Sound notifications for errors, warnings, task completion, and other important events
- **Visual Enhancements**:
  - Thicker cursor (3px width)
  - Solid cursor blinking
  - All whitespace rendered
  - Full line highlighting
  - Bracket pair colorization enabled
  - Active indentation guides
  - Minimap disabled for less visual clutter

### Development Tools

The container includes:

- **Node.js 20**: Latest LTS version for React development
- **Git & GitHub CLI**: Version control and GitHub integration
- **React Development Extensions**:
  - ESLint for code quality
  - Prettier for code formatting
  - React snippets for faster development
  - TypeScript support
  - Next.js snippets (based on project configuration)

### Port Forwarding

- **Port 3000**: React development server (auto-notify on forward)
- **Port 3001**: Additional development port

## Usage

### Opening in GitHub Codespaces

1. Navigate to the repository on GitHub
2. Click the "Code" button
3. Select the "Codespaces" tab
4. Click "Create codespace on [branch-name]"

The dev container will automatically set up with all the configured settings and extensions.

### Local Development with Dev Containers

If you're using VS Code with the Dev Containers extension:

1. Open the repository in VS Code
2. Press `F1` and select "Dev Containers: Reopen in Container"
3. Wait for the container to build and configure

## Customization

You can customize the settings by editing `.devcontainer/devcontainer.json`:

- **Theme**: Change `workbench.colorTheme` to your preferred high contrast theme
- **Font Size**: Adjust `editor.fontSize` and `terminal.integrated.fontSize`
- **Extensions**: Add or remove extensions in the `extensions` array

## Accessibility Resources

For more information on VS Code accessibility features, visit:
- [VS Code Accessibility Documentation](https://code.visualstudio.com/docs/editor/accessibility)
- [High Contrast Themes Guide](https://code.visualstudio.com/docs/getstarted/themes#_selecting-the-color-theme)
