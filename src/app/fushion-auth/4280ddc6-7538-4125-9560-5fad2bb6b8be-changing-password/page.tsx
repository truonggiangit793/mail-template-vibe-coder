import { CSSProperties } from 'react';
import { Container, Img, Section, Text } from '@react-email/components';
import { Tailwind } from '@react-email/tailwind';

const containerStyle: CSSProperties = { maxWidth: '50em' };

export default function Page() {
  return (
    <Tailwind>
      <Container style={containerStyle} className='px-4 pt-10 pb-6'>
        <Img height='30' src={'https://dev-sme.igap.vn/go-igap-logo.png'} alt='Logo' />
      </Container>

      <Container style={containerStyle} className='px-4'>
        <Text className='text-gray-600 text-lg font-semibold'>Xác Nhận Thay Đổi Mật Khẩu</Text>

        <Text className='text-gray-600'>
          Xin chào <b>{'${requestData.fullName}'}</b>,
        </Text>

        <Text className='text-gray-600'>
          Chúng tôi gửi email này để xác nhận rằng mật khẩu tài khoản GO iGAP của bạn đã được thay
          đổi thành công vào lúc <b>{'${requestData.changeDateTime}'}</b>.
        </Text>

        <Text className='text-gray-600'>
          Để đảm bảo tính bảo mật cho tài khoản của bạn, chúng tôi khuyến nghị:
        </Text>

        <Container className='bg-gray-100 rounded-lg px-4 py-3 my-4'>
          <Text className='m-0 text-gray-700 text-xs'>
            • Kiểm tra lại các hoạt động gần đây trên tài khoản.
          </Text>
          <Text className='m-0 text-gray-700 text-xs'>
            • Sử dụng mật khẩu mạnh và duy nhất cho tài khoản của bạn.
          </Text>
          <Text className='m-0 text-gray-700 text-xs'>
            • Không chia sẻ mật khẩu của bạn với bất kỳ ai.
          </Text>
          <Text className='m-0 text-gray-700 text-xs'>
            • Đổi mật khẩu định kỳ để tăng cường bảo mật.
          </Text>
          <Text className='m-0 text-gray-700 text-xs'>
            • Đảm bảo đăng xuất khỏi tài khoản trên các thiết bị công cộng hoặc lạ.
          </Text>
        </Container>

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
