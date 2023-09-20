import styled from 'styled-components';
import { Heart } from '../../UI/icons';

export const CardsGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 29px;
`;

export const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 21px;
`;

export const CardImg = styled.img`
  width: 100%;
  display: block;
  aspect-ratio: 1/ 0.978;
  border-radius: 14px;
  object-fit: cover;
  margin-bottom: 14px;
  background: var(--accent-color);
`;

export const CardTitle = styled.h3`
  display: flex;
  flex-wrap: wrap;
  color: var(--text-color);
  margin: 0 0 8px;
  gap: 4px;
  font-size: 16px;
`;

export const MarkedText = styled.span`
  color: var(--marked-color);
`;

export const CardPrice = styled.span`
  float: right;
`;
export const CardDescription = styled.div`
  flex: 1;
  margin-bottom: 28px;
`;

export const List = styled.div`
  overflow: hidden;
`;

export const ListUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-left: -7px;
  font-size: 12px;
  color: var(--grey-text);
`;

export const ListItem = styled.li`
  border-left: solid 1px var(--grey-border);
  padding: 0 6px;
  margin-bottom: 4px;

  &:last-child {
    border-right: 0;
    padding-right: 0;
  }
`;

export const StyledHeart = styled(Heart)`
  fill: transparent;
  transition: all 0.3s ease;
  stroke: var(--white);
  fill: ${props => (props.$isFavorite ? 'var(--heart-color)' : 'transparent')};
  stroke: ${props =>
    props.$isFavorite ? 'var(--heart-color)' : 'var( --heart-border)'};

  &:hover {
    fill: ${props =>
      props.$isFavorite ? 'transparent' : 'var(--heart-color)'};
    stroke: ${props =>
      props.$isFavorite ? 'var( --heart-border)' : 'var(--heart-color)'};
  }
`;

export const HeartButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background-color: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
`;
