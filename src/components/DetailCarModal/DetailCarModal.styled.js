import styled from 'styled-components';

export const ModalContainer = styled.div`
  max-width: 541px;
  padding: 40px;
  border-radius: 24px;
  background-color: var(--modal-bg);
`;

export const CardImg = styled.img`
  width: 100%;
  display: block;
  aspect-ratio: 1/ 0.538;
  border-radius: 14px;
  object-fit: cover;
  margin-bottom: 14px;
  background: var(--img-bg);
`;

export const CardTitle = styled.h3`
  display: flex;
  flex-wrap: wrap;
  font-size: 18px;
  margin: 0 0 8px;
  gap: 4px;
`;

export const MarkedText = styled.span`
  color: var(--marked-color);
`;

export const List = styled.div`
  overflow: hidden;
  margin-bottom: 14px;
`;

export const ListUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-left: -7px;
  font-size: 12px;
  color: var(--descr-color);
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

export const Description = styled.p`
  font-size: 14px;
  line-height: calc(20 / 14);
  margin-bottom: 24px;
`;

export const Title = styled.h4`
  font-size: 14px;
  line-height: calc(20 / 14);
  margin-bottom: 8px;
`;

export const StyledTitle = styled.h4`
  font-size: 14px;
  line-height: calc(20 / 14);
  margin-top: 24px;
`;

export const RentalList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  color: var(--light-black);
  gap: 8px;
  margin-bottom: 34px;
  margin-top: 8px;
`;
export const RentalItem = styled.li`
  padding: 7px 14px;
  background-color: #f9f9f9;
  border-radius: 35px;
`;
