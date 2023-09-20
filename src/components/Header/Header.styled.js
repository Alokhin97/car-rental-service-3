import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const PageHeader = styled.nav`
  position: sticky;
  top: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 30px;
  background-color: var(--header-bg-color);
  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14),
    0 1px 10px 0 rgba(0, 0, 0, 0.12);
`;

export const Navigation = styled.nav`
  display: flex;
  gap: 20px;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: underline;
  transition: all 300ms ease-out;

  &:hover,
  &:focus {
    color: var(--link-accent);
  }
  &.active {
    text-decoration: none;
    color: var(--link-accent);
  }
`;
