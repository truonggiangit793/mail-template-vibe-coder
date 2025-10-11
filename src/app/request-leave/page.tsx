import { CSSProperties } from 'react';
import { Column, Container, Img, Row, Text } from '@react-email/components';
import { Tailwind } from '@react-email/tailwind';

import Button from '@/app/_components/Button';
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
        <Text className='text-gray-600 text-lg font-semibold'>Duyệt yêu cầu nghỉ phép</Text>

        <Text className='text-gray-600'>
          Gửi <b>{'${userPayload.approverEmail}'}</b>,
        </Text>

        <Text className='text-gray-600'>
          Đây là email thông báo về một yêu cầu phê duyệt nghỉ phép mới. Vui lòng xem xét các thông
          tin chi tiết dưới đây để thực hiện việc phê duyệt theo quy trình của công ty.
        </Text>

        <Text className='m-0 text-gray-500'>
          <b>Tên nhân viên:</b> {'${userPayload.fullname}'}
        </Text>

        <Text className='m-0 text-gray-500'>
          <b>Bộ phận:</b> {'${userPayload.department}'}
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

        <Container className='text-center'>
          <Button href={'${approveUrl}'} variant='primary' className='ml-2'>
            Duyệt yêu cầu này
          </Button>
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
