import React, { useState, useEffect } from 'react';

import Filters from '../../components/Filtres/Filtres';
import CarsList from '../../components/CarsList/CarsList';
import { Button, Container } from './CatalogPage.styled';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCars } from '../../redux/cars/carsOperations';
import { carsSelector } from '../../redux/cars/carsSelectors';
import {
  filteredSelector,
  isFilteredSelector,
} from '../../redux/filter/filterSelector';

const CatalogPage = () => {
  const dispatch = useDispatch();

  const [carsPerPage, setCarsPerPage] = useState(8);

  const cars = useSelector(carsSelector);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(fetchCars({ page: currentPage, carsPerPage }));
  }, [dispatch, currentPage, carsPerPage]);

  const filteredArr = useSelector(filteredSelector);
  const isFiltered = useSelector(isFilteredSelector);

  const loadMore = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <Container>
      <Filters />
      {isFiltered ? <CarsList cars={filteredArr} /> : <CarsList cars={cars} />}
      {cars.length >= carsPerPage && (
        <Button onClick={loadMore}>Load more</Button>
      )}
    </Container>
  );
};

export default CatalogPage;
