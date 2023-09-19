import CarCard from '../CarsList/CarCard';

import { CardList } from './CarsList.styled';

const CarsList = ({ cars }) => {
  return (
    <CardList>
      {cars.map(car => (
        <CarCard key={car.id} data={car} />
      ))}
    </CardList>
  );
};

export default CarsList;
