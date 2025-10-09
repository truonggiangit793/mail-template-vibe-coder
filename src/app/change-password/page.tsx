import { CSSProperties } from 'react';
import { Container, Hr, Img, Link, Section, Text } from '@react-email/components';
import { Tailwind } from '@react-email/tailwind';

export default function Page() {
  const containerStyle: CSSProperties = { maxWidth: '50em' };

  return (
    <Tailwind>
      {/* Header with Logo and Company Name */}
      <Container style={containerStyle} className='px-4 pt-10 pb-6'>
        <Img height='60' src={'https://igap.vn/wp-content/uploads/2022/11/logo.png'} />
      </Container>

      {/* Main Content */}
      <Container style={containerStyle} className='px-4'>
        <Text className='text-gray-800 text-xl font-semibold'>Xác Nhận Thay Đổi Mật Khẩu</Text>

        <Text className='text-gray-600'>
          Xin chào <b>{'${requestData.userName}'}</b>,
        </Text>

        <Text className='text-gray-600'>
          Chúng tôi gửi email này để xác nhận rằng mật khẩu tài khoản của bạn đã được thay đổi thành
          công vào lúc <b>{'${requestData.changeDateTime}'}</b>.
        </Text>

        <Container className='bg-blue-50 rounded-lg px-6'>
          <Text className='text-blue-800 font-medium'>
            <b>Thông Báo Bảo Mật Quan Trọng:</b> Nếu bạn không phải là người thực hiện thay đổi này,
            vui lòng thực hiện ngay các bước sau:
          </Text>
          <ul className='px-4'>
            <li>
              <Text className='m-0 text-blue-700'>
                Liên hệ đội ngũ bảo mật của chúng tôi qua email:
                <Link
                  className='ml-1 font-medium text-red-600'
                  href={'mailto:${requestData.supportEmail}'}
                >
                  {'${requestData.supportEmail}'}
                </Link>
              </Text>
            </li>
            <li>
              <Text className='m-0 text-blue-700'>
                Gọi đường dây hỗ trợ 24/7:
                <Link
                  className='ml-1 font-medium text-red-600'
                  href={'tel:${requestData.supportPhone}'}
                >
                  {'${requestData.supportPhone}'}
                </Link>
              </Text>
            </li>
          </ul>
        </Container>

        <Text className='text-gray-600'>
          Để đảm bảo tính bảo mật cho tài khoản của bạn, chúng tôi khuyến nghị:
        </Text>

        <ul className='px-4'>
          <li>
            <Text className='m-0 text-gray-600'>
              Kiểm tra lại các hoạt động gần đây trên tài khoản
            </Text>
          </li>
          <li>
            <Text className='m-0 text-gray-600'>Kích hoạt xác thực hai lớp</Text>
          </li>
          <li>
            <Text className='m-0 text-gray-600'>
              Cập nhật mật khẩu tương tự trên các tài khoản khác
            </Text>
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
