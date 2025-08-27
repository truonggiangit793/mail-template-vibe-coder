import { CSSProperties } from 'react';
import { Container, Hr, Img, Link, Section, Text } from '@react-email/components';
import { Tailwind } from '@react-email/tailwind';

export default function VerifyAccountPage() {
  const containerStyle: CSSProperties = { maxWidth: '50em' };
  const buttonStyle: CSSProperties = {
    backgroundColor: '#0070f3',
    borderRadius: '6px',
    color: '#fff',
    padding: '12px 24px',
    textDecoration: 'none',
    textAlign: 'center',
    display: 'inline-block',
    marginTop: '16px',
    marginBottom: '16px',
    fontWeight: 500,
  };

  return (
    <Tailwind>
      {/* Header with Logo and Company Name */}
      <Container style={containerStyle} className='px-4 pt-10 pb-6'>
        <Img height='60' src={'https://igap.vn/wp-content/uploads/2022/11/logo.png'} />
      </Container>

      {/* Main Content */}
      <Container style={containerStyle} className='px-4'>
        <Text className='text-gray-800 text-xl font-semibold'>Xác Thực Tài Khoản</Text>

        <Text className='text-gray-600'>
          Xin chào <b>USER_NAME</b>,
        </Text>

        <Text className='text-gray-600'>
          Cảm ơn bạn đã đăng ký tài khoản tại iGap. Để hoàn tất quá trình đăng ký và bắt đầu sử dụng
          tài khoản, vui lòng nhấn vào nút bên dưới để xác thực địa chỉ email của bạn.
        </Text>

        <Container className='text-center'>
          <Link style={buttonStyle} href='VERIFICATION_LINK'>
            Xác Thực Tài Khoản
          </Link>
        </Container>

        <Container className='bg-blue-50 rounded-lg px-6'>
          <Text className='text-blue-800 font-medium'>
            <b>Lưu ý quan trọng:</b>
          </Text>
          <ul className='px-4'>
            <li>
              <Text className='m-0 text-blue-700'>
                Link xác thực này chỉ có hiệu lực trong vòng <b>DUE_DATE</b> kể từ khi bạn nhận được
                email này.
              </Text>
            </li>
            <li>
              <Text className='m-0 text-blue-700'>
                Nếu bạn không thực hiện yêu cầu này, vui lòng bỏ qua email này.
              </Text>
            </li>
            <li>
              <Text className='m-0 text-blue-700'>
                Nếu cần hỗ trợ, vui lòng liên hệ:
                <Link className='ml-1 font-medium text-red-600' href='mailto:SUPPORT_EMAIL'>
                  SUPPORT_EMAIL
                </Link>
              </Text>
            </li>
          </ul>
        </Container>

        <Text className='text-gray-600'>Sau khi xác thực thành công, bạn có thể:</Text>

        <ul className='px-4'>
          <li>
            <Text className='m-0 text-gray-600'>Truy cập đầy đủ các tính năng của hệ thống</Text>
          </li>
          <li>
            <Text className='m-0 text-gray-600'>Tùy chỉnh thông tin cá nhân trong hồ sơ</Text>
          </li>
          <li>
            <Text className='m-0 text-gray-600'>Thiết lập các tính năng bảo mật bổ sung</Text>
          </li>
        </ul>

        <Hr className='my-6' />

        <Text className='text-gray-600'>Trân trọng,</Text>
        <Text className='text-gray-800 font-semibold'>iGap SME Security Team</Text>
      </Container>

      {/* Footer */}
      <Container style={containerStyle} className='bg-gray-100 rounded-b-lg px-4 pb-6'>
        <Section className='mt-6'>
          <Img src={'https://igap.vn/wp-content/themes/igap/img/bg_01.png'} width={'100%'} />
          <Text className='text-gray-500 text-xs'>
            ©2017 Công Ty Cổ Phần Igap - iGap Join Stock Company.
          </Text>
          <Text className='text-gray-500 text-xs'>
            158-158A Đào Duy Anh, Phường 9, Quận Phú Nhuận, TP.HCM.
          </Text>
          <Text className='text-gray-500 text-xs'>All rights reserved.</Text>
        </Section>

        <Hr className='my-8' />

        <Text className='text-gray-400 text-xs text-center'>
          Đây là email tự động, vui lòng không trả lời trực tiếp email này.
        </Text>
      </Container>
    </Tailwind>
  );
}
