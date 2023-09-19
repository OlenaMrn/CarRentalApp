import { Link } from 'react-router-dom';

import {
  ImageWrap,
  Paragraph,
  Title,
  Container,
  TextContainer,
  Button,
  Wrapper,
  StyledSpan,
} from './Hero.styled';

import Car from '../../img/hero_image.png';

const Hero = () => {
  return (
    <Container>
      <Wrapper>
        <TextContainer>
          <Title>Search, book and rent your dream car easily</Title>
          <Paragraph>
            Discover, reserve, and drive your dream car effortlessly with our
            platform. Say goodbye to rental hassles and hello to an
            unforgettable experience at <StyledSpan>GoRent</StyledSpan>
          </Paragraph>
        </TextContainer>
        <Link to="/catalog">
          <Button>Go Rent Car</Button>
        </Link>
      </Wrapper>
      <ImageWrap>
        <img src={Car} alt="Car" />
      </ImageWrap>
    </Container>
  );
};

export default Hero;
