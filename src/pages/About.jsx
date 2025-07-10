import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import styled from "styled-components";

// Wrapper utama seluruh halaman
const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

// Konten utama (flex-grow agar isi mendorong footer ke bawah)
const Container = styled.main`
  flex: 1;
  max-width: 900px;
  padding: 3rem 1.5rem;
  margin: 0 auto;
  line-height: 1.7;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const Heading = styled.h1`
  font-size: 2.2rem;
  color: #073b4c;
  margin-bottom: 1rem;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 1.75rem;
    text-align: center;
  }
`;

const Paragraph = styled.p`
  font-size: 1.1rem;
  color: #444;
  margin-bottom: 1.5rem;
  text-align: justify;

  strong {
    color: #06d6a0;
  }

  @media (max-width: 768px) {
    text-align: left;
    font-size: 1rem;
  }
`;

function About() {
  return (
    <PageWrapper>
      <Navbar />
      <Container>
        <Heading>Tentang Covid ID</Heading>
        <Paragraph>
          <strong>Covid ID</strong> adalah platform pemantauan data Covid-19 yang menyajikan
          informasi terkini secara global maupun nasional (Indonesia), termasuk detail per provinsi.
        </Paragraph>
        <Paragraph>
          Aplikasi ini dibangun untuk memberikan akses yang cepat, akurat, dan mudah dipahami
          kepada masyarakat dalam memantau perkembangan penyebaran Covid-19. Seluruh data bersumber
          dari API terpercaya dan diperbarui secara berkala.
        </Paragraph>
        <Paragraph>
          Terima kasih telah menggunakan <strong>Covid ID</strong>. Bersama kita bisa lebih
          waspada, lebih peduli, dan lebih siap menghadapi tantangan kesehatan global.
        </Paragraph>
      </Container>
      <Footer />
    </PageWrapper>
  );
}

export default About;
