import styled from 'styled-components';
import Filters from '../../components/Filtres/Filtres';
import CarsList from '../../components/CarsList/CarsList'

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchCars } from '../../redux/cars/carsOperations';
import { carsSelector } from '../../redux/cars/carsSelectors';

const Container = styled.div`
  background-color: white;
  padding: 0px 80px;
`;

const CatalogPage = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  
  const cars = useSelector(carsSelector); 
  console.log('Data from Redux store:', cars);

 

  if (cars.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <Container>
      <Filters />
      <CarsList cars={cars} />
    </Container>
  );
};

export default CatalogPage;
