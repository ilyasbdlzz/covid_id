import styled from "styled-components";
import HeroImage from "../../assets/hero-illustration.svg"; // ganti jika perlu

const HeroWrapper = styled.section`
  padding: 60px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  background-color: #ffffff;
`;

const HeroText = styled.div`
  max-width: 500px;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: #06d6a0;
  font-family: 'Poppins', sans-serif;
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  margin: 10px 0;
  color: #073b4c;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #333;
  margin-bottom: 20px;
`;

const ButtonLink = styled.a`
  display: inline-block;
  background-color: #06d6a0;
  color: #fff;
  padding: 10px 20px;
  border-radius: 8px;
  font-weight: bold;
  text-decoration: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #04b58a;
  }
`;

const Illustration = styled.img`
  width: 300px;
  max-width: 100%;
  margin-top: 20px;
`;

function Hero({
  title = "Covid ID",
  subtitle = "Monitoring Perkembangan Covid",
  description = "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
  showButton = false,
  buttonText = "Vaccine",
  buttonLink = "https://vaksin.kemkes.go.id",
}) {
  return (
    <HeroWrapper>
      <HeroText>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
        <Description>{description}</Description>
        {showButton && (
          <ButtonLink href={buttonLink} target="_blank" rel="noopener noreferrer">
            {buttonText}
          </ButtonLink>
        )}
      </HeroText>
      <Illustration src={HeroImage} alt="Hero illustration" />
    </HeroWrapper>
  );
}

export default Hero;
