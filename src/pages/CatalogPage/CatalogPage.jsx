import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Filters from '../../components/Filtres/Filtres'; // Припускаю, що назва компонента правильна
import CarsList from '../../components/CarsList/CarsList';
import Button from './CatalogPage.styled';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCars } from '../../redux/cars/carsOperations';

import {carsSelector} from '../../redux/cars/carsSelectors';

const Container = styled.div`
  background-color: white;
  padding: 0px 80px;
  
`;

const CatalogPage = () => {
  const dispatch = useDispatch();
  const cars = useSelector(carsSelector);
  const [currentPage, setCurrentPage] = useState(1);
  const carsPerPage = 8;

  useEffect(() => {
    dispatch(fetchCars({ page: currentPage, carsPerPage }));
  }, [dispatch, currentPage]);

  const loadMore = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <Container>
      <Filters />
      <CarsList cars={cars} />
      {cars.length >= carsPerPage && (
        <Button onClick={loadMore}>Load more</Button>
      )}
    </Container>
  );
};

export default CatalogPage;


