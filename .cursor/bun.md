# Bun Configuration for Cursor Composer

## Package Management

Use Bun for package management:

```bash
# Install dependencies
bun install
```

### Add production dependencies

```bash
bun add react react-dom @radix-ui/react-icons
```

### Add development dependencies

```bash
bun add -d typescript @types/react @types/react-dom vite
```

### Remove dependencies

```bash
bun remove [package-name]
```

## Scripts in package.json

Configure these scripts for development:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "test": "bun test",
    "lint": "eslint src --ext ts,tsx",
    "format": "prettier --write \"src/**/*.{ts,tsx}\""
  }
}
```

## Running Scripts

Use Bun to run scripts:

```bash
# Development server
bun run dev

# Production build
bun run build

# Run tests
bun run test

# Lint code
bun run lint
```

## Bun with React and TypeScript

For React + TypeScript projects:

```bash
# Create new project
bun create vite my-app --template react-ts

# Install dependencies and start
cd my-app
bun install
bun run dev
```

## Environment Variables

Bun automatically loads environment variables from .env files:

```bash
# .env.example
VITE_API_URL=https://api.example.com
VITE_API_KEY=your-api-key
```

Access in your code:

```typescript
const apiUrl = import.meta.env.VITE_API_URL;
```
