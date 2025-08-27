# Mail Template Vibe Coder

Transform your email development workflow with our powerful React-based email template builder. Built with Next.js and modern web technologies to make email template development a breeze.

## Key Features

- 🎨 **React Components** - Build email templates using familiar React components from @react-email/components
- 🎯 **Tailwind Integration** - Style your templates with Tailwind CSS utilities for beautiful, responsive designs
- � **Professional Templates** - Ready-to-use templates with logo, social links, and responsive layouts
- 📱 **Mobile-First Design** - Create email templates that look great on any device with responsive components
- � **Easy Export** - Get clean HTML output with a single URL endpoint
- ⚡ **Live Preview** - See your changes in real-time as you develop

## Component Library

Built with [@react-email/components](https://react.email/docs/components/button), offering:

- Container - For layout structure
- Section - For content grouping
- Row & Column - For grid layouts
- Text - For content blocks
- Link - For interactive elements
- Tailwind - For styling with utilities

## Prerequisites

- Node.js 14.0 or later
- npm, yarn, or pnpm package manager

## Installation

1. Clone the repository:

```bash
git clone https://github.com/truonggiangit793/mail-template-vibe-coder.git
cd mail-template-vibe-coder
```

2. Install dependencies:

```bash
yarn install
# or
npm install
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Available Scripts

- `yarn dev` - Start development server
- `yarn build` - Build for production
- `yarn start` - Start production server
- `yarn lint-fix` - Fix all linting issues
- `yarn lint-fix:es` - Fix ESLint issues
- `yarn lint-fix:prettier` - Fix Prettier formatting

## Quick Start Guide 🚀

1. **Create Template Directory**

   - Create a new folder at `src/app/[template-name]`
   - Example: `src/app/my-template`

2. **Design Your Template**

   ```tsx
   import { Column, Container, Link, Row, Section, Text } from '@react-email/components';
   import { Tailwind } from '@react-email/tailwind';

   export default function Template() {
     return (
       <Tailwind>
         <Section className='bg-gradient-to-b from-gray-50 to-gray-100'>
           <Container>{/* Your email content here */}</Container>
         </Section>
       </Tailwind>
     );
   }
   ```

3. **Add Export Endpoint**
   Create `export/route.ts` in your template directory to enable HTML export

4. **Preview & Export**
   - View live preview at: `http://localhost:3000/[template-name]`
   - Get HTML version at: `http://localhost:3000/[template-name]/export`

## Sample Template Features ✨

Our included sample template (`/my-template`) showcases:

- Professional layout with gradient backgrounds
- Company logo and branding
- Social media integration (Facebook, Instagram, LinkedIn, GitHub)
- Job title and contact information
- Responsive design for all devices
- Clean, modern aesthetics with Tailwind CSS

## Dependencies

### Core

- Next.js 13.4
- React 18.2
- TypeScript 5.1
- @react-email/components 0.0.11
- @react-email/tailwind 1.0.5

### Development

- ESLint with multiple plugins
- Prettier for code formatting
- TypeScript configuration
- Tailwind CSS integration
