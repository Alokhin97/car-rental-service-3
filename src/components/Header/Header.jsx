import React from 'react';
import { PageHeader, Navigation, StyledNavLink } from './Header.styled';

const Header = () => {
  return (
    <PageHeader>
      <StyledNavLink to="/">Home</StyledNavLink>
      <Navigation>
        <StyledNavLink to="/catalog">Catalog</StyledNavLink>
        <StyledNavLink to="/favorites">Favorites</StyledNavLink>
      </Navigation>
    </PageHeader>
  );
};

export default Header;
