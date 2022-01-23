import React from 'react';
import KCard from '../Cards/KundalikCard/KCard';

import { AddDailyInfo, Container, Login, LoginContainer, News, Position, Search, Wrapper } from './KundalikStyle';

export const Kundalik = () => {
  // const [active, setActive] = useState(true);
  return (
    <Container>
        <Wrapper>
          <Wrapper.Nav>
            <Search className="placeholder: 'Qidiruv'"/>
            <AddDailyInfo>Hisobot Qo'shish</AddDailyInfo>
            <Wrapper.NavRight>
              <News>Yangiliklar</News>
              <LoginContainer>
              <Login>Yusufbek</Login>
              <Position>manager</Position>
              </LoginContainer>
            </Wrapper.NavRight>
          </Wrapper.Nav>
   
          <KCard />
        </Wrapper>
    </Container>
  );
};

export default Kundalik;
