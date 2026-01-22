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
