import { CSSProperties } from 'react';
import { Container, Img, Text } from '@react-email/components';
import { Tailwind } from '@react-email/tailwind';

import TemplateFooter from '@/app/_components/TemplateFooter';

export default function Page() {
  const containerStyle: CSSProperties = { maxWidth: '50em' };

  return (
    <Tailwind>
      {/* Header with Logo and Company Name */}
      <Container style={containerStyle} className='px-4 pt-10 pb-6'>
        <Img height='30' src={'/logo-text.png'} alt='iGap Logo' />
      </Container>

      {/* Main Content */}
      <Container style={containerStyle} className='px-4'>
        <Text className='text-gray-600'>
          Gửi <b>{'${requestData.userName}'}</b>,
        </Text>

        <Text className='text-gray-600'>
          Sau khi kiểm tra và xem xét, anh <strong>Vũ Văn Mạnh</strong> quyết định{' '}
          <strong>{'${requestData.status}'}</strong> với yêu cầu chi phí phát sinh của bạn, chi tiết
          cụ thể như sau:
        </Text>

        <Container className='bg-blue-50 rounded-lg px-6'>
          <ul className='px-4'>
            <li>
              <Text className='m-0 text-gray-500'>
                Mã seller: <b>{'renderString(dataValues.sellerCode)'}</b>
              </Text>
            </li>
            <li>
              <Text className='m-0 text-gray-500'>
                Mã chuyến: <b>{'renderString(dataValues.tripCode)'}</b>
              </Text>
            </li>
            <li>
              <Text className='m-0 text-gray-500'>
                Cước đề xuất: <b>{'toVND(dataValues.proposedRate)'}</b>
              </Text>
            </li>
            <li>
              <Text className='m-0 text-gray-500'>
                Cước vendor: <b>{'toVND(dataValues.vendorRate)'}</b>
              </Text>
            </li>
            <li>
              <Text className='m-0 text-gray-500'>
                Phí phát sinh: <b>{'toVND(dataValues.additionalFee)'}</b>
              </Text>
            </li>
            <li>
              <Text className='m-0 text-gray-500'>
                Phần trăm phát sinh: <b>{'renderPercentage(dataValues.additionalPercent)'}</b>
              </Text>
            </li>
            <li>
              <Text className='m-0 text-gray-500'>
                Lý do: <b>{'renderString(dataValues.additionalReason)'}</b>
              </Text>
            </li>
          </ul>
        </Container>

        <Text className='text-gray-600'>
          Vì đây là email được gửi tự động, xin vui lòng không trả lời trực tiếp email này. Nếu có
          thắc mắc, vui lòng liên hệ trực tiếp với đội ngũ hỗ trợ của iGap Tech.
        </Text>
      </Container>

      {/* Footer */}
      <TemplateFooter />
    </Tailwind>
  );
}
