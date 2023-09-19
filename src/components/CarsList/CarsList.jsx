
import CarCard from '../CarsList/CarCard';

import { CardList } from './CarsList.styled';

const CarsList = ({ cars }) => {
    console.log('Data received in CarList:', cars);

 

  return (
    <CardList>
      {cars.map(car => (
        <CarCard key={car.id} data={car} />
      ))}
    </CardList>
  );
};

export default CarsList;




// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchCars } from '../../redux/cars/carsOperations';

// const CarsList = () => {
//   const dispatch = useDispatch();
  
//   const cars = useSelector(state => state.cars.data); 

// console.log(cars);

 
//   useEffect(() => {
//     dispatch(fetchCars());
//   }, [dispatch]);

//   if (cars.status === 'loading') {
//     return <p>Loading...</p>;
//   }

//   if (cars.status === 'failed') {
//     return <p>Error: {cars.error}</p>;
//   }

//   return (
//     <div>
//         <ul>
//         {cars.map(car => (
//           <li key={car.id}>{car.model}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default CarsList;
