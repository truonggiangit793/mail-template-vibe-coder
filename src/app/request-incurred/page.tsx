import { CSSProperties } from 'react';
import { Container, Img, Text } from '@react-email/components';
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
        <Text className='text-gray-600 text-lg font-semibold'>Duyệt yêu cầu chi phí phát sinh</Text>

        <Text className='text-gray-600'>
          Gửi anh <b>Vũ Văn Mạnh</b>,
        </Text>

        <Text className='text-gray-600'>
          Anh vừa nhận được một yêu cầu chi phí phát sinh mới, hiện đang chờ phê duyệt. Dưới đây là
          thông tin chi tiết liên quan đến yêu cầu này:
        </Text>

        <Container className='bg-blue-50 rounded-lg p-6'>
          <Text className='m-0 text-gray-500'>
            <b>- Người yêu cầu:</b> {'${nameDisplay}'}
          </Text>
          <Text className='m-0 text-gray-500'>
            <b>- Mã seller:</b> {'${dataValues.sellerCode}'}
          </Text>
          <Text className='m-0 text-gray-500'>
            <b>- Mã chuyến:</b> {'${dataValues.tripCode}'}
          </Text>
          <Text className='m-0 text-gray-500'>
            <b>- Cước đề xuất:</b> {'${dataValues.proposedRate}'}
          </Text>
          <Text className='m-0 text-gray-500'>
            <b>- Cước vendor:</b> {'${dataValues.vendorRate}'}
          </Text>
          <Text className='m-0 text-gray-500'>
            <b>- Phí phát sinh:</b> {'${dataValues.additionalFee}'}
          </Text>
          <Text className='m-0 text-gray-500'>
            <b>- Phần trăm phát sinh:</b> {'${dataValues.additionalPercent}'}
          </Text>
          <Text className='m-0 text-gray-500'>
            <b>- Lý do:</b> {'${dataValues.reason}'}
          </Text>
        </Container>

        <Text className='text-gray-600'>
          Để phê duyệt hoặc từ chối yêu cầu này, anh vui lòng lựa chọn liên kết phù hợp bên dưới.
          Lưu ý: Sau khi thực hiện, hệ thống sẽ tự động xử lý và thao tác này không thể hoàn tác.
        </Text>

        <center>
          <Button href={'${rejectUrl}'} variant='destructive' className='mr-2'>
            Từ chối
          </Button>
          <Button href={'${approveUrl}'} variant='primary' className='ml-2'>
            Đồng ý
          </Button>
        </center>

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
