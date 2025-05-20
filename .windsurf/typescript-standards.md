# TypeScript Standards

## Core Principles

- Enable strict mode in TypeScript for better type safety
- Avoid using `any` and `enum`; use explicit types and maps instead
- Use TypeScript interfaces for component props
- Use type inference when appropriate

## Type Definitions

- Create a `types.ts` file in each feature directory for local types
- Place shared types in a `types` directory at the root level
- Use meaningful names for types that reflect their purpose
- Example:

```typescript
// Prefer this
interface UserProfile {
  id: string;
  name: string;
  email: string;
  isVerified: boolean;
}

// Over this
type User = {
  id: string;
  name: string;
  email: string;
  isVerified: boolean;
}
