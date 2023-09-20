import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Hero, Intro, Title, IntroText } from './Home.styled';
import car from '../../UI/images/car.jpg';
import { Container } from 'components/Container/Container';
import CardItem from 'components/CardItem/CardItem';
import { CatalogSection } from 'components/Catalog/Catalog.styled';
import { setCards, toggleFavorite } from '../../store/store';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Home = () => {
  const [adverts, setAdverts] = useState([]);

  const dispatch = useDispatch();

  const favorites = useSelector(state => state.cards.favorites);

  useEffect(() => {
    dispatch(setCards()).then(data => {
      setAdverts(data.payload.slice(0, 36));
    });
  }, [dispatch]);

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

  return (
    <>
      <Hero style={{ backgroundImage: ` url(${car})` }}>
        <Container>
          <Title $size={'56px'}>
            <i>Rentalcars</i>
          </Title>
        </Container>
      </Hero>
      <Intro>
        <Container>
          <Title>We invite you to use our service</Title>
          <IntroText>
            Tired of pushing yourself on buses and carrying heavy bags from the supermarket? There is a way out - rent a car, Kyiv will become much more comfortable with personal transport! The economy class will come in handy in the everyday life of a large family, with a smart there will never be any problems with parking, and in special cases, a spectacular executive class car will come to the rescue. The Narscars company offers car rental in Kyiv on the terms of both short-term and long-term lease - order online or draw up a contract in our office!
          </IntroText>
          <IntroText>
            To view more detail information, go to the Сatalog page and choose
            the cars you like. To view even more detail information, there is a
            Learn more button on the card, which opens a modal window with the
            selected car. You also can view the selected cars on the Favorites
            page. To delete a card from Favorites, click on the heart at the top
            right, or delete all cards by clicking on the Delete all button on
            the right sidebar.
          </IntroText>
        </Container>
      </Intro>
      <CatalogSection>
        <Container>
          {adverts.length && (
            <Swiper
              slidesPerView={5}
              spaceBetween={10}
              breakpoints={{
                1440: {
                  slidesPerView: 5,
                  spaceBetween: 20,
                },
              }}
              modules={[Navigation, Autoplay]}
              navigation={{
                prevEl: '.swiper-button-prev',
                nextEl: '.swiper-button-next',
              }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              className="mySwiper"
            >
              {adverts.map(advert => {
                const { id } = advert;
                return (
                  <SwiperSlide
                    key={id}
                    style={{
                      height: 'auto',
                      display: 'flex',
                      justifyContent: 'center',
                    }}
                  >
                    <CardItem
                      key={advert.id}
                      advert={advert}
                      favorites={favorites}
                      handleHeartClick={handleHeartClick}
                      moreInfo={false}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          )}
        </Container>
      </CatalogSection>
    </>
  );
};

export default Home;
