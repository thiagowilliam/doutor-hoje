import styled from 'styled-components';

export const BackgroundBlue = styled.section`
  background: var(--color-primary);
`;
export const Container = styled.div`
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;
  padding: 1.8rem 0;
  h1 {
    color: var(--color-white);
    font-size: 2.4rem;
    width: 100%;
    text-align: center;
    margin-bottom: 1.8rem;
    font-weight: 400;
  }

  form {
    display: flex;
    justify-content: center;
    align-items: center;

    button {
    }
  }
`;
export const WrapperInput = styled.div`
  background: var(--color-white);
  border-radius: 2.4rem;
  padding: 0.8rem 1.2rem;
  width: 70%;
  margin-right: 2.4rem;
  display: flex;
  justify-content: center;
  align-items: center;

  select {
    border: none;
    font-size: 1.6rem;
  }

  input {
    background: none;
    border: none;
    flex: 1;
    margin: 0 0.8rem;
    &::placeholder {
      color: var(--color-text-placeholder);
    }
  }
`;
