import styled from "styled-components";

import Hero from "../../components/Hero/Hero";

const Container = styled.div`
  background-color: white;
  padding: 0px 180px;
`;

const HomePage = () => {
  return (
    <Container>
      <Hero />
      
    </Container>
  );
};

export default HomePage;