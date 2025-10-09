import { CSSProperties } from 'react';
import { Container, Img, Section, Text } from '@react-email/components';
import { Tailwind } from '@react-email/tailwind';

export default function Page() {
  const containerStyle: CSSProperties = { maxWidth: '50em' };

  return (
    <Tailwind>
      {/* Header with Logo and Company Name */}
      <Container style={containerStyle} className='px-4 pt-10 pb-6'>
        <Img height='30' src={'http://localhost:3000/logo-text.png'} alt='iGap Logo' />
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
      <Container style={containerStyle} className='bg-gray-100 rounded-lg px-4 pb-6'>
        <Section className='mt-6 text-center'>
          <center className='mt-8 mb-4'>
            <Img height='30' src={'http://localhost:3000/logo.png'} alt='iGap Logo' />
          </center>
          <Text className='text-gray-500 text-xs m-0'>©{new Date().getFullYear()} iGap JSC</Text>
          <Text className='text-gray-500 text-xs m-0'>158 Đào Duy Anh, Phường Đức Nhuận</Text>
          <Text className='text-gray-500 text-xs m-0'>Thành phố Hồ Chí Minh, Việt Nam</Text>
          <Text className='text-gray-500 text-xs m-0'>All Rights Reserved</Text>
          <Text className='text-gray-400 text-xs text-center mb-0'>
            SMART DELIVERY – TOGETHER HAPPY
          </Text>
        </Section>
      </Container>
    </Tailwind>
  );
}
