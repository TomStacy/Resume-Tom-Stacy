# Bun Package Manager Guidelines

## Installation

- Install dependencies: `bun install`
- Add new dependencies: `bun add <package-name>`
- Add dev dependencies: `bun add -d <package-name>`

## Scripts

- Set up scripts in package.json:

```json
{
  "scripts": {
    "dev": "bun run --hot src/main.tsx",
    "build": "bun build src/main.tsx --outdir dist",
    "preview": "bun serve dist",
    "test": "bun test",
    "lint": "eslint src --ext ts,tsx --report-unused-disable-directives --max-warnings 0"
  }
}
