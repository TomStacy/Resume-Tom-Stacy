# TypeScript Configuration for Cursor Composer

## tsconfig.json

Use this configuration as a reference for TypeScript in this project:

```json
{
  "compilerOptions": {
    "target": "ESNext",
    "useDefineForClassFields": true,
    "lib": ["DOM", "DOM.Iterable", "ESNext"],
    "allowJs": false,
    "skipLibCheck": true,
    "esModuleInterop": false,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "module": "ESNext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

## TypeScript Best Practices

### Type Definitions

```typescript
// Prefer interfaces for objects
interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  isActive: boolean;
}

// Use type for unions and complex types
// Do NOT use 'type' for component props; always use 'interface' for props
// Use type for unions, mapped types, and utility types only

type UserRole = 'admin' | 'user' | 'guest';

// Use Record for dictionaries
type UsersById = Record<string, User>;

// Use generics where appropriate
interface ApiResponse<T> {
  data: T;
  error?: string;
  status: number;
}

// Use utility types where appropriate
// Examples: Partial<T>, Pick<T>, Omit<T>, Required<T>
```

### Component Props

```typescript
// Component props with required and optional properties
// Always use 'interface' for component props
interface ButtonProps {
  // Required props
  children: React.ReactNode;
  onClick: () => void;
  
  // Optional props with defaults
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  isDisabled?: boolean;
  isLoading?: boolean;
  className?: string;
}

// With default props
function Button({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  isDisabled = false,
  isLoading = false,
  className = '',
}: ButtonProps) {
  // Implementation
}
```

### Proper Type Imports/Exports

```typescript
// In types/user.types.ts
export interface User {
  id: string;
  name: string;
}

export type UserRole = 'admin' | 'user';

// In a component
import type { User, UserRole } from '@/types/user.types';
```

// Use type-only imports (`import type { ... }`) for types wherever possible
