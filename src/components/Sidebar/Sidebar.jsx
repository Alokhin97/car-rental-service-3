import React from 'react';
import { StyledSidebar } from './Sidebar.styled';
import { Button } from 'components/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { resetCards } from '../../store/store';

const Sidebar = () => {
  const dispatch = useDispatch();

  const favorites = useSelector(state => state.cards.favorites);

  const handleDelete = async e => {
    e.preventDefault();
    dispatch(resetCards());
  };

  return (
    <StyledSidebar>
      {favorites.length > 0 && (
        <Button onClick={handleDelete} style={{ marginBottom: '20px' }}>
          Delete all
        </Button>
      )}
      <p style={{ textIndent: '20px' }}>
        To view even more detail information, there is a Learn more button on
        the card, which opens a modal window with the selected car. You also can
        view the selected cars on the Favorites page. To delete a card from
        Favorites, click on the heart at the top right, or delete all cards by
        clicking on the Delete all button on the right sidebar.
      </p>
    </StyledSidebar>
  );
};

export default Sidebar;
