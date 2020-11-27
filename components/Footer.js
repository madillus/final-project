import Link from 'next/link';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import EmailIcon from '@material-ui/icons/Email';
import styled from 'styled-components';

const FooterBottom = styled.footer`
  background: #2e2d26;
  height: 6rem;
  padding: 20;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  z-index: 9;
`;
const IconBox = styled.section`
  width: 30rem;
  margin-left: 4rem;
  display: flex;
  align-content: flex-end;
  justify-content: space-between;
  padding-top: 1rem;

  color: ghostwhite;
  margin: auto;
  @media (max-width: 768px) {
    width: 15rem;
  }
`;

const Copyright = styled.p`
  display: 'flex';
  justify-content: center;

  color: ghostwhite;
  text-align: center;
  line-height: 1.6;
  font-size: 12px;
  padding-bottom: 30;
`;

export default function Footer() {
  return (
    <FooterBottom>
      <IconBox>
        <Link href="https://www.facebook.com/1516-Brewing-Company-45023484159">
          <FacebookIcon style={{ cursor: 'pointer' }} />
        </Link>
        <Link href="https://www.instagram.com/1516brewingcompany/">
          <InstagramIcon style={{ cursor: 'pointer' }} />
        </Link>
        <Link href="mailto:hq@1516brewingcompany.com">
          <EmailIcon style={{ cursor: 'pointer' }} />
        </Link>
      </IconBox>

      <Copyright>
        {' '}
        ©Copyright 2020 All rights reserved. 1516 Brewing Company®
      </Copyright>
    </FooterBottom>
  );
}

// 'Copyright 2020 All rights reserved. 1516 Brewing Company'
