import { CSSProperties } from 'react';
import { Container, Img, Section, Text } from '@react-email/components';
import { Tailwind } from '@react-email/tailwind';

import Button from '@/app/_components/Button';
import TemplateFooter from '@/app/_components/TemplateFooter';

const containerStyle: CSSProperties = { maxWidth: '50em' };

export default function Page() {
  return (
    <Tailwind>
      {/* Header with Logo and Company Name */}
      <Container style={containerStyle} className='px-4 pt-10 pb-6'>
        <Img height='60' src={'https://dev-sme.igap.vn/logo-text.png'} alt='Logo' />
      </Container>

      {/* Main Content */}
      <Container style={containerStyle} className='px-4'>
        <Text className='text-gray-600 text-lg font-semibold'>
          Lời mời sử dụng hệ thống iGap SME
        </Text>

        <Text className='text-gray-600'>
          Xin chào <b>{'${requestData.fullName}'}</b>,
        </Text>

        <Text className='text-gray-600'>
          Bạn vừa được tạo tài khoản và mời sử dụng hệ thống iGap SME. Dưới đây là thông tin đăng
          nhập tạm thời của bạn. Vui lòng lưu lại thông tin này và đổi mật khẩu sau khi đăng nhập
          lần đầu tiên để đảm bảo an toàn.
        </Text>

        <Container className='bg-gray-50 rounded-lg p-4 my-4'>
          <Text className='m-0 text-gray-700'>
            <b>Họ & tên:</b> {'${requestData.fullName}'}
          </Text>
          <Text className='m-0 text-gray-700'>
            <b>Email:</b> {'${requestData.email}'}
          </Text>
          <Text className='m-0 text-gray-700'>
            <b>Mật khẩu tạm thời:</b> {'${requestData.password}'}
          </Text>
          <Text className='m-0 text-gray-700'>
            <b>Chức vụ:</b> {'${requestData.jobPosition}'}
          </Text>
          <Text className='m-0 text-gray-700'>
            <b>Vai trò:</b> {'${requestData.role}'}
          </Text>
        </Container>

        <Section className='flex justify-center'>
          <Button href={'${requestData.loginUrl}'} variant='primary' className='ml-2'>
            Đăng nhập vào iGap SME
          </Button>
        </Section>

        <Text className='text-gray-600 mt-4'>
          Sau khi đăng nhập, bạn nên thay đổi mật khẩu ngay lập tức trong mục cài đặt tài khoản. Nếu
          bạn gặp vấn đề khi đăng nhập hoặc cần trợ giúp, vui lòng liên hệ với bộ phận hỗ trợ của
          chúng tôi.
        </Text>

        <Container className='bg-blue-50 rounded-lg p-4 mt-4'>
          <Text className='text-blue-800 m-0 font-medium'>Lưu ý quan trọng:</Text>
          <Text className='m-0 text-blue-700'>
            - Mật khẩu tạm thời chỉ nên được sử dụng một lần.
          </Text>
          <Text className='m-0 text-blue-700'>
            - Nếu bạn không yêu cầu tài khoản này, vui lòng liên hệ ngay.
          </Text>
        </Container>

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
