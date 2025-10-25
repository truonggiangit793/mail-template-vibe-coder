import { CSSProperties } from 'react';
import { Container, Img, Text } from '@react-email/components';

export default function TemplateFooter() {
  const containerStyle: CSSProperties = { maxWidth: '50em' };

  return (
    <Container style={containerStyle} className='bg-gray-100 rounded-lg p-6'>
      <center>
        <Img height='30' src={'https://dev-sme.igap.vn/logo.png'} alt='iGap Logo' />
      </center>

      <center className='my-4'>
        <Text className='text-gray-400 m-0'>©{new Date().getFullYear()} iGap JSC</Text>
        <Text className='text-gray-400 m-0'>158 Đào Duy Anh, Phường Đức Nhuận</Text>
        <Text className='text-gray-400 m-0'>Thành phố Hồ Chí Minh, Việt Nam</Text>
        <Text className='text-gray-400 m-0'>All Rights Reserved</Text>
      </center>

      <center>
        <Text className='text-gray-400 m-0'>SMART DELIVERY – TOGETHER HAPPY</Text>
      </center>
    </Container>
  );
}
