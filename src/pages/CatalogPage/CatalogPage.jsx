import styled from 'styled-components';
import Filters from '../../components/Filtres/Filtres';

const Container = styled.div`
  background-color: white;
  padding: 0px 80px;
`;

const CatalogPage = () => {
  return (
    <Container>
      <Filters />
    </Container>
  );
};

export default CatalogPage;
