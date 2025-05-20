# Radix UI Integration Guidelines

## Using Radix with Shadcn/UI

- Shadcn/UI components are built on Radix UI primitives
- Follow Shadcn/UI components first, extend with Radix when needed
- Use Radix directly for components not available in Shadcn/UI

## Direct Radix Usage

- Import from `@radix-ui/react-*` packages
- Use with Tailwind for styling
- Maintain accessibility features

## Example: Custom Radix Tooltip

```tsx
import * as Tooltip from '@radix-ui/react-tooltip';

export function CustomTooltip({ 
  children, 
  content 
}: { 
  children: React.ReactNode;
  content: React.ReactNode;
}) {
  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          {children}
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            className="bg-black text-white px-4 py-2 rounded-md text-sm animate-in fade-in-0 zoom-in-95"
            sideOffset={5}
          >
            {content}
            <Tooltip.Arrow className="fill-black" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}
```
