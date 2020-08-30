import styled, { css } from 'styled-components';
import { shade } from 'polished';
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
} from 'react-icons/fa';

export const BlackBackground = styled.section`
  background: var(--color-strong-black);
`;
export const Container = styled.div`
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;
  padding: 1.8rem 2rem;
  display: flex;
  justify-content: space-between;
  @media (max-width: 980px) {
    flex-wrap: wrap;
  }
`;

export const WrapperLinks = styled.div`
  display: flex;
  @media (max-width: 980px) {
    width: 100%;
  }

  @media (max-width: 840px) {
    flex-wrap: wrap;
    div:first-child {
      width: 100%;
      margin-bottom: 3.2rem;
    }
  }
`;
export const BoxLinks = styled.div`
  color: var(--color-white);
  font-size: 1.2rem;
  & + div {
    margin-left: 3.2rem;
  }
  li {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.8rem;
  }

  strong {
    font-weight: 700;
    font-size: 1.5rem;
    margin-bottom: 0.8rem;
    display: block;
  }

  a {
    color: var(--color-white);
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const ListBackground = styled.ul`
  li {
    background: var(--color-weak-black);
    padding: 0.8rem 1.8rem;
    border-radius: 2.4rem;
  }
`;
export const IconWhatsap = styled(FaWhatsapp)`
  font-size: 1.8rem;
`;

export const WrapperIcons = styled.div`
  display: flex;
  @media (max-width: 980px) {
    width: 100%;
    margin-top: 3.2rem;
  }

  a {
    background: var(--color-white);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 3.5rem;
    height: 3.5rem;
    margin-left: 0.8rem;
    transition: all 0.2s;
    &:hover {
      background: ${shade(0.1, '#fff')};
      transform: scale(1.1);
    }
  }
`;

export const IconCss = css`
  font-size: 1.8rem;
  transition: all 0.2s;
  &:hover {
    transform: scale(1.1);
  }
`;

export const IconFacebook = styled(FaFacebookF)`
  ${IconCss}
  fill: #3b5999;
`;
export const IconLinkedin = styled(FaLinkedinIn)`
  ${IconCss}
  fill: #0077B5;
`;
export const IconInstagran = styled(FaInstagram)`
  ${IconCss}
  fill: #e4405f;
`;
export const IconYoutube = styled(FaYoutube)`
  ${IconCss}
  fill: #cd201f;
`;
