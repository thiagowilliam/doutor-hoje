import styled, { css } from 'styled-components';
import { shade } from 'polished';

export const Container = styled.section`
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;
  padding: 1.8rem 0;

  h2 {
    width: 100%;
    text-align: center;
    color: var(--color-strong-black);
    font-weight: 400;
  }
`;
export const CardType = styled.div`
  width: 33%;
  margin: 0 auto;
  text-align: center;
  img {
    width: 150px;
  }
`;
export const BoxCard = styled.article`
  position: relative;
`;
export const TitleCard = styled.div`
  background: var(--color-strong-black);
  color: var(--color-background);
  font-weight: 700;
  font-size: 2rem;
  text-align: left;
  padding: 1.2rem 2rem;
  border-radius: 0.8rem 0.8rem 0 0;
`;
export const SubTitleCard = styled.div`
  background: var(--color-weak-black);
  color: var(--color-background);
  font-size: 1.6rem;
  text-align: left;
  padding: 1.2rem 2rem;
  border-top: 0.5px solid #4f4f4f;
`;
export const DescriptionCard = styled.div`
  border: 0.5px solid #c5c5c5;
  padding: 1.2rem 2rem;
  border-radius: 0 0 0.8rem 0.8rem;
  p {
    text-align: left;
    width: 100%;
    font-size: 1.4rem;
  }
`;
const LinkDefault = css`
  text-decoration: none;
  transition: all 0.2s;
`;

export const WrapperLinks = styled.div``;

export const DefaultLink = styled.a`
  ${LinkDefault}
  color: var(--color-link);
  margin-right: 2rem;
  font-size: 1.4rem;
  text-align: left;
  display: block;
  margin: 1.6rem 0;
  &:hover {
    color: ${shade(0.2, '#0967ff')};
  }
`;

export const BlueLink = styled.a`
  ${LinkDefault}
  font-size: 1.6rem;
  text-transform: uppercase;
  background: var(--color-link-background);
  color: var(--color-link-with-background);
  border-radius: 2.4rem;
  padding: 0.8rem 2.4rem;
  margin: 1.5rem 0;
  display: inline-block;
  &:hover {
    background: ${shade(0.2, '#0967ff')};
  }
`;
