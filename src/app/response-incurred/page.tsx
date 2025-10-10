import { CSSProperties } from 'react';
import { Column, Container, Img, Link, Row, Text } from '@react-email/components';
import { Tailwind } from '@react-email/tailwind';

import TemplateFooter from '@/app/_components/TemplateFooter';

const containerStyle: CSSProperties = { maxWidth: '50em' };

const buttonStyle: CSSProperties = {
  backgroundColor: '#0070f3',
  borderRadius: '6px',
  color: '#fff',
  padding: '10px 20px',
  fontSize: '16px',
  textDecoration: 'none',
  textAlign: 'center',
  display: 'inline-block',
  marginTop: '16px',
  marginBottom: '16px',
  fontWeight: 500,
};

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
          Gửi <strong>{'${userPayload.approverEmail}'}</strong>,
        </Text>

        <Text className='text-gray-600'>
          Đây là email thông báo về một yêu cầu phê duyệt nghỉ phép mới. Vui lòng xem xét các thông
          tin chi tiết dưới đây để thực hiện việc phê duyệt theo quy trình của công ty.
        </Text>

        <Text className='m-0 text-gray-500'>
          <strong>Tên nhân viên:</strong> {'${userPayload.fullname}'}
        </Text>

        <Text className='m-0 text-gray-500'>
          <strong>Bộ phận:</strong> {'${userPayload.department}'}
        </Text>

        {[1, 2, 3].map((item, key) => {
          return (
            <Container className='bg-blue-50 rounded-lg px-6' key={key}>
              <ul className='px-4'>
                <li>
                  <Row>
                    <Column>
                      <Text className='m-0 text-gray-500'>
                        <strong>Từ:</strong> {'${item.startDate}'}
                      </Text>
                    </Column>
                    <Column>
                      <Text className='m-0 text-gray-500'>
                        <strong>Đến:</strong> {'${item.endDate}'}
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
                    <strong>Lý do:</strong> {'${item.reason}'}
                  </Text>
                </li>
              </ul>
            </Container>
          );
        })}

        <Container className='text-center'>
          <Link style={buttonStyle} href={'${approvalLink}'}>
            Duyệt yêu cầu này
          </Link>
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
