import React, { useState } from 'react';
import {
  Card,
  CardImg,
  List,
  ListUl,
  ListItem,
  CardDescription,
  CardPrice,
  CardTitle,
  MarkedText,
  StyledHeart,
  HeartButton,
} from './CardItem.styled';
import { Button } from '../Button/Button';
import { Modal } from 'components/Modal/Modal';
import DetailCarModal from 'components/DetailCarModal/DetailCarModal';

const CardItem = ({ advert, favorites, handleHeartClick, moreInfo }) => {
  const [showModal, setShowModal] = useState(false);

  const {
    id,
    year,
    make,
    model,
    rentalPrice,
    img,
    type,
    functionalities,
    address,
    rentalCompany,
  } = advert;

  const isShowModal = () => {
    setShowModal(s => !s);
  };

  return (
    <Card key={id}>
      <HeartButton onClick={() => handleHeartClick(id)}>
        <StyledHeart
          $isFavorite={favorites.some(favorite => favorite.id === id)}
        />
      </HeartButton>
      <CardImg src={img} alt={model} />
      {moreInfo && (
        <CardDescription>
          <CardPrice>{rentalPrice}</CardPrice>
          <CardTitle>
            {make} <MarkedText>{model},</MarkedText> {year}
          </CardTitle>
          <List>
            <ListUl>
              <ListItem>{address.split(' ')[4]}</ListItem>
              <ListItem>{address.split(',')[1]}</ListItem>
              <ListItem>{rentalCompany}</ListItem>
              <ListItem>{type}</ListItem>
              <ListItem>{model}</ListItem>
              <ListItem>{id}</ListItem>
              <ListItem>{functionalities[0]}</ListItem>
            </ListUl>
          </List>
        </CardDescription>
      )}
      {moreInfo && <Button onClick={isShowModal}>Lern More</Button>}
      {showModal && (
        <Modal onActive={isShowModal}>
          <DetailCarModal advert={advert} favorites={favorites} />
        </Modal>
      )}
    </Card>
  );
};

export default CardItem;
