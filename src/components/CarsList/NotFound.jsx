
import styled from 'styled-components';

const NoDataFound = () => {
  
const Container = styled.div`
  display: flex;
  padding: 20px 30px 50px;
  flex-direction: column;
  align-items: center;
`;
    
    const Paragraph = styled.p`
      font-size: 18px;
      font-family: 'Helvetica', sans-serif;
      margin-top: 10px;
    `;

  return (
    <Container>
      
    
      <Paragraph>We couldn't find any cars for you. Clear your search and try again</Paragraph>
      
    </Container>
  );
};

export default NoDataFound;
