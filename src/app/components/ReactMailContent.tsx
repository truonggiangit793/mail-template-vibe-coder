import { CSSProperties } from 'react';
import { Column, Container, Img, Link, Row, Section, Text } from '@react-email/components';
import { Tailwind } from '@react-email/tailwind';

export default function ReactMailContent() {
  const containerStyle: CSSProperties = { maxWidth: '50em' };

  return (
    <Tailwind>
      <Section className='bg-[#f8fafa] rounded px-2 py-6'>
        <Container style={containerStyle} className='mb-4'>
          <Img
            height='45'
            src={
              'https://raw.githubusercontent.com/truonggiangit793/gmail-signature-materials/refs/heads/main/src/assets/png/logo.png'
            }
          />
        </Container>

        <Container
          className='bg-white rounded overflow-hidden px-6'
          style={{ ...containerStyle, border: '1px solid #eee' }}
        >
          <Section className='pt-6 pb-3'>
            <Text className='m-0 mb-2 text-lg font-bold'>Dear REPLACE,</Text>
            <Text className='m-0 text-lg'>Replace your content here...</Text>
          </Section>
          <Img
            className='mb-6'
            height='38'
            src={
              'https://raw.githubusercontent.com/truonggiangit793/gmail-signature-materials/refs/heads/main/src/assets/png/regards.png'
            }
          />
        </Container>

        <Container style={containerStyle}>
          <Row className='mt-3'>
            <Column className='pr-3'>
              <Img
                height='90'
                src={
                  'https://raw.githubusercontent.com/truonggiangit793/gmail-signature-materials/refs/heads/main/src/assets/png/logo.png'
                }
              />
            </Column>
            <Column className='w-full'>
              <Img
                height='30'
                src={
                  'https://raw.githubusercontent.com/truonggiangit793/gmail-signature-materials/refs/heads/main/src/assets/png/name.png'
                }
              />
              <Img
                height='20'
                src={
                  'https://raw.githubusercontent.com/truonggiangit793/gmail-signature-materials/refs/heads/main/src/assets/png/job-title.png'
                }
              />
            </Column>
          </Row>

          <Text className='m-0'>
            Contact: <Link href={'tel:+84702907154'}>+84702907154</Link>
          </Text>
          <Text className='m-0'>
            Primary email:{' '}
            <Link href={'mailto:truonggiangit793@gmail.com'}>truonggiangit793@gmail.com</Link>
          </Text>
          <Text className='m-0'>
            Address:{' '}
            <Link href={'https://www.google.com/maps/place/Ho+Chi+Minh+City'}>
              Ho Chi Minh City, Viet Nam
            </Link>
          </Text>

          <Row className='mt-3 mb-4'>
            <Column className='pr-1'>
              <Link href='https://www.facebook.com/truonggiangit793'>
                <Img
                  height='25'
                  src={
                    'https://raw.githubusercontent.com/truonggiangit793/gmail-signature-materials/refs/heads/main/src/assets/png/facebook.png'
                  }
                />
              </Link>
            </Column>
            <Column className='pr-1'>
              <Link href='https://www.instagram.com/truonggiangit793'>
                <Img
                  height='25'
                  src={
                    'https://raw.githubusercontent.com/truonggiangit793/gmail-signature-materials/refs/heads/main/src/assets/png/instagram.png'
                  }
                />
              </Link>
            </Column>
            <Column className='pr-1'>
              <Link href='https://linkedin.com/in/truonggiangit793'>
                <Img
                  height='25'
                  src={
                    'https://raw.githubusercontent.com/truonggiangit793/gmail-signature-materials/refs/heads/main/src/assets/png/linkedin.png'
                  }
                />
              </Link>
            </Column>
            <Column className='pr-1 w-full'>
              <Link href='https://github.com/truonggiangit793'>
                <Img
                  height='25'
                  src={
                    'https://raw.githubusercontent.com/truonggiangit793/gmail-signature-materials/refs/heads/main/src/assets/png/github.png'
                  }
                />
              </Link>
            </Column>
          </Row>
        </Container>
      </Section>
    </Tailwind>
  );
}
