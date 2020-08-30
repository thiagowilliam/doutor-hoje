import React from 'react';

import * as S from './styles';
import SearchAppointment from '../../components/SearchAppointment';
import Newsletter from '../../components/Newsletter';

import SeloBlack from '../../assets/selo.png';

const Home: React.FC = () => {
  return (
    <>
      <SearchAppointment />
      <S.Container>
        <h2>Assinaturas Doutor Hoje</h2>
        <S.CardType>
          <img src={SeloBlack} alt="Doutor Hoje Black" />
          <S.BoxCard>
            <S.TitleCard>Doutor Hoje Black</S.TitleCard>
            <S.SubTitleCard>
              <p>Consultas por R$29,50</p>
              <span>em 41 especialidades médicas</span>
            </S.SubTitleCard>
            <S.DescriptionCard>
              <p>Exames laboratoriais por R$5 e R$10</p>
              <p>Consulta Online ilimitadas 24hrs</p>
              <S.DefaultLink href="/"> Ver detalhes </S.DefaultLink>
              <p>por apenas</p>
              <p>
                <strong>R$59,50</strong> mês por pessoa
              </p>
              <S.BlueLink href="/">Quero Assinar</S.BlueLink>
            </S.DescriptionCard>

            <S.DefaultLink href="/"> ver detalhes comparativa </S.DefaultLink>
          </S.BoxCard>
        </S.CardType>
      </S.Container>
      <Newsletter />
    </>
  );
};

export default Home;
