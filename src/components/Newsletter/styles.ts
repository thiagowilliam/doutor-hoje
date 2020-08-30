import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 2.4rem 2rem;
  background: var(--color-secundary);
  flex-direction: column;

  p {
    color: var(--color-white);
    font-size: 1.8rem;
    margin-bottom: 1.8rem;
  }

  form {
    width: 70%;
    display: flex;
    @media (max-width: 880px) {
      width: 100%;
    }

    @media (max-width: 580px) {
      flex-wrap: wrap;
    }
  }

  input {
    background: var(--color-white);
    border: none;
    flex: 1;
    margin: 0 0.8rem;
    border-radius: 2.4rem;
    padding: 0.8rem 1.2rem;
    &::placeholder {
      color: var(--color-text-placeholder);
    }

    @media (max-width: 580px) {
      width: 100%;
      margin: 0 0 1.6rem 0;
    }
  }

  button {
    width: 24rem;

    @media (max-width: 580px) {
      width: 100%;
    }
  }
`;
