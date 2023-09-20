import styled from 'styled-components';
import { Container } from 'components/Container/Container';

export const FavoriteSection = styled.section`
  padding: 25px 0;
`;

export const FavoriteContainer = styled(Container)`
  display: flex;
  gap: 29px;
`;

export const CardsGroup = styled.aside`
  display: grid;
  flex: 1;
  grid-template-columns: repeat(3, 1fr);
  gap: 29px;
`;
