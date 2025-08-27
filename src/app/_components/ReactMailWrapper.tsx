import { Body, Head, Html } from '@react-email/components';

export default function ReactMailWrapper({ children }: DefaultProps) {
  return (
    <Html>
      <Head />
      <Body>{children}</Body>
    </Html>
  );
}
