import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;
  padding: 1.8rem 2rem;

  h2 {
    width: 100%;
    text-align: center;
    color: var(--color-strong-black);
    font-weight: 400;
  }
`;
export const CardType = styled.div`
  width: 100%;
  max-width: 360px;
  margin: 0 auto;
  text-align: center;
  img {
    width: 150px;
  }
`;
export const BoxCard = styled.article`
  position: relative;

  .marginAnchor {
    margin-top: 4rem;
    display: inline-block;
  }
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

  .alignAnchor {
    font-size: 1.4rem;
    text-align: left;
    width: 100%;
  }

  a {
    display: inline-block;
    margin: 1.6rem 0;
  }
`;

export const WrapperLinks = styled.div``;

export const BackgroundBlue = styled.div`
  background: var(--color-primary);
  padding: 1.8rem 0;
  section {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 1.6rem;

    @media (max-width: 880px) {
      grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 540px) {
      grid-template-columns: 1fr;
    }
  }

  p {
    text-align: center;
    color: var(--color-white);
    font-size: 1.8rem;
  }

  strong {
    font-weight: 700;
  }
`;
