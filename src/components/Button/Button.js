import styled from 'styled-components';

export const Button = styled.button`
  background-color: var(--marked-color);
  color: var(--btn-text-color);
  cursor: pointer;
  border: none;
  border-radius: 12px;
  font-size: 14px;
  line-height: calc(20 / 14);
  font-weight: 600;
  padding: 12px;
  display: inline-block;
  min-width: 168px;
  transition: all 0.3s ease-out;
  height: ${props => props.$height || 'auto'};

  &:hover,
  &:focus {
    background-color: var(--accent-color);
  }
`;

export const ButtonLink = styled.button`
  display: inline-block;
  background-color: transparent;
  border: none;
  color: var(--marked-color);
  text-decoration: underline;
  cursor: pointer;
  transition: all 0.3s ease-out;

  &:hover,
  &:focus {
    color: var(--accent-color);
    text-decoration: none;
  }
`;
