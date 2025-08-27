import { CSSProperties } from 'react';
import { Container, Img, Link, Section, Text } from '@react-email/components';
import { Tailwind } from '@react-email/tailwind';

export default function Page() {
  const containerStyle: CSSProperties = { maxWidth: '50em' };

  const main: CSSProperties = {
    backgroundColor: '#fff',
    fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
  };

  const footerText: CSSProperties = {
    fontSize: '12px',
    color: '#b7b7b7',
    lineHeight: '15px',
    textAlign: 'left' as const,
    marginBottom: '50px',
  };

  return (
    <Tailwind>
      <div style={main}>
        <Section className='px-4 pt-8'>
          {/* Header with Logo and Company Name */}
          <Container style={containerStyle} className='text-center'>
            <Img
              height='60'
              src={'https://igap.vn/wp-content/uploads/2022/11/logo.png'}
              alt='COMPANY_NAME'
            />
          </Container>
        </Section>

        {/* Main Content */}
        <Section className='px-4 py-8'>
          <Container style={containerStyle}>
            <Text className='text-gray-800 text-xl font-semibold m-0 mb-6'>
              Password Change Confirmation
            </Text>

            <Text className='text-gray-600 leading-relaxed m-0 mb-4'>
              Hello <b>USER_NAME</b>,
            </Text>

            <Text className='text-gray-600 leading-relaxed m-0 mb-4'>
              We are writing to confirm that your account password was successfully changed on <b>CHANGE_DATETIME</b>.
            </Text>

            <Container className='bg-blue-50 rounded-lg p-4 mb-6'>
              <Text className='text-blue-800 font-medium m-0 mb-2'><b>Important Security Notice:</b> If you did not initiate this password change, please take immediate action by:</Text>
              <ul className='m-0 px-4 mt-2'>
                <li className='m-0 text-blue-800'>Contacting our security team at <Link className='text-blue-700 font-medium' href='mailto:SUPPORT_EMAIL'>SUPPORT_EMAIL</Link></li>
                <li className='m-0 text-blue-800'>Calling our 24/7 support line: <Link className='text-blue-700 font-medium' href='tel:SUPPORT_PHONE'>SUPPORT_PHONE</Link></li>
              </ul>
            </Container>

            <Text className='text-gray-600 leading-relaxed m-0 mb-4'>
              To ensure continued security of your account, we recommend:
            </Text>

            <ul className='m-0 px-4 mb-10'>
              <li className='m-0'>
                <Text className='m-0 text-gray-600'>Review your recent account activity</Text>
              </li>
              <li className='m-0'>
                <Text className='m-0 text-gray-600'>Enable two-factor authentication</Text>
              </li>
              <li className='m-0'>
                <Text className='m-0 text-gray-600'>Update any similar passwords on other accounts</Text>
              </li>
            </ul>

            <hr className='border-gray-200 mb-6' />

            <Text className='text-gray-600 m-0 mb-4'>
              Best regards,
            </Text>
            <Text className='text-gray-800 font-semibold m-0'>
              iGap SME Security Team
            </Text>
          </Container>
        </Section>

        {/* Footer */}
        <Section className='bg-gray-50 rounded-b-lg px-4 py-6'>
          <Container style={containerStyle} className='text-center'>
            <Section style={{ marginTop: '50px' }}>
              <Img
                src={'https://igap.vn/wp-content/themes/igap/img/bg_01.png'}
                width={'100%'}
                alt='Background'
              />
              <Text style={footerText}>
                ©2017 Công Ty Cổ Phần Igap - iGap Join Stock Company.
                <br />
                158-158A Đào Duy Anh, Phường 9, Quận Phú Nhuận, TP.HCM.
                <br />
                <br />
                All rights reserved.
              </Text>
            </Section>

            <Text className='text-gray-400 text-xs m-0 mt-6'>
              This is an automated message, please do not reply directly to this email.
            </Text>
          </Container>
        </Section>
      </div>
    </Tailwind>
  );
}
