import React, { ButtonHTMLAttributes } from 'react';

import * as S from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isButtonBlue?: boolean;
  isButtonWhite?: boolean;
}
const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return (
    <S.Container type="submit" {...rest}>
      {children}
    </S.Container>
  );
};

export default Button;
