import styled from 'styled-components';

const Container = styled.div`
 display: flex;
  /* justify-content: space-between;
  align-items: center;
  padding: 50px 0; */
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

const ImageWrap = styled.div`


`;
export {
 
  ImageWrap,
  Paragraph,
  
  Title,
  Container,
  
  TextContainer,
};
