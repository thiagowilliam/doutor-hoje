import styled, { css } from 'styled-components';
import { shade } from 'polished';

export const Container = styled.header`
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;
  padding: 1.8rem 0;

  display: flex;
  justify-content: space-between;
`;

const LinkDefault = css`
  font-size: 1.6rem;
  text-decoration: none;
  transition: all 0.2s;
`;

export const WrapperLinks = styled.div``;

export const DefaultLink = styled.a`
  ${LinkDefault}
  color: var(--color-link);
  margin-right: 2rem;

  &:hover {
    color: ${shade(0.2, '#0967ff')};
  }
`;

export const BlueLink = styled.a`
  ${LinkDefault}
  text-transform: uppercase;
  background: var(--color-link-background);
  color: var(--color-link-with-background);
  border-radius: 2.4rem;
  padding: 0.8rem 2.4rem;
  &:hover {
    background: ${shade(0.2, '#0967ff')};
  }
`;
