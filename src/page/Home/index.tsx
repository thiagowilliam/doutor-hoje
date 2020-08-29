import React from 'react';

import * as S from './styles';
import SearchAppointment from '../../components/SearchAppointment';
import Newsletter from '../../components/Newsletter';

const Home: React.FC = () => {
  return (
    <>
      <SearchAppointment />
      <S.Container>
        <h1>Page Home</h1>
      </S.Container>
      <Newsletter />
    </>
  );
};

export default Home;
