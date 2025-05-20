# Shadcn/UI Setup for Cursor Composer

## Installation

Install and configure Shadcn/UI with Bun:

```bash
# Install the CLI
bun add -d @shadcn/ui
```

```bash
# Initialize Shadcn/UI
bunx shadcn-ui@latest init
```

## Configuration Options

When prompted during initialization, use these options:

Style: Default
Base Color: Slate
CSS Variables: Yes
Global CSS File: src/index.css
CSS Reset: Tailwind (recommended)
Preflight: Yes
Tailwind Config: tailwind.config.js
Components Path: src/components/ui
Utilities Path: src/lib/utils.ts
Import Alias: @/

## Components JSON

Your components.json should look like this:

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

## Adding Components

Add individual components:

```bash
bunx shadcn-ui@latest add button
bunx shadcn-ui@latest add card
bunx shadcn-ui@latest add form
```

## Component Usage

Import and use Shadcn/UI components:

```tsx
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function ExampleCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <Button>Action</Button>
      </CardFooter>
    </Card>
  );
}
```

## Dark Mode

Configure dark mode in tailwind.config.js:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      // Your theme extensions
    },
  },
  plugins: [require("tailwindcss-animate")],
}
```

## Add dark mode toggle functionality

```tsx
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
  }, [theme]);

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {theme === "light" ? (
        <Moon className="h-[1.2rem] w-[1.2rem]" />
      ) : (
        <Sun className="h-[1.2rem] w-[1.2rem]" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
```

## Customizing and Updating Components

- To customize a Shadcn/UI component, copy it to your project and modify as needed, or extend it with Tailwind classes.
- Keep Shadcn/UI components up to date by running `bunx shadcn-ui@latest add [component-name]` again when updates are available.

## Troubleshooting

- If a component import fails, ensure it has been added with the CLI and exists in `src/components/ui`.
- If styles are missing, check that `src/index.css` includes the Shadcn/UI and Tailwind imports.
- If you encounter issues with the CLI, try deleting `node_modules`/`bun.lockb` and reinstalling dependencies.
