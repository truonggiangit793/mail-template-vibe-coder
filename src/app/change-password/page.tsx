import { CSSProperties } from 'react';
import { Container, Img, Link, Section, Text } from '@react-email/components';
import { Tailwind } from '@react-email/tailwind';

import TemplateFooter from '@/app/_components/TemplateFooter';

const containerStyle: CSSProperties = { maxWidth: '50em' };

export default function Page() {
  return (
    <Tailwind>
      {/* Header with Logo and Company Name */}
      <Container style={containerStyle} className='px-4 pt-10 pb-6'>
        <Img height='60' src={'/logo-text.png'} alt='Logo' />
      </Container>

      {/* Main Content */}
      <Container style={containerStyle} className='px-4'>
        <Text className='text-gray-600 text-lg font-semibold'>Xác Nhận Thay Đổi Mật Khẩu</Text>

        <Text className='text-gray-600'>
          Xin chào <b>{'${requestData.userName}'}</b>,
        </Text>

        <Text className='text-gray-600'>
          Chúng tôi gửi email này để xác nhận rằng mật khẩu tài khoản của bạn đã được thay đổi thành
          công vào lúc <b>{'${requestData.changeDateTime}'}</b>.
        </Text>

        <Container className='bg-blue-50 rounded-lg p-6'>
          <Text className='m-0 mb-2 text-blue-800 font-medium'>
            <b>Thông Báo Bảo Mật Quan Trọng:</b> Nếu bạn không phải là người thực hiện thay đổi này,
            vui lòng thực hiện ngay các bước sau:
          </Text>
          <Text className='m-0 text-blue-700'>
            Liên hệ đội ngũ bảo mật của chúng tôi qua email:
            <Link
              className='ml-1 font-medium text-red-600'
              href={'mailto:${requestData.supportEmail}'}
            >
              {'${requestData.supportEmail}'}
            </Link>
          </Text>
          <Text className='m-0 text-blue-700'>
            Gọi đường dây hỗ trợ 24/7:
            <Link
              className='ml-1 font-medium text-red-600'
              href={'tel:${requestData.supportPhone}'}
            >
              {'${requestData.supportPhone}'}
            </Link>
          </Text>
        </Container>

        <Text className='text-gray-600'>
          Để đảm bảo tính bảo mật cho tài khoản của bạn, chúng tôi khuyến nghị:
        </Text>

        <ul className='px-4'>
          <li>
            <Text className='m-0 text-gray-600'>
              Kiểm tra lại các hoạt động gần đây trên tài khoản.
            </Text>
          </li>
          <li>
            <Text className='m-0 text-gray-600'>Kích hoạt xác thực hai lớp.</Text>
          </li>
          <li>
            <Text className='m-0 text-gray-600'>
              Cập nhật mật khẩu tương tự trên các tài khoản khác.
            </Text>
          </li>
        </ul>

        <Section className='mb-6'>
          <Text className='text-gray-600 m-0'>Trân trọng,</Text>
          <Text className='text-gray-800 m-0 font-semibold'>iGap SME Security Team</Text>
        </Section>
      </Container>

      {/* Footer */}
      <TemplateFooter />
    </Tailwind>
  );
}
