import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;
  padding: 1.8rem 2rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 440px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const WrapperLinks = styled.div`
  @media (max-width: 440px) {
    width: 100%;
    margin-top: 1.6rem;
    text-align: center;
  }
`;
