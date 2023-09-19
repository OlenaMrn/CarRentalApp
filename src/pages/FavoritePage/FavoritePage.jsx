import { useSelector } from 'react-redux';
import CarList from '../../components/CarsList/CarsList';
import { favoriteSelector } from '../../redux/cars/carsSelectors';
import styled from 'styled-components';


const Container = styled.div`
  background-color: white;
  padding: 10px 80px;
  min-height: calc(100vh - 82px);
`;

const NoFavoritesMessage = styled.div`
  text-align: center;
  font-size: 18px;
  color: #888; 
  margin-top: 20px;
`;

const FavoritePage = () => {
  const cars = useSelector(favoriteSelector);

  return (
    <Container>
      {cars.length > 0 ? (
        <CarList cars={cars} />
      ) : (
        <NoFavoritesMessage>No favorites</NoFavoritesMessage>
      )}
    </Container>
  );
};

export default FavoritePage;





