import React, { useEffect, useState } from 'react';
import { BtnWrap, CardsGroup, CatalogSection } from './Catalog.styled';
import { useSelector, useDispatch } from 'react-redux';
import { setCards, toggleFavorite } from '../../store/store';
import CardItem from '../CardItem/CardItem';
import { ButtonLink } from '../Button/Button';
import Filter from 'components/Filter/Filter';
import { Container } from 'components/Container/Container';

const Catalog = () => {
  const [adverts, setAdverts] = useState([]);
  const [visibleCardCount, setVisibleCardCount] = useState(8);
  const [filteredAdverts, setFilteredAdverts] = useState(adverts);
  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch();

  const favorites = useSelector(state => state.cards.favorites);
  const filter = useSelector(state => state.filter);

  useEffect(() => {
    dispatch(setCards()).then(data => {
      setAdverts(data.payload);
      setIsLoading(false);
    });
  }, [dispatch]);

  useEffect(() => {
    const filterAdverts = () => {
      return adverts.filter(advert => {
        return (
          (advert.make.toLowerCase() === filter.brand || !filter.brand) &&
          (parseFloat(advert.rentalPrice.replace('$', '')) <= filter.price ||
            !filter.price) &&
          (parseFloat(advert.mileage) >= filter.mileageFrom ||
            !filter.mileageFrom) &&
          (parseFloat(advert.mileage) <= filter.mileageTo || !filter.mileageTo)
        );
      });
    };

    const filtered = filterAdverts();
    setFilteredAdverts(filtered);

    if (Object.values(filter).every(element => element === '')) {
      setFilteredAdverts(adverts);
    }
  }, [filter, adverts]);

  function getCardById(id) {
    return adverts.find(card => card.id === id);
  }

  const handleHeartClick = id => {
    const index = favorites.indexOf(id);

    const favCard = getCardById(id);

    if (index === -1) {
      dispatch(toggleFavorite(favCard));
    } else {
      dispatch(toggleFavorite(favCard));
    }
  };

  const loadMoreCards = () => {
    if (visibleCardCount <= adverts.length) {
      setVisibleCardCount(visibleCardCount + 8);
    }
  };

  return (
    <CatalogSection>
      <Container>
        <Filter />
        {isLoading ? (
          <p
            style={{ fontSize: '40px', textAlign: 'center', color: '#0b44cd' }}
          >
            Loading cards...
          </p>
        ) : (
          <CardsGroup>
            {filteredAdverts.slice(0, visibleCardCount).map(advert => {
              return (
                <CardItem
                  key={advert.id}
                  advert={advert}
                  favorites={favorites}
                  handleHeartClick={handleHeartClick}
                  moreInfo={true}
                />
              );
            })}
          </CardsGroup>
        )}
        {!filteredAdverts.length && !isLoading && (
          <p
            style={{ fontSize: '40px', textAlign: 'center', color: '#ec3535' }}
          >
            There is no data for your request
          </p>
        )}
        {visibleCardCount <= filteredAdverts.length && (
          <BtnWrap>
            <ButtonLink onClick={loadMoreCards}>Load more</ButtonLink>
          </BtnWrap>
        )}
      </Container>
    </CatalogSection>
  );
};

export default Catalog;
