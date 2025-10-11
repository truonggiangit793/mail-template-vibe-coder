import { CSSProperties } from 'react';
import { Container, Img, Section, Text } from '@react-email/components';

export default function TemplateFooter() {
  const containerStyle: CSSProperties = { maxWidth: '50em' };

  return (
    <Container style={containerStyle} className='bg-gray-100 rounded-lg px-4 pb-6'>
      <Section className='mt-6 text-center'>
        <center className='mt-4 mb-4'>
          <Img height='30' src={'/logo.png'} alt='iGap Logo' />
        </center>
        <Text className='text-gray-500 text-xs m-0'>©{new Date().getFullYear()} iGap JSC</Text>
        <Text className='text-gray-500 text-xs m-0'>158 Đào Duy Anh, Phường Đức Nhuận</Text>
        <Text className='text-gray-500 text-xs m-0'>Thành phố Hồ Chí Minh, Việt Nam</Text>
        <Text className='text-gray-500 text-xs m-0'>All Rights Reserved</Text>
        <Text className='text-gray-400 text-xs text-center mb-0'>
          SMART DELIVERY – TOGETHER HAPPY
        </Text>
      </Section>
    </Container>
  );
}
