import React, { useState, useEffect } from 'react';

import Filters from '../../components/Filtres/Filtres';
import CarsList from '../../components/CarsList/CarsList';
import {Button, Container} from './CatalogPage.styled';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCars } from '../../redux/cars/carsOperations';
import { carsSelector } from '../../redux/cars/carsSelectors';

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
