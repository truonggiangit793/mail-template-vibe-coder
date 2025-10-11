import { CSSProperties } from 'react';
import { Container, Img, Link, Section, Text } from '@react-email/components';
import { Tailwind } from '@react-email/tailwind';

import Button from '@/app/_components/Button';
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
        <Text className='text-gray-600 text-lg font-semibold'>Xác Thực Tài Khoản</Text>

        <Text className='text-gray-600'>
          Xin chào <b>{'${requestData.userName}'}</b>,
        </Text>

        <Text className='text-gray-600'>
          Cảm ơn bạn đã đăng ký tài khoản tại iGap. Để hoàn tất quá trình đăng ký và bắt đầu sử dụng
          tài khoản, vui lòng nhấn vào nút bên dưới để xác thực địa chỉ email của bạn.
        </Text>

        <Section className='flex justify-center'>
          <Button href={'${approveUrl}'} variant='primary' className='ml-2'>
            Xác Thực Tài Khoản
          </Button>
        </Section>

        <Container className='bg-blue-50 rounded-lg p-6'>
          <Text className='text-blue-800 m-0 font-medium'>
            <b>Lưu ý quan trọng:</b>
          </Text>
          <Text className='m-0 text-blue-700'>
            Link xác thực này chỉ có hiệu lực trong vòng <b>{'${requestData.dueDate}'}</b> kể từ khi
            bạn nhận được email này.
          </Text>
          <Text className='m-0 text-blue-700'>
            Nếu bạn không thực hiện yêu cầu này, vui lòng bỏ qua email này.
          </Text>
          <Text className='m-0 text-blue-700'>
            Nếu cần hỗ trợ, vui lòng liên hệ:
            <Link
              className='ml-1 font-medium text-red-600'
              href={'mailto:${requestData.supportEmail}'}
            >
              {'${requestData.supportEmail}'}
            </Link>
          </Text>
        </Container>

        <Text className='text-gray-600'>Sau khi xác thực thành công, bạn có thể:</Text>

        <ul className='px-4'>
          <li>
            <Text className='m-0 text-gray-600'>Truy cập đầy đủ các tính năng của hệ thống.</Text>
          </li>
          <li>
            <Text className='m-0 text-gray-600'>Tùy chỉnh thông tin cá nhân trong hồ sơ</Text>
          </li>
          <li>
            <Text className='m-0 text-gray-600'>Thiết lập các tính năng bảo mật bổ sung.</Text>
          </li>
        </ul>

        <Text className='text-gray-600'>
          Đây là email được gửi tự động từ hệ thống. Vui lòng không phản hồi trực tiếp email này.
          Nếu cần hỗ trợ hoặc có bất kỳ thắc mắc nào, xin vui lòng liên hệ với bộ phận hỗ trợ.
        </Text>

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
