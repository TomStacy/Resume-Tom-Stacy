# Project Structure

## Root Directory

project-root/
├── public/             # Static assets
├── src/                # Source code
│   ├── assets/         # Project assets
│   ├── components/     # Shared components
│   │   ├── ui/         # Shadcn/UI components
│   │   └── custom/     # Custom project components
│   ├── features/       # Feature-specific code
│   ├── hooks/          # Custom React hooks
│   ├── lib/            # Utilities and helpers
│   ├── routes/         # Route components
│   ├── services/       # API services
│   ├── store/          # State management
│   ├── types/          # TypeScript types
│   ├── App.tsx         # Main App component
│   ├── index.css       # Global styles
│   └── main.tsx        # Entry point
├── .env.example        # Example environment variables
├── components.json     # Shadcn/UI config
├── index.html          # HTML template
├── package.json        # Dependencies
├── tsconfig.json       # TypeScript config
└── vite.config.ts      # Vite config

## Feature-based Organization

- Group related components, hooks, and utilities by feature
- Use index files to export from feature directories
- Example feature directory:
features/authentication/
├── components/         # Auth-specific components
│   ├── LoginForm.tsx
│   ├── RegisterForm.tsx
│   └── index.ts        # Re-exports
├── hooks/              # Auth-specific hooks
│   ├── useAuth.ts
│   └── index.ts
├── services/           # Auth API services
│   ├── authService.ts
│   └── index.ts
├── types/              # Auth-specific types
│   ├── auth.types.ts
│   └── index.ts
├── utils/              # Auth utilities
│   ├── tokenUtils.ts
│   └── index.ts
└── index.ts            # Main feature export
