import { CSSProperties } from 'react';
import { Container, Img, Section, Text } from '@react-email/components';
import { Tailwind } from '@react-email/tailwind';

import Button from '@/app/_components/Button';

const containerStyle: CSSProperties = { maxWidth: '50em' };

export default function Page() {
  return (
    <Tailwind>
      {/* Header with Logo and Company Name */}
      <Container style={containerStyle} className='px-3 pt-10 pb-6'>
        <Img height='30' src={'https://dev-sme.igap.vn/go-igap-logo.png'} alt='Logo' />
      </Container>

      {/* Main Content */}
      <Container style={containerStyle} className='px-4'>
        <Text className='text-gray-600 text-lg font-semibold'>Xác Thực Tài Khoản</Text>

        <Text className='text-gray-600'>
          Xin chào <b>{'${requestData.fullName}'}</b>,
        </Text>

        <Text className='text-gray-600'>
          Cảm ơn bạn đã đăng ký tài khoản tại GO iGap. Để hoàn tất quá trình đăng ký và bắt đầu sử
          dụng, vui lòng nhấn vào nút bên dưới để xác thực địa chỉ email và kích hoạt tài khoản của
          bạn.
        </Text>

        <Section className='flex justify-center pb-6'>
          <Button href={'${confirmationLink}'} variant='primary'>
            Kích Hoạt Tài Khoản
          </Button>
        </Section>

        <Container className='bg-blue-50 rounded-lg p-6'>
          <Text className='text-blue-800 m-0 font-medium'>
            <b>Lưu ý quan trọng:</b>
          </Text>
          <Text className='m-0 text-blue-700'>
            - Liên kết xác thực này chỉ có hiệu lực trong vòng {'${requestData.dueDays}'} giờ kể từ
            khi bạn nhận được email này.
          </Text>
          <Text className='m-0 text-blue-700'>
            - Mật khẩu tạm thời chỉ nên được sử dụng một lần.
          </Text>
          <Text className='m-0 text-blue-700'>- Đổi mật khẩu định kỳ để tăng cường bảo mật.</Text>
          <Text className='m-0 text-blue-700'>
            - Sử dụng mật khẩu mạnh và duy nhất cho tài khoản của bạn.
          </Text>
          <Text className='m-0 text-blue-700'>- Không chia sẻ mật khẩu với bất kỳ ai.</Text>
          <Text className='m-0 text-blue-700'>
            - Đảm bảo đăng xuất khỏi tài khoản trên các thiết bị công cộng hoặc lạ.
          </Text>
          <Text className='m-0 text-blue-700'>
            - Nếu bạn không yêu cầu tài khoản này, vui lòng bỏ qua email.
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
          Đây là email được gửi tự động từ hệ thống, vui lòng không phản hồi trực tiếp email này.
        </Text>

        <Section className='mb-6'>
          <Text className='text-gray-600 m-0'>Trân trọng,</Text>
          <Text className='text-gray-800 m-0 font-semibold'>GO iGAP</Text>
        </Section>
      </Container>
    </Tailwind>
  );
}
