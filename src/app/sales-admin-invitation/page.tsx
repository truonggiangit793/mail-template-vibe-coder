import { CSSProperties } from 'react';
import { Container, Img, Section, Text } from '@react-email/components';
import { Tailwind } from '@react-email/tailwind';

import Button from '@/app/_components/Button';

const containerStyle: CSSProperties = { maxWidth: '50em' };

export default function Page() {
  return (
    <Tailwind>
      {/* Header with Logo and Company Name */}
      <Container style={containerStyle} className='px-4 pt-10 pb-6'>
        <Img height='30' src={'https://dev-sme.igap.vn/go-igap-logo.png'} alt='Logo' />
      </Container>

      {/* Main Content */}
      <Container style={containerStyle} className='px-4'>
        <Text className='text-gray-600 text-lg font-semibold'>
          Lời Mời Tham Gia Hệ Thống GO iGAP
        </Text>

        <Text className='text-gray-600'>
          Xin chào <b>{'${requestData.fullName}'}</b>,
        </Text>

        <Text className='text-gray-600'>
          Bạn đã được cấp tài khoản và mời tham gia sử dụng hệ thống GO iGAP. Dưới đây là thông tin
          đăng nhập của bạn. Vui lòng lưu lại thông tin này và thay đổi mật khẩu ngay sau lần đăng
          nhập đầu tiên để đảm bảo bảo mật tài khoản.
        </Text>

        <Container className='bg-gray-100 rounded-lg p-4 my-4'>
          <Text className='m-0 text-gray-700'>
            <b>Tên đăng nhập:</b> {'${requestData.email}'}
          </Text>
          <Text className='m-0 text-gray-700'>
            <b>Mật khẩu tạm thời:</b> {'${requestData.password}'}
          </Text>
        </Container>

        <Section className='flex justify-center'>
          <center>
            <Button href={'${requestData.loginUrl}'} variant='primary' className='ml-2'>
              Đăng nhập vào hệ thống GO iGAP
            </Button>
          </center>
        </Section>

        <Text className='text-gray-600 mt-4'>
          Sau khi đăng nhập, bạn nên thay đổi mật khẩu ngay lập tức trong mục cài đặt tài khoản. Nếu
          bạn gặp vấn đề khi đăng nhập hoặc cần trợ giúp, vui lòng liên hệ với bộ phận IT hoặc admin
          hệ thống.
        </Text>

        <Container className='bg-blue-50 rounded-lg p-4 mt-4'>
          <Text className='text-blue-800 m-0 font-medium'>Lưu ý quan trọng:</Text>
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

        <Text className='text-gray-600'>
          Đây là email được gửi tự động từ hệ thống, vui lòng không phản hồi trực tiếp email này.
        </Text>

        <Section className='mb-6'>
          <Text className='text-gray-600 m-0'>Trân trọng,</Text>
          <Text className='text-gray-800 m-0 font-semibold'>Admin GO iGAP</Text>
        </Section>
      </Container>
    </Tailwind>
  );
}
