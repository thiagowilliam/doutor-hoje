import React from 'react';

import * as S from './styles';

const Footer: React.FC = () => {
  return (
    <S.BlackBackground>
      <S.Container>
        <S.WrapperLinks>
          <S.BoxLinks>
            <strong>Central de atendimento</strong>
            <S.ListBackground>
              <li>0880 727 3620</li>
            </S.ListBackground>

            <strong>Vendas</strong>
            <S.ListBackground>
              <li>
                <span>Brasília</span>
                <span>(61) 4042-6525</span>
              </li>

              <li>
                <span>
                  <S.IconWhatsap />
                </span>
                <span>(61) 4042-6525</span>
              </li>

              <li>
                <span>São Paulo</span>
                <span>(11) 98450-1703</span>
              </li>

              <li>
                <span>Outras Localidades</span>
                <span>0800 727 3620</span>
              </li>
            </S.ListBackground>
            <p>
              Atendimento de segunda a sexta, das 8hrs às 18hrs, exceto feriados
            </p>
          </S.BoxLinks>

          <S.BoxLinks>
            <strong>Sobre nós</strong>
            <ul>
              <li>
                <a href="/">Como a Doutor Hoje Funciona</a>
              </li>
              <li>
                <a href="/">Perguntas Frequentes</a>
              </li>
              <li>
                <a href="/">Nossos serviços</a>
              </li>
              <li>
                <a href="/">Nossas rede</a>
              </li>
              <li>
                <a href="/">Termos de Uso & política de Privacidade </a>
              </li>
              <li>
                <a href="/">Aplicativo Doutor Hoje</a>
              </li>
            </ul>
          </S.BoxLinks>

          <S.BoxLinks>
            <strong>Acessos Internos</strong>
            <ul>
              <li>
                <a href="/">Administrativo</a>
              </li>
              <li>
                <a href="/">Consultor</a>
              </li>
              <li>
                <a href="/">Empresarial</a>
              </li>
              <li>
                <a href="/">Prestador</a>
              </li>
              <li>
                <a href="/">Paciente</a>
              </li>
            </ul>
          </S.BoxLinks>
        </S.WrapperLinks>
        <S.WrapperIcons>
          <a href="/">
            <S.IconFacebook />
          </a>
          <a href="/">
            <S.IconLinkedin />
          </a>
          <a href="/">
            <S.IconInstagran />
          </a>
          <a href="/">
            <S.IconYoutube />
          </a>
        </S.WrapperIcons>
      </S.Container>
    </S.BlackBackground>
  );
};

export default Footer;
