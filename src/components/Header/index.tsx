import React from 'react';

import Logo from '../../assets/logo.png';

import Anchor from '../Anchor';

import * as S from './styles';

const Header: React.FC = () => {
  return (
    <S.Container>
      <a href="/">
        <img src={Logo} alt="Doutor Hoje" title="Doutor Hoje" />
      </a>

      <S.WrapperLinks>
        <Anchor isDefaultLink href="/">
          login
        </Anchor>
        <Anchor isBlueLink href="/">
          Cadastrar
        </Anchor>
      </S.WrapperLinks>
    </S.Container>
  );
};

export default Header;
