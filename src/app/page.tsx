import { Column, Container, Link, Row, Section, Text } from '@react-email/components';
import { Tailwind } from '@react-email/tailwind';
import fs from 'fs';
import path from 'path';

interface TemplatesShowcase {
  name: string;
  url: string;
  htmlUrl: string;
}

const templatesDir = path.join(process.cwd(), 'src/app');
const templateFolders = fs
  .readdirSync(templatesDir, { withFileTypes: true })
  .filter(
    (dirent) =>
      dirent.isDirectory() &&
      !dirent.name.startsWith('api') &&
      !dirent.name.startsWith('page') &&
      !dirent.name.startsWith('_') &&
      !dirent.name.startsWith('(') &&
      !dirent.name.startsWith('@')
  )
  .map((dirent) => dirent.name);

const templates: TemplatesShowcase[] = templateFolders.map((folder) => ({
  name: folder.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase()),
  url: `/${folder}`,
  htmlUrl: `/${folder}/export`,
}));

export default function Page() {
  return (
    <Tailwind>
      <Section className='min-h-screen py-12'>
        <Container className='max-w-5xl mx-auto px-4'>
          {/* Hero Section */}
          <Section className='text-center mb-12'>
            <Text className='text-4xl font-extrabold text-blue-600 mb-4'>
              Mail Template Vibe Coder
            </Text>
            <Text className='text-xl text-gray-600 mb-8'>
              Transform your email development workflow with our powerful React-based email template
              builder
            </Text>
          </Section>

          {/* Features */}
          <Section className='mb-12'>
            <Row className='mb-6'>
              <Column className='w-1/2'>
                <Section>
                  <Text className='m-0 mb-2 text-xl font-bold text-blue-600'>
                    🎨 React Components
                  </Text>
                  <Text className='m-0 text-gray-600'>
                    Build email templates using familiar React components and patterns.
                  </Text>
                  <Link className='m-0' href='https://react.email/components'>
                    Learn More
                  </Link>
                </Section>
              </Column>
              <Column className='w-1/2'>
                <Section>
                  <Text className='m-0 mb-2 text-xl font-bold text-purple-600'>
                    🎯 Tailwind Styling
                  </Text>
                  <Text className='m-0 text-gray-600'>
                    Style your templates with the power of Tailwind CSS utility classes.
                  </Text>
                  <Link className='m-0' href='https://tailwindcss.com'>
                    Learn More
                  </Link>
                </Section>
              </Column>
            </Row>
            <Row>
              <Column className='w-1/2'>
                <Section>
                  <Text className='m-0 mb-2 text-xl font-bold text-green-600'>📤 Easy Export</Text>
                  <Text className='m-0 text-gray-600'>
                    Export your templates to clean HTML with a single URL endpoint.
                  </Text>
                </Section>
              </Column>
              <Column className='w-1/2'>
                <Section>
                  <Text className='m-0 mb-2 text-xl font-bold text-orange-600'>📱 Responsive</Text>
                  <Text className='m-0 text-gray-600'>
                    Create email templates that look great on any device.
                  </Text>
                </Section>
              </Column>
            </Row>
          </Section>

          {/* How to Use Section */}
          <Section className='mb-12'>
            <Text className='text-2xl font-bold text-gray-800 mb-6 border-b pb-2'>
              Quick Start Guide 🚀
            </Text>
            <Section className='space-y-4'>
              <Row>
                <Column className='pr-6'>
                  <Text className='text-4xl font-bold text-blue-600'>1</Text>
                </Column>
                <Column className='w-full'>
                  <Text className='m-0 text-gray-800 font-semibold'>Create Template Directory</Text>
                  <Text className='m-0 text-gray-600'>
                    Create a new folder at{' '}
                    <code className='bg-gray-100 px-2 py-1 rounded-md text-blue-600'>
                      src/app/[template-name]
                    </code>
                  </Text>
                </Column>
              </Row>
              <Row>
                <Column className='pr-6'>
                  <Text className='text-4xl font-bold text-purple-600'>2</Text>
                </Column>
                <Column className='w-full'>
                  <Text className='m-0 text-gray-800 font-semibold'>Add Components</Text>
                  <Text className='m-0 text-gray-600'>
                    Import and use components from{' '}
                    <code className='bg-gray-100 px-2 py-1 rounded-md text-purple-600'>
                      @react-email/components
                    </code>
                  </Text>
                </Column>
              </Row>
              <Row>
                <Column className='pr-6'>
                  <Text className='text-4xl font-bold text-green-600'>3</Text>
                </Column>
                <Column className='w-full'>
                  <Text className='m-0 text-gray-800 font-semibold'>Style with Tailwind</Text>
                  <Text className='m-0 text-gray-600'>
                    Use Tailwind CSS classes to create beautiful designs
                  </Text>
                </Column>
              </Row>
              <Row>
                <Column className='pr-6'>
                  <Text className='text-4xl font-bold text-orange-600'>4</Text>
                </Column>
                <Column className='w-full'>
                  <Text className='m-0 text-gray-800 font-semibold'>Export Template</Text>
                  <Text className='m-0 text-gray-600'>
                    Access{' '}
                    <code className='bg-gray-100 px-2 py-1 rounded-md text-orange-600'>
                      /[template-name]/export
                    </code>{' '}
                    to get the HTML version
                  </Text>
                </Column>
              </Row>
            </Section>
          </Section>

          {/* Templates Showcase */}
          <Section className='mb-12'>
            <Text className='text-2xl font-bold text-gray-800 mb-6 border-b pb-2'>
              Available Templates ✨
            </Text>

            {templates.map((template, index) => (
              <Section key={index} className='mb-6'>
                <Row className='py-4 border-b'>
                  <Column className='w-3/4'>
                    <Text className='m-0 text-xl font-semibold text-gray-800'>{template.name}</Text>
                    <Link href={template.htmlUrl}>View HTML Source</Link>
                  </Column>
                  <Column className='w-1/4 text-right'>
                    <Link
                      href={template.url}
                      className='bg-blue-600 text-white px-4 py-2 rounded-md text-sm'
                    >
                      View Template
                    </Link>
                  </Column>
                </Row>
              </Section>
            ))}
          </Section>

          {/* Footer */}
          <Section>
            <Text className='text-lg font-bold text-gray-800 mb-4'>Get Started Now!</Text>
            <Text className='m-0 text-gray-600 mb-4'>
              Start building your own email templates with React and Tailwind CSS today. Check out
              the code on{' '}
              <Link
                href='https://github.com/truonggiangit793/mail-template-vibe-coder'
                className='text-blue-600 underline'
              >
                GitHub
              </Link>
            </Text>
            <center>
              <Text className='text-gray-500 text-xs m-0'>
                ©{new Date().getFullYear()} All Rights Reserved
              </Text>
            </center>
          </Section>
        </Container>
      </Section>
    </Tailwind>
  );
}
