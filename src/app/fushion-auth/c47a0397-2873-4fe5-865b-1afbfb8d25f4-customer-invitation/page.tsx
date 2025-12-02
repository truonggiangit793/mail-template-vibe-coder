import { CSSProperties } from 'react';
import { Container, Img, Section, Text } from '@react-email/components';
import { Tailwind } from '@react-email/tailwind';

import Button from '@/app/_components/Button';

const containerStyle: CSSProperties = { maxWidth: '50em' };

export default function Page() {
  return (
    <Tailwind>
      <Container style={containerStyle} className='px-4 pt-10 pb-6'>
        <Img height='30' src={'https://dev-sme.igap.vn/go-igap-logo.png'} alt='Logo' />
      </Container>

      <Container style={containerStyle} className='px-4'>
        <Text className='text-gray-600 text-lg font-semibold'>
          Thông Báo Tạo Tài Khoản Trên Hệ Thống GO iGAP
        </Text>

        <Text className='text-gray-600'>
          Kính gửi Quý khách hàng <b>{'${requestData.fullName}'}</b>,
        </Text>

        <Text className='text-gray-600'>
          Với vai trò là Quản trị viên của <b>{'${requestData.customerName}'}</b>, bạn đã được cấp
          tài khoản và mời tham gia sử dụng hệ thống GO iGAP. Dưới đây là thông tin đăng nhập của
          bạn. Vui lòng lưu lại thông tin này và thay đổi mật khẩu ngay sau lần đăng nhập đầu tiên
          để đảm bảo bảo mật tài khoản.
        </Text>

        <center>
          <Button href={'${requestData.confirmationLink}'} variant='primary'>
            Kích Hoạt Tài Khoản
          </Button>
        </center>

        <Text className='text-gray-600'>
          Sau khi kích hoạt thành công, dưới đây là thông tin đăng nhập tạm thời cho tài khoản quản
          trị viên. Vui lòng lưu lại thông tin này và thay đổi mật khẩu ngay sau lần đăng nhập đầu
          tiên để đảm bảo bảo mật tài khoản.
        </Text>

        <Container className='bg-gray-100 rounded-lg px-4 py-3 my-4'>
          <Text className='m-0 text-gray-700'>
            • <b>Tên đăng nhập:</b> {'${requestData.email}'}
          </Text>
          <Text className='m-0 text-gray-700'>
            • <b>Mật khẩu tạm thời:</b> {'${requestData.password}'}
          </Text>
        </Container>

        <center>
          <Button href={'${requestData.loginUrl}'} variant='primary'>
            Truy cập vào GO iGAP
          </Button>
        </center>

        <Container className='bg-gray-100 rounded-lg px-4 py-3 my-4'>
          <Text className='text-gray-800 m-0 font-medium text-xs mb-2'>Lưu ý quan trọng:</Text>
          <Text className='m-0 text-gray-700 text-xs'>
            • Liên kết xác thực này chỉ có hiệu lực trong vòng 48 giờ kể từ khi bạn nhận được email
            này.
          </Text>
          <Text className='m-0 text-gray-700 text-xs'>
            • Mật khẩu tạm thời chỉ nên được sử dụng một lần.
          </Text>
          <Text className='m-0 text-gray-700 text-xs'>
            • Đổi mật khẩu định kỳ để tăng cường bảo mật.
          </Text>
          <Text className='m-0 text-gray-700 text-xs'>
            • Sử dụng mật khẩu mạnh và duy nhất cho tài khoản của bạn.
          </Text>
          <Text className='m-0 text-gray-700 text-xs'>
            • Không chia sẻ mật khẩu của bạn với bất kỳ ai.
          </Text>
          <Text className='m-0 text-gray-700 text-xs'>
            • Đảm bảo đăng xuất khỏi tài khoản trên các thiết bị lạ.
          </Text>
          <Text className='m-0 text-gray-700 text-xs'>
            • Nếu bạn không yêu cầu tài khoản này, vui lòng bỏ qua email.
          </Text>
        </Container>

        <Text className='text-gray-600'>
          Đây là email được gửi tự động từ hệ thống, không phản hồi trực tiếp email này.
        </Text>

        <Section className='mb-6'>
          <Text className='text-gray-600 m-0'>Trân trọng,</Text>
          <Text className='text-gray-800 m-0 font-semibold'>GO iGAP</Text>
        </Section>
      </Container>
    </Tailwind>
  );
}
