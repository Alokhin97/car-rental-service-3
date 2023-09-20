import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleFavorite } from '../../store/store';
import CardItem from '../CardItem/CardItem';
import { CardsGroup, FavoriteSection } from './Favorite.styled';
import Sidebar from 'components/Sidebar/Sidebar';
import { FavoriteContainer } from './Favorite.styled';

const Favorite = () => {
  const favorites = useSelector(state => state.cards.favorites);

  const dispatch = useDispatch();

  function getCardById(id) {
    return favorites.find(favorite => favorite.id === id);
  }

  const handleHeartClick = id => {
    const index = favorites.indexOf(id);
    const favCard = getCardById(id);

    if (index === -1) {
      dispatch(toggleFavorite(favCard));
    }
  };

  return (
    <FavoriteSection>
      <FavoriteContainer>
        <Sidebar />
        {!favorites.length && (
          <p style={{ fontSize: '32px' }}>Please choose car in the Catalog</p>
        )}
        <CardsGroup>
          {favorites.map(favorite => (
            <CardItem
              key={favorite.id}
              advert={favorite}
              favorites={favorites}
              handleHeartClick={handleHeartClick}
              moreInfo={true}
            />
          ))}
        </CardsGroup>
      </FavoriteContainer>
    </FavoriteSection>
  );
};

export default Favorite;
