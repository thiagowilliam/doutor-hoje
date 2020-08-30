import React, { AnchorHTMLAttributes } from 'react';

import * as S from './styles';

interface InputProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  isBlueLink?: boolean;
  isDefaultLink?: boolean;
}

const Input: React.FC<InputProps> = ({ children, ...rest }) => {
  return (
    <S.Container type="text" {...rest}>
      {children}
    </S.Container>
  );
};

export default Input;
