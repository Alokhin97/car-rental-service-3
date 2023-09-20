import React from 'react';
import {
  CardImg,
  CardTitle,
  Description,
  List,
  ListItem,
  ListUl,
  MarkedText,
  ModalContainer,
  RentalItem,
  RentalList,
  StyledTitle,
  Title,
} from './DetailCarModal.styled';
import { Button } from 'components/Button/Button';

const DetailCarModal = ({ advert }) => {
  const {
    id,
    year,
    make,
    model,
    rentalPrice,
    engineSize,
    fuelConsumption,
    img,
    type,
    accessories,
    functionalities,
    description,
    address,
    rentalConditions,
    mileage,
  } = advert;

  return (
    <ModalContainer>
      <CardImg src={img} alt={model} />
      <div></div>
      <CardTitle>
        {make}
        <MarkedText>{model},</MarkedText> {year}
      </CardTitle>
      <List>
        <ListUl>
          <ListItem>{address.split(',')[1]}</ListItem>
          <ListItem>{address.split(' ')[4]}</ListItem>
          <ListItem>id:{id}</ListItem>
          <ListItem>Year:{year}</ListItem>
          <ListItem>Type:{type}</ListItem>
        </ListUl>
        <ListUl>
          <ListItem>Fuel Consumption:{fuelConsumption}</ListItem>
          <ListItem>Engine Size{engineSize}</ListItem>
        </ListUl>
      </List>
      <Description>{description}</Description>
      <Title>Accessories and functionalities:</Title>
      <List>
        <ListUl>
          <ListItem>{accessories[0]}</ListItem>
          <ListItem>{accessories[1]}</ListItem>
          <ListItem>{functionalities[0]}</ListItem>
        </ListUl>
        <ListUl>
          <ListItem>{accessories[2]}</ListItem>
          <ListItem>{functionalities[1]}</ListItem>
          <ListItem>{functionalities[2]}</ListItem>
        </ListUl>
      </List>
      <StyledTitle>Rental Conditions: </StyledTitle>
      <RentalList>
        <RentalItem>
          Minimum age:{' '}
          <MarkedText>
            {rentalConditions.split('\n')[0].split(' ')[2]}
          </MarkedText>
        </RentalItem>
        <RentalItem>{rentalConditions.split('\n')[1]}</RentalItem>
        <RentalItem>{rentalConditions.split('\n')[2]}</RentalItem>
        <RentalItem>
          Mileage: <MarkedText>{mileage.toLocaleString('en-US')}</MarkedText>
        </RentalItem>
        <RentalItem>
          Prise: <MarkedText>{rentalPrice}</MarkedText>
        </RentalItem>
      </RentalList>
      <a href="tel:+380730000000">
        <Button>Rental car</Button>
      </a>
    </ModalContainer>
  );
};

export default DetailCarModal;
