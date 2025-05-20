# Windsurf Commands and Guidelines

## AI Assistant Usage

### Basic Commands

- Start with clear, specific instructions
- Reference relevant guidelines files
- Use context pinning for consistent assistance

### Common Task Templates

``` markdown
# Component Creation
"Create a new [component name] following our project standards. Use TypeScript interfaces and follow the structure in .windsurf/project-structure.md."

# Code Refactoring
"Refactor this code to use TypeScript interfaces as defined in .windsurf/typescript-standards.md. Ensure proper type safety and maintainability."

# UI Implementation
"Implement this feature using Radix UI primitives as per .windsurf/radix-components.md. Follow the styling guidelines in .windsurf/styling-guidelines.md."

# Dark Mode
"Implement dark mode using Tailwind's dark utility. Follow the patterns established in our existing components."
```

## Guidelines Reference

When requesting assistance:

1. Reference specific guideline files
2. Use absolute paths for file references
3. Mention relevant configuration files (e.g., tsconfig.json, vite.config.ts)

### Example Context

"""
Please create this component following our project standards. Reference:

- .windsurf/project-structure.md for directory organization
- .windsurf/typescript-standards.md for type definitions
- .windsurf/radix-components.md for UI implementation
"""

## Best Practices

- Always specify the desired outcome clearly
- Reference relevant guideline files
- Use consistent terminology
- Provide context about the existing codebase
- Mention any specific requirements or constraints

## Error Handling

When receiving suggestions:

1. Check against relevant guidelines
2. Request clarification if needed
3. Use "check guidelines and revise" for adjustments
4. Reference specific guideline files for context
