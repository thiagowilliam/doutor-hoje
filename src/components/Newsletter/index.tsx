import React from 'react';

import Button from '../Button';
import * as S from './styles';

const Newsletter: React.FC = () => {
  return (
    <S.Container>
      <p>Quer receber novidades no seu e-mail</p>
      <form action="">
        <input type="text" placeholder="digite seu email" />
        <Button isButtonBlue>Cadastrar Newsletter</Button>
      </form>
    </S.Container>
  );
};

export default Newsletter;
