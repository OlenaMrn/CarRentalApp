import React from 'react';

import { createAddressObject } from '../CarsList/carHelpers';

import {
  Photo,
  Title,
  Span,
  Text,
  Button,
  Description,
  FunctionTitle,
  Wrapper,
  ConditionWrapper,
  ColorSpan,
  FontSpan,
} from './CarCardModal.styled';



const CarCardModal = ({ car, toggleModal }) => {
  if (!car) {
    return null;
  }

  const {
    img,
    make,
    model,
    year,
    rentalPrice,
    address,
    fuelConsumption,
    type,
    mileage,
    accessories,
    id,
    engineSize,
    description,
    functionalities,
    rentalConditions,
  } = car;
const phoneNumber = '+380730000000';
const { city, country } = createAddressObject(address);

    

     const mileageWithK = mileage.toLocaleString('en-US');
     const rentalCondition = rentalConditions.split('\n');
     const minAge = rentalCondition[0].split(':');
  return (
    <>
      <Photo src={img} alt={{ make } && { model }} />

      <Title>
        {make} <Span>{model}</Span>, {year}
      </Title>

      <Text>
        {city} | {country} | Id: {id} | Year: {year} | Type: {type}
      </Text>
      <Text>
        Fuel Consumption: {fuelConsumption} | EngineSize: {engineSize}
      </Text>
      <Description>{description}</Description>
      <FunctionTitle>Accessories and functionalities:</FunctionTitle>
      <Text>
        {accessories.map((accessory, index) => (
          <span key={index}>{accessory} | </span>
        ))}
      </Text>
      <Text>
        {functionalities.map((functionality, index) => (
          <span key={index}>{functionality} | </span>
        ))}
      </Text>
      <FunctionTitle>Rental Conditions: </FunctionTitle>
      <Wrapper>
        <ConditionWrapper>
          <FontSpan>{minAge[0]}:</FontSpan>
          <ColorSpan>{minAge[1]}</ColorSpan>
        </ConditionWrapper>
        <ConditionWrapper>{rentalCondition[1]}</ConditionWrapper>
        <ConditionWrapper>{rentalCondition[2]}</ConditionWrapper>
        <ConditionWrapper>
          <FontSpan>Mileage:</FontSpan>
          <ColorSpan>{mileageWithK}</ColorSpan>
        </ConditionWrapper>
        <ConditionWrapper>
          <FontSpan>Price:</FontSpan>
          <ColorSpan>{rentalPrice}</ColorSpan>
        </ConditionWrapper>
        <Button href={`tel:${phoneNumber}`}>Go Rent Car</Button>
      </Wrapper>
    </>
  );
}

export default CarCardModal;
