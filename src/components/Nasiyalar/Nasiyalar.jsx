import React from 'react';
import { AddDailyInfo, Login, LoginContainer, News, Position, Search } from '../Buyurtmalar/KundalikStyle';
import NasiyalarOylik from '../Cards/Nasiyalar/OylikHisobotCard/NasiyalarOylik';
import { Container, NasiyaInfo, Wrapper } from './NasiyalarStyle';

const Nasiyalar = () => {
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

            <Wrapper.Body>
                <Wrapper.BodyLeft>
                    <NasiyaInfo>
                        <NasiyaInfo.Button>sana</NasiyaInfo.Button>
                        <NasiyaInfo.Button>summa</NasiyaInfo.Button>
                        <NasiyaInfo.Button>mijoz ismi</NasiyaInfo.Button>
                        <NasiyaInfo.Button>masʼul shaxs</NasiyaInfo.Button>
                        <NasiyaInfo.Button>to'langan</NasiyaInfo.Button>
                        <NasiyaInfo.Button>qoldiq</NasiyaInfo.Button>
                        <NasiyaInfo.Button>telefon</NasiyaInfo.Button>
                        <NasiyaInfo.Button>manzil</NasiyaInfo.Button>
                    </NasiyaInfo>
                </Wrapper.BodyLeft>
                <Wrapper.BodyRight>
                    <p>Umumiy Qarzdorlik</p>
                <NasiyalarOylik />
                
                </Wrapper.BodyRight>
            </Wrapper.Body>
            </Wrapper>
      </Container>
  )
};

export default Nasiyalar;
