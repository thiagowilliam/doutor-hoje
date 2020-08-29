import React from 'react';

import * as S from './styles';

import Icon from '../../assets/icon-doutor.svg';

const SearchAppointment: React.FC = () => {
  return (
    <S.BackgroundBlue>
      <S.Container>
        <h1>Agende agora sua consulta ou exame médico</h1>
        <form>
          <S.WrapperInput>
            <img src={Icon} alt="" />
            <select name="" id="">
              <option value="">consulta</option>
              <option value="">exame</option>
            </select>
            <input
              type="text"
              placeholder="Tente 'Clinica Médica', outra especialidade ou código"
            />
          </S.WrapperInput>

          <button type="button">Buscar</button>
        </form>
      </S.Container>
    </S.BackgroundBlue>
  );
};

export default SearchAppointment;
