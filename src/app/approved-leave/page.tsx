import { CSSProperties } from 'react';
import { Column, Container, Img, Row, Text } from '@react-email/components';
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
        <Text className='text-gray-600'>
          Gửi <strong>{'${request.fullname}'}</strong>,
        </Text>

        <Text className='text-gray-600'>
          Đây là email thông báo về việc sau quá trình xem xét và đánh giá, bộ phận quản lý và nhân
          sự đã <strong>{'${request.status}'}</strong> yêu cầu nghỉ phép của bạn. Vui lòng tham khảo
          thông tin chi tiết về kỳ nghỉ phép dưới đây:
        </Text>

        <Container className='bg-blue-50 rounded-lg px-6'>
          <ul className='px-4'>
            <li>
              <Row>
                <Column>
                  <Text className='m-0 text-gray-500'>
                    <strong>Từ:</strong> {'${request.startDate}'}
                  </Text>
                </Column>
                <Column>
                  <Text className='m-0 text-gray-500'>
                    <strong>Đến:</strong> {'${request.endDate}'}
                  </Text>
                </Column>
              </Row>
            </li>

            <li>
              <Text className='m-0 text-gray-500'>
                <strong>Tổng số ngày:</strong> {'${totalDays} ngày'}
              </Text>
            </li>

            <li>
              <Text className='m-0 text-gray-500'>
                <strong>Hình thức:</strong> {'${requestType.label}'}
              </Text>
            </li>

            <li>
              <Text className='m-0 text-gray-500'>
                <strong>Lý do:</strong> {'${request.reason}'}
              </Text>
            </li>

            <li>
              <Text className='m-0 text-gray-500'>
                <strong>Kết quả duyệt:</strong>{' '}
                <span style={{ color: 'green' }}>{'${request.status}'}</span>
              </Text>
            </li>

            <li>
              <Text className='m-0 text-gray-500'>
                <strong>Thời gian duyệt:</strong> {'${request.approvedDate}'}
              </Text>
            </li>
          </ul>
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
