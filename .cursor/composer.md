# Cursor Composer Instructions

This file contains instructions and prompts for Cursor Composer to follow when generating or modifying code in this project.

## General Instructions

When using Cursor Composer, provide clear instructions like:

- "Create a new component following our project standards"
- "Refactor this code to use TypeScript interfaces"
- "Add Shadcn/UI components to this form"
- "Implement dark mode using Tailwind's dark utility"

## Component Generation Prompt

Use this prompt for generating new components:
Create a [COMPONENT_NAME] component that [DESCRIBE_FUNCTIONALITY].
This component should:

Accept props for [LIST_PROPS]
Use Shadcn/UI components where appropriate
Follow our TypeScript and styling standards
Be accessible and responsive

## Form Generation Prompt

Use this prompt for generating forms:
Create a form component for [FORM_PURPOSE] with the following fields:

[FIELD_1_NAME]: [FIELD_1_TYPE] - [FIELD_1_DESCRIPTION]
[FIELD_2_NAME]: [FIELD_2_TYPE] - [FIELD_2_DESCRIPTION]

The form should:

Use Shadcn/UI form components
Implement validation with Zod
Handle form submission
Show loading and error states

## Hook Generation Prompt

Use this prompt for creating custom hooks:
Create a custom hook called [HOOK_NAME] that [DESCRIBE_FUNCTIONALITY].
This hook should:

Accept parameters for [LIST_PARAMETERS]
Return [DESCRIBE_RETURN_VALUES]
Handle edge cases like [DESCRIBE_EDGE_CASES]
Be typed correctly with TypeScript

## Shadcn/UI Installation Instructions

To add Shadcn/UI components to the project:

1. Install the CLI: `bun add -d @shadcn/ui`
2. Initialize Shadcn/UI: `bunx shadcn-ui@latest init`
3. Add components as needed: `bunx shadcn-ui@latest add [component-name]`

Example command for adding multiple components:
`bunx shadcn-ui@latest add button card input form label`
