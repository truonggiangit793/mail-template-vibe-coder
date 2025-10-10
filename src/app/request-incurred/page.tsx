import { CSSProperties } from 'react';
import { Container, Img, Link, Text } from '@react-email/components';
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
        <Img height='30' src={'/logo-text.png'} alt='Logo' />
      </Container>

      {/* Main Content */}
      <Container style={containerStyle} className='px-4'>
        <Text className='text-gray-600'>
          Gửi anh <strong>Vũ Văn Mạnh</strong>,
        </Text>

        <Text className='text-gray-600'>
          Anh vừa nhận được một yêu cầu chi phí phát sinh mới, hiện đang chờ phê duyệt. Dưới đây là
          thông tin chi tiết liên quan đến yêu cầu này:
        </Text>

        <Container className='bg-blue-50 rounded-lg px-6'>
          <ul className='px-4'>
            <li>
              <Text className='m-0 text-gray-500'>
                <strong>Người yêu cầu:</strong> {'${userPayload.fullname}'} (
                {'${userPayload.department}'})
              </Text>
            </li>
            <li>
              <Text className='m-0 text-gray-500'>
                Mã seller: <b>{'${dataValues.sellerCode}'}</b>
              </Text>
            </li>
            <li>
              <Text className='m-0 text-gray-500'>
                Mã chuyến: <b>{'${dataValues.tripCode}'}</b>
              </Text>
            </li>
            <li>
              <Text className='m-0 text-gray-500'>
                Cước đề xuất: <b>{'${dataValues.proposedRate}'}</b>
              </Text>
            </li>
            <li>
              <Text className='m-0 text-gray-500'>
                Cước vendor: <b>{'${dataValues.vendorRate}'}</b>
              </Text>
            </li>
            <li>
              <Text className='m-0 text-gray-500'>
                Phí phát sinh: <b>{'${dataValues.additionalFee}'}</b>
              </Text>
            </li>
            <li>
              <Text className='m-0 text-gray-500'>
                Phần trăm phát sinh: <b>{'${dataValues.additionalPercent}'}</b>
              </Text>
            </li>
            <li>
              <Text className='m-0 text-gray-500'>
                Lý do: <b>{'${dataValues.reason}'}</b>
              </Text>
            </li>
          </ul>
        </Container>

        <Text className='text-gray-600'>
          Để phê duyệt hoặc từ chối yêu cầu này, anh vui lòng lựa chọn liên kết phù hợp bên dưới.
          Lưu ý: Sau khi thực hiện, hệ thống sẽ tự động xử lý và thao tác này không thể hoàn tác.
        </Text>

        <Container className='text-center'>
          <Link
            style={{ ...buttonStyle, backgroundColor: '#f44336', marginRight: '4px' }}
            href={'${rejectUrl}'}
          >
            Từ chối
          </Link>
          <Link style={{ ...buttonStyle, marginLeft: '4px' }} href={'${approveUrl}'}>
            Đồng ý
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
