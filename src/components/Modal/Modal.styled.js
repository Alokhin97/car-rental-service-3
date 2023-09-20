import { CloseIcon } from 'UI/icons';
import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(18 20 23 / 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: auto;

  z-index: 1200;
`;

export const ModalStyled = styled.div`
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);
  opacity: 0;
  transform: translateY(-20px);

  transition: opacity 0.5s ease, transform 0.3s ease;

  &.modal-open {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const CloseButton = styled(CloseIcon)`
  content: '';
  position: absolute;
  top: 16px;
  right: 16px;
  background-size: contain;
  background-repeat: no-repeat;
  stroke: #121417;
  cursor: pointer;

  &:hover {
    stroke: #3470ff;
  }
`;
