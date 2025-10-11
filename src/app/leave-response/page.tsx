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
        <Img height='30' src={'/logo-text.png'} alt='Logo' />
      </Container>

      {/* Main Content */}
      <Container style={containerStyle} className='px-4'>
        <Text className='text-gray-600 text-lg font-semibold'>Phản hồi yêu cầu nghỉ phép</Text>

        <Text className='text-gray-600'>
          Gửi <b>{'${userPayload.fullname}'}</b>,
        </Text>

        <Text className='text-gray-600'>
          Bộ phận quản lý đã tiếp nhận yêu cầu nghỉ phép của bạn và hiện đang trong quá trình xem
          xét, phê duyệt. Dưới đây là thông tin chi tiết về kỳ nghỉ phép mà bạn đã đăng ký:
        </Text>

        {[1, 2, 3].map((item, key) => {
          return (
            <Container className='bg-blue-50 rounded-lg p-6 mt-4' key={key}>
              <Row>
                <Column>
                  <Text className='m-0 text-gray-500'>
                    <b>Từ:</b> {'${item.startDate}'}
                  </Text>
                </Column>
                <Column>
                  <Text className='m-0 text-gray-500'>
                    <b>Đến:</b> {'${item.endDate}'}
                  </Text>
                </Column>
              </Row>
              <Text className='m-0 text-gray-500'>
                <b>Tổng số ngày:</b> {'${totalDays} ngày'}
              </Text>
              <Text className='m-0 text-gray-500'>
                <b>Hình thức:</b> {'${requestType.label}'}
              </Text>
              <Text className='m-0 text-gray-500'>
                <b>Lý do:</b> {'${item.reason}'}
              </Text>
            </Container>
          );
        })}

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
