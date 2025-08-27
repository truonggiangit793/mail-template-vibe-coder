import { Container, Link, Section, Text } from '@react-email/components';
import { Tailwind } from '@react-email/tailwind';

export default function Page() {
  return (
    <Tailwind>
      <Section className="min-h-screen bg-gray-100 py-12">
        <Container className="max-w-4xl mx-auto">
          <Section className="bg-white rounded-lg shadow-lg p-8">
            <Text className="text-3xl font-bold text-gray-800 mb-6">
              Mail Template Vide Coder
            </Text>

            <Text className="text-gray-600 mb-8">
              Create beautiful, responsive email templates using React components and Tailwind CSS. Build your templates with code and export them as pure HTML.
            </Text>

            <Section className="space-y-6">
              <Section className="bg-gray-50 p-6 rounded-lg">
                <Text className="font-semibold text-lg text-gray-800 mb-2">
                  How to Use:
                </Text>
                <Text className="text-gray-600 mb-2">
                  1. Create a new template folder in <code className="bg-gray-200 px-2 py-1 rounded">src/app/[template-name]</code>
                </Text>
                <Text className="text-gray-600 mb-2">
                  2. Add your React components using <code className="bg-gray-200 px-2 py-1 rounded">@react-email/components</code>
                </Text>
                <Text className="text-gray-600 mb-2">
                  3. Style with Tailwind CSS classes
                </Text>
                <Text className="text-gray-600">
                  4. Export your template by accessing <code className="bg-gray-200 px-2 py-1 rounded">/[template-name]/export</code>
                </Text>
              </Section>

              <Section className="bg-gray-50 p-6 rounded-lg">
                <Text className="font-semibold text-lg text-gray-800 mb-4">
                  Available Templates:
                </Text>
                <Link href="/my-template" className="text-blue-600 hover:text-blue-800 block mb-2">
                  → Sample Template
                </Link>
                <Text className="text-sm text-gray-500">
                  View the HTML version: <Link href="/my-template/export" className="text-blue-600 hover:text-blue-800">/my-template/export</Link>
                </Text>
              </Section>
            </Section>
          </Section>
        </Container>
      </Section>
    </Tailwind>
  );
}
