# Project Rules and Coding Standards

## Technology Stack

- Package Manager: Bun
- Language: TypeScript with strict mode enabled
- Frontend Framework: React
- UI Components: Radix UI primitives with Shadcn/UI
- Styling: Tailwind CSS

## Coding Standards

### TypeScript

- Use strict TypeScript with explicit types
- Avoid `any` and `enum` types; use explicit types and maps instead
- Define component props with interfaces, not types
- Use TypeScript paths with `@/` prefix for imports
- Create a separate `types.ts` file for each feature module
- Use type-only imports (`import type { ... }`) where possible

### React Components

- Use functional components with TypeScript interfaces
- Use PascalCase for component filenames (e.g., `UserCard.tsx`)
- Prefer named exports for components
- Keep components focused and single-purpose
- Use React hooks for state and side effects
- Organize components by feature, not by type
- Use semantic HTML elements where possible
- Use `aria-` attributes and roles for accessibility as needed

### Styling

- Use Tailwind CSS for styling components
- Follow a mobile-first responsive approach
- Use CSS variables for theming
- Configure dark mode with Tailwind's dark mode utility
- Use Tailwind's semantic color names (e.g., `text-primary`, `bg-secondary`)

### Shadcn/UI and Radix

- Import Shadcn/UI components from `@/components/ui`
- Use Radix UI directly only for components not available in Shadcn/UI
- Maintain accessibility features from both libraries
- Customize components with Tailwind classes

### Project Structure

- Group related components, hooks, and utilities by feature
- Use index files to export from feature directories
- Use a flat structure within each feature directory (not the whole project)
- Use PascalCase for component files, kebab-case for other files and folders
- Keep feature folders even for single-file features for scalability

### Bun Package Manager

- Use Bun for package management, testing, and running scripts
- Configure scripts in package.json for common tasks
- Take advantage of Bun's native TypeScript support

### Testing

- Use Bun's test runner for unit and integration tests
- Place test files in `__tests__/` or `mocks/` folders within features
- Use `@testing-library/react` for React component testing
- Name test files as `*.test.ts(x)`

### Best Practices

- Write clean, maintainable code
- Follow the DRY (Don't Repeat Yourself) principle
- Optimize for accessibility (WCAG compliance)
- Use React Context for application state
- Document all exported functions/components with JSDoc comments
