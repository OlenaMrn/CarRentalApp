import styled from "styled-components";

import Hero from "../../components/Hero/Hero";

const Container = styled.div`
  background-color: #f2f2f2;
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