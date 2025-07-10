import styled from "styled-components";
import { Link } from "react-router-dom";

// Styled Components
const FooterContainer = styled.footer`
  background-color: #06d6a0;
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }
`;

const FooterText = styled.div`
  font-size: 1rem;
  font-family: 'Poppins', sans-serif;
`;

const FooterLinks = styled.div`
  display: flex;
  gap: 24px;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const FooterLink = styled(Link)`
  color: white;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterText>
        Covid ID<br />
        Developed by Ilyaskenway
      </FooterText>
      <FooterLinks>
        <FooterLink to="/">Global</FooterLink>
        <FooterLink to="/indonesia">Indonesia</FooterLink>
        <FooterLink to="/provinsi">Provinsi</FooterLink>
        <FooterLink to="/about">About</FooterLink>
      </FooterLinks>
    </FooterContainer>
  );
}

export default Footer;
