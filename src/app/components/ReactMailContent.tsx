import { CSSProperties } from 'react';
import { Column, Container, Img, Link, Row, Section, Text } from '@react-email/components';
import { Tailwind } from '@react-email/tailwind';

export default function ReactMailContent() {
  const textStyle: CSSProperties = { margin: 0 };

  const avatarStyle: CSSProperties = { borderRadius: 100 };

  const userPayload: UserPayload = {
    phone: '+84702907154',
    address: 'Ho Chi Minh City',
    logo: 'https://raw.githubusercontent.com/truonggiangit793/gmail-signature-materials/refs/heads/main/src/assets/png/logo.png',
    avatar: 'https://avatars.githubusercontent.com/u/73239209',
    regards:
      'https://raw.githubusercontent.com/truonggiangit793/gmail-signature-materials/refs/heads/main/src/assets/png/regards.png',
    fullname:
      'https://raw.githubusercontent.com/truonggiangit793/gmail-signature-materials/refs/heads/main/src/assets/png/name.png',
    jobTitle:
      'https://raw.githubusercontent.com/truonggiangit793/gmail-signature-materials/refs/heads/main/src/assets/png/job-title.png',
    facebook:
      'https://raw.githubusercontent.com/truonggiangit793/gmail-signature-materials/refs/heads/main/src/assets/png/facebook.png',
    instagram:
      'https://raw.githubusercontent.com/truonggiangit793/gmail-signature-materials/refs/heads/main/src/assets/png/instagram.png',
    linkedin:
      'https://raw.githubusercontent.com/truonggiangit793/gmail-signature-materials/refs/heads/main/src/assets/png/linkedin.png',
    github:
      'https://raw.githubusercontent.com/truonggiangit793/gmail-signature-materials/refs/heads/main/src/assets/png/github.png',
    footer:
      'https://raw.githubusercontent.com/truonggiangit793/gmail-signature-materials/refs/heads/main/src/assets/png/footer.png',
    phoneIcon:
      'https://raw.githubusercontent.com/truonggiangit793/gmail-signature-materials/refs/heads/main/src/assets/png/phone.png',
    locationIcon:
      'https://raw.githubusercontent.com/truonggiangit793/gmail-signature-materials/refs/heads/main/src/assets/png/gps.png',
  };

  return (
    <Tailwind>
      <Section className='bg-gray-200 rounded p-2'>
        <Container className='bg-white rounded overflow-hidden'>
          <Section className='px-3 bg-[#7bd8e7]'>
            <Img height='40' src={userPayload.logo} />
          </Section>

          <Section className='p-3'>
            <Text style={textStyle}>Dear,</Text>
            <Text style={textStyle}>Replace your content here...</Text>
          </Section>

          <Section className='p-3'>
            <Img width='80' src={userPayload.regards} />
          </Section>

          <Row className='px-3'>
            <Column className='pr-4'>
              <Img width='100' src={userPayload.logo} style={avatarStyle} />
            </Column>
            <Column className='w-full'>
              <Img width='180' src={userPayload.fullname} />
              <Img width='140' src={userPayload.jobTitle} />
            </Column>
          </Row>

          <Row className='px-3'>
            <Column className='pr-4'>
              <Row>
                <Column className='pr-1'>
                  <Img height='14' src={userPayload.phoneIcon} />
                </Column>
                <Column className='pr-1'>
                  <Text style={textStyle}>Contact:</Text>
                </Column>
                <Column className='pr-1 w-full'>
                  <Link href={'tel:' + userPayload.phone}>
                    <Text style={textStyle}>{userPayload.phone}</Text>
                  </Link>
                </Column>
              </Row>
            </Column>

            <Column className='w-full'>
              <Row>
                <Column className='pr-1'>
                  <Img height='14' src={userPayload.locationIcon} />
                </Column>
                <Column className='pr-1'>
                  <Text style={textStyle}>Address:</Text>
                </Column>
                <Column className='pr-1 w-full'>
                  <Link href={'https://www.google.com/maps/place/' + userPayload.address}>
                    <Text style={textStyle}>{userPayload.address}</Text>
                  </Link>
                </Column>
              </Row>
            </Column>
          </Row>

          <Row className='p-3'>
            <Column className='pr-1'>
              <Link href='https://www.facebook.com/truonggiangit793'>
                <Img height='25' src={userPayload.facebook} />
              </Link>
            </Column>
            <Column className='pr-1'>
              <Link href='https://www.instagram.com/truonggiangit793'>
                <Img height='25' src={userPayload.instagram} />
              </Link>
            </Column>
            <Column className='pr-1'>
              <Link href='https://linkedin.com/in/truonggiangit793'>
                <Img height='25' src={userPayload.linkedin} />
              </Link>
            </Column>
            <Column className='pr-1 w-full'>
              <Link href='https://github.com/truonggiangit793'>
                <Img height='25' src={userPayload.github} />
              </Link>
            </Column>
          </Row>
        </Container>
      </Section>
    </Tailwind>
  );
}
