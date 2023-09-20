import { useSelector } from 'react-redux';
import { StyleSheetManager } from 'styled-components';
import { currentItemsSelector } from '../../redux/cars/carsSelectors';

import { isFilteredSelector } from '../../redux/filter/filterSelector'
import CarCard from '../CarsList/CarCard';
import NotFound from './NotFound';
import { CardList } from './CarsList.styled';

const CarsList = ({ cars }) => {
   const isFiltered = useSelector(isFilteredSelector);
   const currentItems = useSelector(currentItemsSelector);
 
  
  return (
    <StyleSheetManager>
    <CardList>
      {cars.length > 0
        ? cars
            .slice(0, currentItems)
            .map(car => <CarCard key={car.id} data={car} />)
        : isFiltered && <NotFound />}
      </CardList>
    </StyleSheetManager>
  );
};

export default CarsList;
