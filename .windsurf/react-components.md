# React Component Structure

## Component Format

- Use functional components with TypeScript interfaces
- Use PascalCase for component file names (e.g., `UserCard.tsx`)
- Prefer named exports for components
- Keep components focused and single-purpose

## File Structure

```tsx
// Import dependencies
import { useState } from 'react';
import { Button } from '@/components/ui/button';

// Import types or define interface
interface ExampleProps {
  title: string;
  description?: string;
}

// Component definition
export function Example({ title, description }: ExampleProps) {
  // State/hooks
  const [isOpen, setIsOpen] = useState(false);
  
  // Event handlers
  const handleClick = () => {
    setIsOpen(prev => !prev);
  };
  
  // Component rendering
  return (
    <div className="p-4 border rounded-md">
      <h2 className="text-xl font-bold">{title}</h2>
      {description && <p className="text-gray-500">{description}</p>}
      <Button onClick={handleClick}>
        {isOpen ? 'Close' : 'Open'}
      </Button>
    </div>
  );
}
```
