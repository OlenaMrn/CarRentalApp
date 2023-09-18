import {
  ImageWrap,
  Paragraph,
  Title,
  Container,
  TextContainer,

} from './Hero.styled';

import Car from '../../img/hero_image.png';


const Hero = () => {
 
  return (
    <Container>
      <TextContainer>
        <Title>Search, book and rent your dream car easily</Title>
        <Paragraph>
          Discover, reserve, and drive your dream car effortlessly with our platform. Say goodbye to rental hassles and hello to an
          unforgettable experience at GoRent
        </Paragraph>
      </TextContainer>
      <ImageWrap>
        <img src={Car} alt="Car" />
      </ImageWrap>
    </Container>
  );
};

export default Hero;
