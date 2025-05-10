'use client';

import { CSSProperties, Fragment } from 'react';
import {
  Body,
  Column,
  Container,
  Head,
  Html,
  Img,
  Link,
  render,
  Row,
  Section,
  Text,
} from '@react-email/components';

type UserPayload = {
  phone: string;
  address: string;
  avatar: string;
  regards: string;
  fullname: string;
  jobTitle: string;
  facebook: string;
  instagram: string;
  linkedin: string;
  github: string;
  footer: string;
}

export default function Page() {

  const signatureCard: CSSProperties = { margin: 0, minWidth: '100%', background: '#f3f2f1 !important', borderRadius: 8 };
  const avatarStyle: CSSProperties = { borderRadius: 100 };
  const textStyle: CSSProperties = { margin: 0 };

  const userPayload: UserPayload = {
    phone: '+84702907154',
    address: 'Ho Chi Minh City',
    avatar: 'https://avatars.githubusercontent.com/u/73239209',
    regards: 'https://raw.githubusercontent.com/truonggiangit793/gmail-signature-materials/refs/heads/main/src/assets/png/regards.png',
    fullname: 'https://raw.githubusercontent.com/truonggiangit793/gmail-signature-materials/refs/heads/main/src/assets/png/name.png',
    jobTitle: 'https://raw.githubusercontent.com/truonggiangit793/gmail-signature-materials/refs/heads/main/src/assets/png/job-title.png',
    facebook: 'https://raw.githubusercontent.com/truonggiangit793/gmail-signature-materials/refs/heads/main/src/assets/png/facebook.png',
    instagram: 'https://raw.githubusercontent.com/truonggiangit793/gmail-signature-materials/refs/heads/main/src/assets/png/instagram.png',
    linkedin: 'https://raw.githubusercontent.com/truonggiangit793/gmail-signature-materials/refs/heads/main/src/assets/png/linkedin.png',
    github: 'https://raw.githubusercontent.com/truonggiangit793/gmail-signature-materials/refs/heads/main/src/assets/png/github.png',
    footer: 'https://raw.githubusercontent.com/truonggiangit793/gmail-signature-materials/refs/heads/main/src/assets/png/footer.png',
  };

  const TemplateWrapper = ({ children }: { children: React.ReactNode }) => {
    return (
      <Html>
        <Head />
        <Body>
          {children}
        </Body>
      </Html>
    )
  };

  const TemplateContent = () => {
    return (
      <Container style={signatureCard}>
        <Section style={{ padding: '30px 20px 0px 20px' }}>
          <Img width='100' src={userPayload.regards} />
        </Section>

        <Section style={{ padding: '30px 20px 0px 20px' }}>
          <Row>
            <Column style={{ borderRight: '1px solid #0000003b', paddingRight: 30 }}>
              <Img width='120' src={userPayload.avatar} style={avatarStyle} />
            </Column>
            <Column style={{ width: '100%', paddingLeft: 30 }}>
              <Img width='250' src={userPayload.fullname} />
              <Img width='150' src={userPayload.jobTitle} />
              <Section style={{ marginTop: 10 }}>
                <Text style={textStyle}>Phone number: <Link href={`tel:${userPayload.phone}`}>{userPayload.phone}</Link></Text>
                <Text style={textStyle}>Location: <Link href={`https://www.google.com/maps/place/${userPayload.address}`}>{userPayload.address}</Link></Text>
              </Section>
            </Column>
          </Row>
        </Section>

        <Section style={{ padding: '30px 20px 0px 20px' }}>
          <Row>
            <Column style={{ paddingRight: 8 }}>
              <Link href='https://www.facebook.com/truonggiangit793'>
                <Img height='25' src={userPayload.facebook} />
              </Link>
            </Column>
            <Column style={{ paddingRight: 8 }}>
              <Link href='https://www.instagram.com/truonggiangit793'>
                <Img height='25' src={userPayload.instagram} />
              </Link>
            </Column>
            <Column style={{ paddingRight: 8 }}>
              <Link href='https://linkedin.com/in/truonggiangit793'>
                <Img height='25' src={userPayload.linkedin} />
              </Link>
            </Column>
            <Column style={{ width: '100%' }}>
              <Link href='https://github.com/truonggiangit793'>
                <Img height='25' src={userPayload.github} />
              </Link>
            </Column>
          </Row>
        </Section>

        <Section style={{ padding: '30px 0px 10px 0px' }}>
          <Img width='100%' src={userPayload.footer} />
        </Section>
      </Container>
    );
  };

  const MainTemplate = () => {
    return (
      <TemplateWrapper>
        <TemplateContent />
      </TemplateWrapper>
    )
  };

  const templateString = render(MainTemplate());

  return (
    <Fragment>
      <TemplateContent />
    </Fragment>
  );
};
