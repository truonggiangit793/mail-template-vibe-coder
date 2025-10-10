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
        <Img height='30' src={'/logo-text.png'} alt='Logo' />
      </Container>

      {/* Main Content */}
      <Container style={containerStyle} className='px-4'>
        <Text className='text-gray-600'>
          Gửi <strong>{'${userPayload.fullname}'}</strong>,
        </Text>

        <Text className='text-gray-600'>
          Đây là email thông báo yêu cầu chi phí phát sinh của bạn đã được hệ thống tiếp nhận thành
          công và đang trong quá trình xem xét, phê duyệt. Dưới đây là thông tin chi tiết về khoản
          chi phí phát sinh mà bạn đã gửi:
        </Text>

        <Container className='bg-blue-50 rounded-lg px-6'>
          <ul className='px-4'>
            <li>
              <Text className='m-0 text-gray-500'>
                <strong>Người nhận:</strong> {'${receiver?.label}'}
              </Text>
            </li>
            <li>
              <Text className='m-0 text-gray-500'>
                <strong>Mã seller:</strong> {'${dataValues.sellerCode}'}
              </Text>
            </li>
            <li>
              <Text className='m-0 text-gray-500'>
                <strong>Mã chuyến:</strong> {'${dataValues.tripCode}'}
              </Text>
            </li>
            <li>
              <Text className='m-0 text-gray-500'>
                <strong>Cước đề xuất:</strong> {'${dataValues.proposedRate}'}
              </Text>
            </li>
            <li>
              <Text className='m-0 text-gray-500'>
                <strong>Cước vendor:</strong> {'${dataValues.vendorRate}'}
              </Text>
            </li>
            <li>
              <Text className='m-0 text-gray-500'>
                <strong>Phí phát sinh:</strong> {'${dataValues.additionalFee}'}
              </Text>
            </li>
            <li>
              <Text className='m-0 text-gray-500'>
                <strong>Phần trăm phát sinh:</strong> {'${dataValues.additionalPercent}'}
              </Text>
            </li>
            <li>
              <Text className='m-0 text-gray-500'>
                <strong>Lý do:</strong> {'${dataValues.reason}'}
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
