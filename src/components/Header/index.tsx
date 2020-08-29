import React from 'react';

import Logo from '../../assets/logo.png';
import * as S from './styles';

const Header: React.FC = () => {
  return (
    <S.Container>
      <a href="/">
        <img src={Logo} alt="Doutor Hoje" title="Doutor Hoje" />
      </a>

      <S.WrapperLinks>
        <S.DefaultLink href="/">login</S.DefaultLink>
        <S.BlueLink href="/">Cadastrar</S.BlueLink>
      </S.WrapperLinks>
    </S.Container>
  );
};

export default Header;
