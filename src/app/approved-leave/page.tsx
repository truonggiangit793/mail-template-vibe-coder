import { CSSProperties } from 'react';
import { Container, Img, Text } from '@react-email/components';
import { Tailwind } from '@react-email/tailwind';

import TemplateFooter from '@/app/_components/TemplateFooter';

const containerStyle: CSSProperties = { maxWidth: '50em' };

export default function Page() {
  return (
    <Tailwind>
      {/* Header with Logo and Company Name */}
      <Container style={containerStyle} className='px-4 pt-10 pb-6'>
        <Img height='30' src={'logo-text.png'} alt='Logo' />
      </Container>

      {/* Main Content */}
      <Container style={containerStyle} className='px-4'>
        <Text className='text-gray-600 text-lg font-semibold'>Kết quả duyệt yêu cầu nghỉ phép</Text>

        <Text className='text-gray-600'>
          Gửi <b>{'${request.fullname}'}</b>,
        </Text>

        <Text className='text-gray-600'>
          Đây là email thông báo về việc sau quá trình xem xét và đánh giá, bộ phận quản lý và nhân
          sự đã <b>{'${request.status}'}</b> yêu cầu nghỉ phép của bạn. Vui lòng tham khảo thông tin
          chi tiết về kỳ nghỉ phép dưới đây:
        </Text>

        <Container className='bg-blue-50 rounded-lg p-6'>
          <Text className='m-0 text-gray-500'>
            <b>- Từ:</b> {'${request.startDate}'}
          </Text>
          <Text className='m-0 text-gray-500'>
            <b>- Đến:</b> {'${request.endDate}'}
          </Text>
          <Text className='m-0 text-gray-500'>
            <b>- Tổng số ngày:</b> {'${totalDays} ngày'}
          </Text>
          <Text className='m-0 text-gray-500'>
            <b>- Hình thức:</b> {'${requestType.label}'}
          </Text>
          <Text className='m-0 text-gray-500'>
            <b>- Lý do:</b> {'${request.reason}'}
          </Text>
          <Text className='m-0 text-gray-500'>
            <b>- Kết quả duyệt:</b> <span style={{ color: 'green' }}>{'${request.status}'}</span>
          </Text>
          <Text className='m-0 text-gray-500'>
            <b>- Thời gian duyệt:</b> {'${request.approvedDate}'}
          </Text>
        </Container>

        <Text className='text-gray-600'>
          Đây là email được gửi tự động từ hệ thống. Vui lòng không phản hồi trực tiếp email này.
          Nếu cần hỗ trợ hoặc có bất kỳ thắc mắc nào, xin vui lòng liên hệ với bộ phận hỗ trợ của
          iGap Tech.
        </Text>
      </Container>

      {/* Footer */}
      <TemplateFooter />
    </Tailwind>
  );
}
