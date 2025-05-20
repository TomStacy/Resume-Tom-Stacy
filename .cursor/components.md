# Component Standards for Cursor Composer

When writing React components for this project, follow these guidelines:

## Component Template

```tsx
import { useState } from 'react';
import { Button } from '@/components/ui/button';

// Define component props interface
interface ComponentNameProps {
  title: string;
  description?: string;
  onAction?: () => void;
}

/**
 * ComponentName - Brief description of what this component does
 */
export function ComponentName({ 
  title, 
  description, 
  onAction 
}: ComponentNameProps) {
  // State and hooks
  const [state, setState] = useState(false);
  
  // Event handlers
  const handleClick = () => {
    setState(!state);
    if (onAction) onAction();
  };
  
  // Render component
  return (
    <div className="space-y-4 p-4 rounded-lg bg-card">
      <h2 className="text-xl font-bold text-foreground">{title}</h2>
      {description && <p className="text-muted-foreground">{description}</p>}
      <Button onClick={handleClick}>Click me</Button>
    </div>
  );
}
```

## Alays use Shadcn/ui components when available

```tsx
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function ExampleForm() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Account Information</CardTitle>
        <CardDescription>Update your account details</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" placeholder="Your name" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="your@email.com" />
        </div>
      </CardContent>
      <CardFooter>
        <Button>Save changes</Button>
      </CardFooter>
    </Card>
  );
}
```

## When using Radix UI primitives directly (for components not in Shadcn/UI)

```tsx
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@radix-ui/react-icons';

interface CustomAccordionProps {
  items: {
    title: string;
    content: React.ReactNode;
  }[];
}

export function CustomAccordion({ items }: CustomAccordionProps) {
  return (
    <Accordion.Root 
      type="single" 
      collapsible 
      className="space-y-2"
    >
      {items.map((item, index) => (
        <Accordion.Item 
          key={index} 
          value={`item-${index}`}
          className="border rounded-md overflow-hidden"
        >
          <Accordion.Trigger className="flex justify-between w-full px-4 py-2 text-left font-medium bg-muted hover:bg-muted/80">
            {item.title}
            <ChevronDownIcon className="h-5 w-5 transition-transform duration-200 ease-in-out group-data-[state=open]:rotate-180" />
          </Accordion.Trigger>
          <Accordion.Content className="data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
            <div className="p-4">{item.content}</div>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
```
