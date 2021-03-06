import React from 'react';
import { Login, LoginContainer, News, Position, Search } from '../Buyurtmalar/KundalikStyle';

import { AddtoNasiya, Container, NasiyaInfo, Wrapper } from './NasiyalarStyle';


 export const NasiyaBulimi = () => {
  return (

<>
  <Container>
           <Wrapper>
       <Wrapper.Nav>
    
                <Search className="placeholder: 'Qidiruv'"/>
                <AddtoNasiya to="/nasiyaform">Ma'lumot qo'shish</AddtoNasiya>
                <Wrapper.NavRight>
                    <a href="https://t.me/+e9_6nlmX-fg3NmRl">
                  <News href="https://t.me/+e9_6nlmX-fg3NmRl">Yangiliklar</News>
                  </a>
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
     
                    
    </Wrapper.BodyRight>
     </Wrapper.Body>
            </Wrapper>
         </Container>
</>
      )
    };

export default NasiyaBulimi;
