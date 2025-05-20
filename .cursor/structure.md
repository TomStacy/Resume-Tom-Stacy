# Project Structure for Cursor Composer

When organizing this project, follow this recommended structure:
project-root/
├── .cursor/           # Cursor IDE configuration
├── public/            # Static assets
├── src/
│   ├── assets/        # Project assets (images, fonts)
│   ├── components/
│   │   ├── ui/        # Shadcn/UI components
│   │   └── common/    # Shared components
│   ├── features/      # Feature-based modules
│   │   ├── auth/      # Authentication feature
│   │   │   ├── components/
│   │   │   ├── hooks/
│   │   │   ├── services/
│   │   │   ├── types/
│   │   │   └── index.ts
│   │   └── users/     # User management feature
│   │       ├── components/
│   │       ├── hooks/
│   │       ├── services/
│   │       ├── types/
│   │       └── index.ts
│   ├── hooks/         # Shared hooks
│   ├── lib/           # Utilities and helpers
│   ├── providers/     # Context providers
│   ├── routes/        # Route components
│   ├── services/      # API services
│   ├── types/         # Shared TypeScript types
│   ├── utils/         # Utility functions
│   ├── App.tsx        # Main App component
│   ├── index.css      # Global styles
│   └── main.tsx       # Entry point
├── .env.example       # Example environment variables
├── bun.lockb          # Bun lock file
├── components.json    # Shadcn/UI config
├── index.html         # HTML template
├── package.json       # Dependencies
├── tailwind.config.js # Tailwind configuration
├── tsconfig.json      # TypeScript config
└── vite.config.ts     # Vite config

## Feature-based Organization

Each feature directory should contain:

- `components/`: UI components specific to the feature
- `hooks/`: Custom React hooks for the feature
- `services/`: API services related to the feature
- `types/`: TypeScript types for the feature
- `utils/`: Utility functions for the feature
- `index.ts`: Exports the public API of the feature

## Example Feature Directory

features/auth/
├── components/
│   ├── LoginForm.tsx
│   ├── RegisterForm.tsx
│   ├── ResetPasswordForm.tsx
│   └── index.ts
├── hooks/
│   ├── useAuth.ts
│   └── index.ts
├── services/
│   ├── authService.ts
│   └── index.ts
├── types/
│   ├── auth.types.ts
│   └── index.ts
├── utils/
│   ├── tokenUtils.ts
│   └── index.ts
└── index.ts

## Exports and Imports

Use index files to export and import components and other modules:

```typescript
// features/auth/components/index.ts
export * from './LoginForm';
export * from './RegisterForm';
export * from './ResetPasswordForm';

// features/auth/index.ts
export * from './components';
export * from './hooks';
export * from './services';
export * from './types';

// Import example
import { LoginForm, useAuth } from '@/features/auth';
```
