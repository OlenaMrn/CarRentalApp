import styled from 'styled-components';
import Filters from '../../components/Filtres/Filtres';
import CarsList from '../../components/CarsList/CarsList'

const Container = styled.div`
  background-color: white;
  padding: 0px 80px;
`;

const CatalogPage = () => {
  return (
    <Container>
      <Filters />
      <CarsList/>
    </Container>
  );
};

export default CatalogPage;
