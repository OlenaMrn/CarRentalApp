import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../../redux/cars/carsSlice';
import { favoriteSelector } from '../../redux/cars/carsSelectors';
import CarModal from '../CarModal/CarModal';
import { createAddressObject, reduceFunctionalitiesArr } from './carHelpers';
import {
  CarListItem,
  CardHead,
  DescBox,
  FullHeart,
  SList,
  EmptyHeart,
} from './CarsList.styled';

const CarCard = ({ data }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const {
    img,
    type,
    make,
    model,
    year,
    rentalPrice,
    rentalCompany,
    id,
    photoLink,
    functionalities,
    address,
  } = data;

  const { city, country } = createAddressObject(address);
  const dispatch = useDispatch();

  const toggleModal = () => {
    setShowModal(!showModal); 
  };

  const handleClick = () => {
    if (!isFavorite) {
      setIsFavorite(true);
      dispatch(addFavorite(data));
    } else {
      setIsFavorite(false);
      dispatch(removeFavorite(data.id));
    }
  };

  const favorite = useSelector(favoriteSelector);

  useEffect(() => {
    const isCarFavorite = favorite.some(fav => fav.id === data.id);
    setIsFavorite(isCarFavorite);
  }, [favorite, data]);

  return (
    <CarListItem>
      {!isFavorite ? (
        <EmptyHeart size={18} onClick={handleClick} />
      ) : (
        <FullHeart size={18} onClick={handleClick} />
      )}
      {img ? <img src={img} alt={make} /> : <img src={photoLink} alt={make} />}
      <DescBox>
        <CardHead>
          <div>
            <p className="make">{make}</p>
            <p className="model">{model && model}</p>
            <p>,</p>
            <p className="year">{year}</p>
          </div>
          <p>{rentalPrice}</p>
        </CardHead>
        <SList>
          <li>{city}</li>
          <li>{country}</li>
          <li>{rentalCompany}</li>
          <li>{type}</li>
          <li>{model}</li>
          <li>{id}</li>
          <li>{reduceFunctionalitiesArr(functionalities)}</li>
        </SList>
        <button onClick={toggleModal}>Learn more</button>
      </DescBox>

      
      {showModal && <CarModal toggleModal={toggleModal} car={data} />}
    </CarListItem>
  );
};

CarCard.propTypes = {
  data: PropTypes.shape({
    img: PropTypes.string,
    photoLink: PropTypes.string,
    type: PropTypes.string,
    make: PropTypes.string,
    model: PropTypes.string,
    year: PropTypes.number,
    rentalPrice: PropTypes.string,
    rentalCompany: PropTypes.string,
    id: PropTypes.number,
    functionalities: PropTypes.arrayOf(PropTypes.string),
    address: PropTypes.string,
  }).isRequired,
};

export default CarCard;
