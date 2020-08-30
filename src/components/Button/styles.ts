import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface ButtonProps {
  isButtonBlue?: boolean;
  isButtonWhite?: boolean;
}

export const Container = styled.button<ButtonProps>`
  border: none;
  border-radius: 2.4rem;
  text-transform: uppercase;
  font-size: 1.6rem;
  width: 180px;
  padding: 0.8rem 1.2rem;
  transition: all 0.2s;
  ${(props) =>
    props.isButtonWhite &&
    css`
      background: var(--color-button-background);
      color: var(--color-button-text);
      &:hover {
        background: ${shade(0.1, '#fff')};
      }
    `}

  ${(props) =>
    props.isButtonBlue &&
    css`
      color: var(--color-button-background);
      background: var(--color-button-text);
      &:hover {
        background: ${shade(0.2, '#0967ff')};
      }
    `}
`;
