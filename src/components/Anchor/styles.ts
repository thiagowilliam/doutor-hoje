import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface AnchorProps {
  isBlueLink?: boolean;
  isDefaultLink?: boolean;
}
export const Container = styled.a<AnchorProps>`
  font-size: 1.6rem;
  text-decoration: none;
  transition: all 0.2s;

  ${(props) =>
    props.isBlueLink &&
    css`
      text-transform: uppercase;
      background: var(--color-link-background);
      color: var(--color-link-with-background);
      border-radius: 2.4rem;
      padding: 0.8rem 2.4rem;
      &:hover {
        background: ${shade(0.2, '#0967ff')};
      }
    `}

  ${(props) =>
    props.isDefaultLink &&
    css`
      color: var(--color-link);
      margin-right: 2rem;

      &:hover {
        color: ${shade(0.2, '#0967ff')};
      }
    `}
`;
