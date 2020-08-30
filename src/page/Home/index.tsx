import React from 'react';

import * as S from './styles';

import SearchAppointment from '../../components/SearchAppointment';
import Newsletter from '../../components/Newsletter';

import Anchor from '../../components/Anchor';

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
              <Anchor className="alignAnchor" isDefaultLink href="/">
                Ver detalhes
              </Anchor>
              <p>por apenas</p>
              <p>
                <strong>R$59,50</strong> mês por pessoa
              </p>
              <Anchor isBlueLink href="/">
                Quero Assinar
              </Anchor>
            </S.DescriptionCard>

            <Anchor className="marginAnchor" isDefaultLink href="/">
              ver detalhes comparativa
            </Anchor>
          </S.BoxCard>
        </S.CardType>
      </S.Container>

      <S.BackgroundBlue>
        <S.Container>
          <p>
            <strong>56</strong> especialidades
          </p>
          <p>
            <strong>67</strong> clínicas e laboratórios
          </p>
          <p>
            <strong>200.514</strong> consultas agendadas
          </p>
          <p>
            <strong>3253</strong> tipos de exames
          </p>
          <p>
            <strong>1007</strong> profissionais
          </p>
          <p>
            <strong>521.195</strong> de exames realizados
          </p>
        </S.Container>
      </S.BackgroundBlue>
      <Newsletter />
    </>
  );
};

export default Home;
