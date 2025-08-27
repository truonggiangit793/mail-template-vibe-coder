import { CSSProperties } from 'react';
import { Container, Img, Link, Section, Text } from '@react-email/components';
import { Tailwind } from '@react-email/tailwind';

export default function ChangePasswordPage() {
  const containerStyle: CSSProperties = { maxWidth: '50em' };

  const footerText: CSSProperties = {
    fontSize: '12px',
    color: '#b7b7b7',
    lineHeight: '15px',
    textAlign: 'left' as const,
    marginBottom: '50px',
  };

  return (
    <Tailwind>
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
            Xác Nhận Thay Đổi Mật Khẩu
          </Text>

          <Text className='text-gray-600 leading-relaxed m-0 mb-4'>
            Xin chào <b>USER_NAME</b>,
          </Text>

          <Text className='text-gray-600 leading-relaxed m-0 mb-4'>
            Chúng tôi gửi email này để xác nhận rằng mật khẩu tài khoản của bạn đã được thay đổi
            thành công vào lúc <b>CHANGE_DATETIME</b>.
          </Text>

          <Container className='bg-blue-50 rounded-lg p-4 mb-6'>
            <Text className='text-blue-800 font-medium m-0 mb-2'>
              <b>Thông Báo Bảo Mật Quan Trọng:</b> Nếu bạn không phải là người thực hiện thay đổi
              này, vui lòng thực hiện ngay các bước sau:
            </Text>
            <ul className='m-0 px-4 mt-2'>
              <li className='m-0 text-blue-800'>
                Liên hệ đội ngũ bảo mật của chúng tôi qua email:{' '}
                <Link className='text-blue-700 font-medium' href='mailto:SUPPORT_EMAIL'>
                  SUPPORT_EMAIL
                </Link>
              </li>
              <li className='m-0 text-blue-800'>
                Gọi đường dây hỗ trợ 24/7:{' '}
                <Link className='text-blue-700 font-medium' href='tel:SUPPORT_PHONE'>
                  SUPPORT_PHONE
                </Link>
              </li>
            </ul>
          </Container>

          <Text className='text-gray-600 leading-relaxed m-0 mb-4'>
            Để đảm bảo tính bảo mật cho tài khoản của bạn, chúng tôi khuyến nghị:
          </Text>

          <ul className='m-0 px-4 mb-10'>
            <li className='m-0'>
              <Text className='m-0 text-gray-600'>
                Kiểm tra lại các hoạt động gần đây trên tài khoản
              </Text>
            </li>
            <li className='m-0'>
              <Text className='m-0 text-gray-600'>Kích hoạt xác thực hai lớp</Text>
            </li>
            <li className='m-0'>
              <Text className='m-0 text-gray-600'>
                Cập nhật mật khẩu tương tự trên các tài khoản khác
              </Text>
            </li>
          </ul>

          <hr className='border-gray-200 mb-6' />

          <Text className='text-gray-600 m-0 mb-4'>Trân trọng,</Text>
          <Text className='text-gray-800 font-semibold m-0'>iGap SME Security Team</Text>
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
            Đây là email tự động, vui lòng không trả lời trực tiếp email này.
          </Text>
        </Container>
      </Section>
    </Tailwind>
  );
}
