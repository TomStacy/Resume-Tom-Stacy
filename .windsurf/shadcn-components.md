# Shadcn/UI Integration Guidelines

## Setup

- Install Shadcn/UI using the CLI: `bunx shadcn-ui@latest init`
- When prompted about React 19 compatibility, choose the appropriate option
- Add components as needed: `bunx shadcn-ui@latest add button`

## Configuration

- Modify the `components.json` file for your project's needs:

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "default",
  "rsc": false,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.js",
    "css": "src/index.css",
    "baseColor": "slate",
    "cssVariables": true
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils"
  }
}
```
