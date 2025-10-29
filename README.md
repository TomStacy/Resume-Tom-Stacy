# Tom Stacy - Personal Portfolio Website

This is the source code for Tom Stacy's personal portfolio website, built with modern web technologies.

## Deployment

Hosted on Cloudflare Pages with automatic CI/CD - every git push to main triggers an instant global deployment. Free tier includes SSL, unlimited bandwidth, and edge caching across 200+ data centers worldwide.

## Technologies Used

This project is built with:

- **Vite** - Fast build tool and development server
- **TypeScript** - Type-safe JavaScript
- **React** - Declarative, component-based library for building reactive user interfaces
- **shadcn-ui** - Beautifully designed components
- **Tailwind CSS** - Utility-first CSS framework

## Getting Started

### Prerequisites

- Bun installed - [install bun](https://bun.sh)

### Local Development

Follow these steps to run the project locally:

```sh
# Step 1: Clone the repository
git clone https://github.com/TomStacy/Resume-Tom-Stacy.git

# Step 2: Navigate to the project directory
cd Resume-Tom-Stacy

# Step 3: Install the necessary dependencies
bun install

# Step 4: Start the development server
bun run dev
```

The development server will start with auto-reloading and an instant preview, typically at `http://localhost:5173`.

## Available Scripts

- `bun run dev` - Start the development server
- `bun run build` - Build for production
- `bun run preview` - Preview the production build locally
- `bun run lint` - Run ESLint to check code quality

## Project Structure

- `/src` - Source code
  - `/components` - React components
  - `/pages` - Page components
  - `/hooks` - Custom React hooks
  - `/lib` - Utility functions
- `/public` - Static assets
- `/src/components/ui` - shadcn-ui components

## Deployment Alternateives

Although this project is deployed on Cloudflare, this project can be deployed to any static hosting service such as:

- GitHub Pages
- Vercel
- Netlify

## License

© 2025 Tom Stacy. All rights reserved.
