import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 2.4rem 0;
  background: var(--color-secundary);
  flex-direction: column;

  p {
    color: var(--color-white);
    font-size: 1.8rem;
    margin-bottom: 1.8rem;
  }

  form {
    width: 70%;
  }

  input {
    background: var(--color-white);
    border: none;
    flex: 1;
    margin: 0 0.8rem;
    border-radius: 2.4rem;
    padding: 0.8rem 1.2rem;
    width: 70%;
    &::placeholder {
      color: var(--color-text-placeholder);
    }
  }

  button {
    width: 24rem;
  }
`;
