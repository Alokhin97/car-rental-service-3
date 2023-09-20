import styled from 'styled-components';

export const Hero = styled.section`
  min-height: 60vh;
  background-color: var(--light-black);
  padding: 80px 0;
  width: 100%;
  background-position: center;
  background-size: cover;
  position: relative;
  z-index: 1;
  color: var(--white);

  &::before {
    position: absolute;
    inset: 0;
    content: '';
    background: var(--light-black);
    opacity: 0.6;
    z-index: -1;
  }
`;

export const Title = styled.h1`
  font-family: 'Skranji';
  font-size: ${props => props.$size || '32px'};
  line-height: calc(48 / 44);
  margin: 0 0 20px;
`;

export const Intro = styled.div`
  text-align: center;
  padding: 80px 0;
`;

export const IntroText = styled.p`
  text-indent: 30px;
  text-align: start;
  font-size: 18px;
  margin: 0 auto;
  max-width: 1000px;
`;
