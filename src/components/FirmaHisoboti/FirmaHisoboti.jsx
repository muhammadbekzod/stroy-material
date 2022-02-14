import React from 'react';
import {Login, LoginContainer, News, Position } from '../Buyurtmalar/KundalikStyle';
import FirmaHCard from '../Cards/FirmaHisobotiCard/FirmaHCard';
import { AddDailyInfo, Container, ContainerMain, ExtraWrapper, Wrapper } from './FirmaHisobotiStyle';

const FirmaHisoboti = () => {
  return(
      <Container>
          <Wrapper>
            
              <Wrapper.Header>
              <h1>Firmalar Hisoboti!</h1>
              <ExtraWrapper>
              <AddDailyInfo to="/hisobotform">Hisobot Qo'shish</AddDailyInfo>
              </ExtraWrapper>
              <Wrapper.NavRight>
              <a href="https://t.me/+cg_Ri3G0whpmOTIy">
              <News >Telegram</News>
              </a>
              <LoginContainer>
              <Login>Yusufbek</Login>
              <Position>manager</Position>
              </LoginContainer>
              </Wrapper.NavRight>
              </Wrapper.Header>
          </Wrapper>
        <ContainerMain>
        <Container.Left>
            <Container.LeftNav>
                <Container.NavButton>Firma Nomi</Container.NavButton>
                <Container.NavButton sum>So'm</Container.NavButton>
                <Container.NavButton>Qog'oz($)</Container.NavButton>
                <Container.NavButton>To'lov muddati</Container.NavButton>
            </Container.LeftNav>
        <FirmaHCard />
        </Container.Left>
        <Container.Right>
        sad
        </Container.Right>
        </ContainerMain>
      </Container>
  )
};

export default FirmaHisoboti;
