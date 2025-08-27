import { Column, Container, Link, Row, Section, Text } from '@react-email/components';
import { Tailwind } from '@react-email/tailwind';

export default function Page() {
  return (
    <Tailwind>
      <Section className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12">
        <Container className="max-w-5xl mx-auto px-4">
          {/* Hero Section */}
          <Section className="text-center mb-12">
            <Text className="text-4xl font-extrabold text-blue-600 mb-4">
              Mail Template Vide Coder
            </Text>
            <Text className="text-xl text-gray-600 mb-8">
              Transform your email development workflow with our powerful React-based email template builder
            </Text>
          </Section>

          {/* Features */}
          <Row>
            <Column>
              <Section className="bg-white rounded-xl shadow-lg h-full transform transition-transform hover:-translate-y-1 hover:shadow-xl">
                <Text className="text-xl font-bold text-blue-600 mb-1">🎨 React Components</Text>
                <Text className="text-gray-600">Build email templates using familiar React components and patterns</Text>
              </Section>
            </Column>
          </Row>
          <Row>
            <Column>
              <Section className="bg-white rounded-xl shadow-lg h-full transform transition-transform hover:-translate-y-1 hover:shadow-xl">
                <Text className="text-xl font-bold text-purple-600 mb-1">🎯 Tailwind Styling</Text>
                <Text className="text-gray-600">Style your templates with the power of Tailwind CSS utility classes</Text>
              </Section>
            </Column>
          </Row>
          <Row>
            <Column>
              <Section className="bg-white rounded-xl shadow-lg h-full transform transition-transform hover:-translate-y-1 hover:shadow-xl">
                <Text className="text-xl font-bold text-green-600 mb-1">📤 Easy Export</Text>
                <Text className="text-gray-600">Export your templates to clean HTML with a single URL endpoint</Text>
              </Section>
            </Column>
          </Row>
          <Row>
            <Column>
              <Section className="bg-white rounded-xl shadow-lg h-full transform transition-transform hover:-translate-y-1 hover:shadow-xl">
                <Text className="text-xl font-bold text-orange-600 mb-1">📱 Responsive</Text>
                <Text className="text-gray-600">Create email templates that look great on any device</Text>
              </Section>
            </Column>
          </Row>

          {/* How to Use Section */}
          <Section className="bg-white rounded-xl shadow-lg p-8 mb-8 backdrop-blur-lg bg-opacity-90">
            <Text className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">
              Quick Start Guide 🚀
            </Text>
            <Section className="space-y-4">
              <Row>
                <Column className="w-1/6">
                  <Text className="text-4xl font-bold text-blue-600">1</Text>
                </Column>
                <Column className="w-5/6">
                  <Text className="text-gray-800 font-semibold mb-2">Create Template Directory</Text>
                  <Text className="text-gray-600">Create a new folder at <code className="bg-gray-100 px-2 py-1 rounded-md text-blue-600">src/app/[template-name]</code></Text>
                </Column>
              </Row>
              <Row>
                <Column className="w-1/6">
                  <Text className="text-4xl font-bold text-purple-600">2</Text>
                </Column>
                <Column className="w-5/6">
                  <Text className="text-gray-800 font-semibold mb-2">Add Components</Text>
                  <Text className="text-gray-600">Import and use components from <code className="bg-gray-100 px-2 py-1 rounded-md text-purple-600">@react-email/components</code></Text>
                </Column>
              </Row>
              <Row>
                <Column className="w-1/6">
                  <Text className="text-4xl font-bold text-green-600">3</Text>
                </Column>
                <Column className="w-5/6">
                  <Text className="text-gray-800 font-semibold mb-2">Style with Tailwind</Text>
                  <Text className="text-gray-600">Use Tailwind CSS classes to create beautiful designs</Text>
                </Column>
              </Row>
              <Row>
                <Column className="w-1/6">
                  <Text className="text-4xl font-bold text-orange-600">4</Text>
                </Column>
                <Column className="w-5/6">
                  <Text className="text-gray-800 font-semibold mb-2">Export Template</Text>
                  <Text className="text-gray-600">Access <code className="bg-gray-100 px-2 py-1 rounded-md text-orange-600">/[template-name]/export</code> to get the HTML version</Text>
                </Column>
              </Row>
            </Section>
          </Section>

          {/* Templates Showcase */}
          <Section className="bg-white rounded-xl shadow-lg p-8 backdrop-blur-lg bg-opacity-90">
            <Text className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">
              Available Templates ✨
            </Text>
            <Section className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 transform transition-transform hover:scale-[1.02]">
              <Row>
                <Column className="w-3/4">
                  <Link href="/my-template" className="text-xl font-semibold text-blue-600 hover:text-blue-800 block mb-2">
                    → Sample Email Template
                  </Link>
                  <Text className="text-gray-600 mb-4">
                    A professional email template with logo, social links, and responsive design
                  </Text>
                </Column>
                <Column className="w-1/4 text-right">
                  <Link href="/my-template/export" className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    View HTML Source →
                  </Link>
                </Column>
              </Row>
            </Section>
          </Section>
        </Container>
      </Section>
    </Tailwind >
  );
}
