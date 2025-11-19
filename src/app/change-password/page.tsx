import { CSSProperties } from 'react';
import { Container, Img, Section, Text } from '@react-email/components';
import { Tailwind } from '@react-email/tailwind';

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

        <ul className='px-4'>
          <li>
            <Text className='m-0 text-gray-600'>
              Kiểm tra lại các hoạt động gần đây trên tài khoản.
            </Text>
          </li>
          <li>
            <Text className='m-0 text-gray-600'>
              Sử dụng mật khẩu mạnh và duy nhất cho tài khoản của bạn.
            </Text>
          </li>
          <li>
            <Text className='m-0 text-gray-600'>Không chia sẻ mật khẩu với bất kỳ ai.</Text>
          </li>
          <li>
            <Text className='m-0 text-gray-600'>Đổi mật khẩu định kỳ để tăng cường bảo mật.</Text>
          </li>
          <li>
            <Text className='m-0 text-gray-600'>
              Đảm bảo đăng xuất khỏi tài khoản trên các thiết bị công cộng hoặc lạ.
            </Text>
          </li>
        </ul>

        <Text className='text-gray-600'>
          Đây là email được gửi tự động từ hệ thống, vui lòng không phản hồi trực tiếp email này.
          Nếu có bất kỳ thắc mắc nào, xin vui lòng liên hệ với bộ phận hỗ trợ của GO iGAP.
        </Text>

        <Section className='mb-6'>
          <Text className='text-gray-600 m-0'>Trân trọng,</Text>
          <Text className='text-gray-800 m-0 font-semibold'>GO iGAP</Text>
        </Section>
      </Container>
    </Tailwind>
  );
}
