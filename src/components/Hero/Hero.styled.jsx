import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  padding: 50px 0;
  `;

const TextContainer = styled.div`
  flex: 1;
  padding: 38px 38px 38px 0;
`;

const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
  font-family: 'Helvetica', sans-serif;
  color: #154EED;
`;

const Paragraph = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
  font-family: 'Helvetica', sans-serif;
  color: #858484;
  width:450px;
`;

const Wrapper = styled.div`
  width: 600px;
`;

const ImageWrap = styled.div``;

const Button = styled.a`
  font-size: 14px;
  font-weight: 600;
  color: #ffffff;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 50px;
  padding-right: 50px;
  background-color: #3470ff;
  border: none;
  border-radius: 12px;
  font-family: inherit;
 margin-top: 24px;
  &:hover,
  &:focus {
    background-color: #0b44cd;
  }`

const StyledSpan = styled.span`
  color: #154eed;
  font-weight: bold;
`;



export {
  ImageWrap,
  Paragraph,
  Wrapper,
  Title,
  Container,
  Button,
  TextContainer,
  StyledSpan,
};
