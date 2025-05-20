# Styling Guidelines

## Tailwind CSS

- Use Tailwind CSS for styling components
- Follow a mobile-first responsive approach
- Use consistent spacing, colors, and typography

## CSS Variables

- Use CSS variables for theming
- Define variables in the root styles file
- Access via Tailwind's var() function

## Component Classes

- Use consistent class naming
- Prefer utility classes over custom CSS
- Use appropriate spacing units

## Example

```tsx
// Good example
<div className="flex flex-col space-y-4 p-6 rounded-lg bg-card shadow-sm">
  <h2 className="text-xl font-bold text-primary">Title</h2>
  <p className="text-muted-foreground">Description text</p>
  <Button className="mt-2">Click me</Button>
</div>

// Avoid
<div className="custom-card">
  <h2 className="card-title">Title</h2>
  <p className="card-text">Description text</p>
  <Button className="card-button">Click me</Button>
</div>
```
