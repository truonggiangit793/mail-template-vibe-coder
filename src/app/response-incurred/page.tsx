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
        <Text className='text-gray-600 text-lg font-semibold'>
          Phản hồi yêu cầu chi phí phát sinh
        </Text>

        <Text className='text-gray-600'>
          Gửi <b>{'${userPayload.fullname}'}</b>,
        </Text>

        <Text className='text-gray-600'>
          Đây là email thông báo yêu cầu chi phí phát sinh của bạn đã được hệ thống tiếp nhận thành
          công và đang trong quá trình xem xét, phê duyệt. Dưới đây là thông tin chi tiết về khoản
          chi phí phát sinh mà bạn đã gửi:
        </Text>

        <Container className='bg-blue-50 rounded-lg p-6'>
          <Text className='m-0 text-gray-500'>
            <b>Người nhận:</b> {'${renderString(receiver?.label)}'}
          </Text>
          <Text className='m-0 text-gray-500'>
            <b>Mã seller:</b> {'${renderString(dataValues.sellerCode)}'}
          </Text>
          <Text className='m-0 text-gray-500'>
            <b>Mã chuyến:</b> {'${renderString(dataValues.tripCode)}'}
          </Text>
          <Text className='m-0 text-gray-500'>
            <b>Cước đề xuất:</b> {'${toVND(dataValues.proposedRate)}'}
          </Text>
          <Text className='m-0 text-gray-500'>
            <b>Cước vendor:</b> {'${toVND(dataValues.vendorRate)}'}
          </Text>
          <Text className='m-0 text-gray-500'>
            <b>Phí phát sinh:</b> {'${toVND(dataValues.additionalFee)}'}
          </Text>
          <Text className='m-0 text-gray-500'>
            <b>Phần trăm phát sinh:</b> {'${renderPercentage(dataValues.additionalPercent)}'}
          </Text>
          <Text className='m-0 text-gray-500'>
            <b>Lý do:</b> {'${renderString(dataValues.reason)}'}
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
