# Copilot Instructions for OpenHapticsOrg

## About This Repository

This is an experimental repository for open haptics experimentation. The project explores haptic feedback technologies and implementations.

## Technology Stack

- **Framework**: Next.js
- **Language**: TypeScript
- **Package Manager**: npm or yarn
- **Deployment**: Vercel (based on .gitignore configuration)

## Project Structure

- `/node_modules` - Dependencies (gitignored)
- `/.next/` - Next.js build output (gitignored)
- `/out/` - Static export output (gitignored)
- `/build` - Production build (gitignored)
- `/coverage` - Test coverage reports (gitignored)

## Commands

### Development
```bash
npm install          # Install dependencies
npm run dev          # Start development server
```

### Building
```bash
npm run build        # Build for production
npm run start        # Start production server
```

### Testing
```bash
npm test             # Run tests
npm run test:coverage # Run tests with coverage
```

### Linting
```bash
npm run lint         # Run linter
```

## Coding Guidelines

### General Principles
- This is an experimental repository - innovation and exploration are encouraged
- Prioritize clarity and documentation for experimental features
- Write clean, maintainable TypeScript code
- Follow React and Next.js best practices

### Style Guidelines
- Use TypeScript for all new code
- Follow consistent formatting (use project's linter/prettier config if available)
- Write meaningful commit messages
- Add comments for complex haptics algorithms or experimental features

### File Organization
- Keep components modular and reusable
- Use descriptive names for files and functions
- Organize haptics-related utilities in dedicated directories

### Accessibility Guidelines
**All UI components MUST comply with WCAG 2.1 AA standards to ensure ADA compliance, especially for visually impaired users:**

#### Screen Reader Support
- Use semantic HTML elements (`<button>`, `<nav>`, `<main>`, `<header>`, `<footer>`, etc.) instead of generic `<div>` or `<span>` when appropriate
- Provide descriptive `aria-label` or `aria-labelledby` attributes for interactive elements that lack visible text
- Use `aria-describedby` to provide additional context when needed
- Ensure all images have meaningful `alt` text that describes the content or function (use empty `alt=""` for decorative images)
- Add `aria-live` regions for dynamic content updates that should be announced to screen readers

#### Keyboard Navigation
- All interactive elements must be keyboard accessible (Tab, Enter, Space, Arrow keys)
- Provide visible focus indicators using `:focus-visible` CSS
- Maintain logical tab order (avoid positive `tabindex` values)
- Implement proper keyboard shortcuts and ensure they don't conflict with screen reader shortcuts
- Use `role="button"` with `onKeyDown` handlers for non-button interactive elements

#### Color and Contrast
- Ensure text has a minimum contrast ratio of 4.5:1 for normal text and 3:1 for large text (WCAG AA)
- Never use color alone to convey information (provide text labels, patterns, or icons as well)
- Support high contrast mode and respect user's system preferences

#### Text and Content
- Use clear, descriptive headings in proper hierarchical order (`<h1>` to `<h6>`)
- Provide skip links to bypass repetitive navigation
- Ensure text can be resized up to 200% without loss of functionality
- Use relative units (rem, em) instead of fixed pixels for font sizes
- Write clear error messages and associate them with form fields using `aria-describedby`

#### Forms and Interactive Elements
- Associate all form inputs with labels using `<label>` elements or `aria-label`
- Group related form elements with `<fieldset>` and `<legend>`
- Mark required fields explicitly with `required` attribute and `aria-required="true"`
- Provide clear error messages with `role="alert"` or `aria-live="assertive"`
- Use `autocomplete` attributes appropriately for common input types

#### Haptics and Accessibility
- Provide text alternatives or announcements for haptic feedback events
- Ensure haptic features have non-haptic equivalents (visual or audio cues)
- Allow users to disable or adjust haptic intensity
- Document haptic patterns and their meanings in accessible formats

#### Testing Requirements
- Test with screen readers (NVDA, JAWS, VoiceOver) before committing UI changes
- Validate with automated tools (axe, Lighthouse accessibility audit, WAVE)
- Ensure keyboard-only navigation works for all user flows
- Test with browser zoom at 200%
- Verify color contrast ratios meet WCAG AA standards

## Environment Variables

- Store sensitive data in `.env*.local` files (gitignored)
- Never commit `.env` files or secrets
- Document required environment variables in README or a `.env.example` file

## Testing Guidelines

- Write tests for new features, especially experimental haptics functionality
- Ensure tests pass before committing
- Maintain or improve test coverage when modifying existing code

## Git Workflow

- Make small, focused commits
- Write clear commit messages describing the change
- Test changes before committing
- Keep experimental features well-documented

## What NOT to Do

- Never commit `node_modules`, build artifacts, or environment files
- Don't modify `.gitignore` to include files that should remain ignored
- Avoid breaking existing functionality without clear justification
- Don't commit secrets, API keys, or sensitive data

## Additional Notes

This repository is focused on experimental work with haptic technologies. When working on haptics-related features:
- Document the purpose and expected behavior of haptic feedback implementations
- Consider cross-platform compatibility
- Test with various haptic-capable devices when possible
- Keep experimental code well-commented for future reference
