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
          Kính gửi <b>{'${data.fullName}'}</b>,
        </Text>

        <Text className='text-gray-600'>
          Bạn đã được mời tham gia hệ thống GO iGAP bởi quản trị viên của{' '}
          <b>{'${data.customerName}'}</b>. Để bắt đầu sử dụng tài khoản, vui lòng bấm vào nút
          &quot;Xác Nhận Tài Khoản&quot; dưới đây.
        </Text>

        <Section className='flex justify-center my-6'>
          <center>
            <Button href={'${data.confirmationLink}'} variant='primary'>
              Xác Nhận Tài Khoản
            </Button>
          </center>
        </Section>

        <Text className='text-gray-600'>
          Sau khi xác nhận thành công, bạn có thể đăng nhập bằng thông tin tạm thời dưới đây:
        </Text>

        <Container className='bg-gray-100 rounded-lg p-4 my-4'>
          <Text className='m-0 text-gray-700'>
            <b>Tên người dùng:</b> {'${data.email}'}
          </Text>
          <Text className='m-0 text-gray-700'>
            <b>Mật khẩu tạm thời:</b> {'${data.password}'}
          </Text>
          <Text className='m-0 text-gray-700'>
            <b>Họ & tên:</b> {'${data.fullName}'}
          </Text>
          <Text className='m-0 text-gray-700'>
            <b>Chức vụ:</b> {'${data.jobPosition}'}
          </Text>
          <Text className='m-0 text-gray-700'>
            <b>Vai trò:</b> {'${data.role}'}
          </Text>
        </Container>

        <Text className='text-gray-600 mt-4'>
          Sau khi đăng nhập thành công bằng mật khẩu tạm thời, bạn nên thay đổi mật khẩu ngay lập
          tức trong phần cài đặt tài khoản để đảm bảo bảo mật.
        </Text>

        <Container className='bg-blue-50 rounded-lg p-4 mt-4'>
          <Text className='text-blue-800 m-0 font-medium'>Lưu ý quan trọng:</Text>
          <Text className='m-0 text-blue-700'>
            - Bạn cần bấm vào nút &quot;Xác Nhận Tài Khoản&quot; trước khi có thể sử dụng mật khẩu
            để đăng nhập.
          </Text>
          <Text className='m-0 text-blue-700'>
            - Mật khẩu tạm thời chỉ nên được sử dụng một lần duy nhất.
          </Text>
          <Text className='m-0 text-blue-700'>
            - Nếu bạn không yêu cầu tài khoản này, vui lòng bỏ qua email.
          </Text>
        </Container>

        <Text className='text-gray-600'>
          Đây là email được gửi tự động từ hệ thống GO iGAP. Vui lòng không phản hồi trực tiếp email
          này. Nếu có bất kỳ câu hỏi nào, xin vui lòng liên hệ với bộ phận hỗ trợ của GO iGAP hoặc
          quản trị viên khách hàng của bạn.
        </Text>

        <Section className='mb-6'>
          <Text className='text-gray-600 m-0'>Trân trọng,</Text>
          <Text className='text-gray-800 m-0 font-semibold'>GO iGAP</Text>
        </Section>
      </Container>
    </Tailwind>
  );
}
