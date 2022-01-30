import React from 'react';
import { AddDailyInfo, Search } from '../Buyurtmalar/KundalikStyle';
import { Container, Wrapper, WrapperMain } from './HodimlarBulimiStyle';




const HodimlarBulimi = () => {
  return (
    <Container>
       <Container.Header>
        <Search className="placeholder: 'Qidiruv'"/>
        <AddDailyInfo to='/yangihodim'>Yangi Hodim Qo'shish</AddDailyInfo>
        </Container.Header>
        <h1>Hodimlarimiz!</h1>
  
        <WrapperMain>
        <Wrapper>
            <Wrapper.Img />
            <Wrapper.Name>Turg'unov Yusufbek</Wrapper.Name>
            <Wrapper.Position>Boshqaruvchi</Wrapper.Position>
            <Wrapper.Title>ish boshlangan sana</Wrapper.Title>
            <Wrapper.Date>
                10/10/21
            </Wrapper.Date>
        </Wrapper>
        <Wrapper>
            <Wrapper.Img extra />
            <Wrapper.Name>Bagaliev Begali</Wrapper.Name>
            <Wrapper.Position>Hodim</Wrapper.Position>
            <Wrapper.Title>ish boshlangan sana</Wrapper.Title>
            <Wrapper.Date>
                10/11/21
            </Wrapper.Date>
        </Wrapper>
        <Wrapper>
            <Wrapper.Img extra />
            <Wrapper.Name>Bagaliev Bekzod</Wrapper.Name>
            <Wrapper.Position>Omborchi</Wrapper.Position>
            <Wrapper.Title>ish boshlangan sana</Wrapper.Title>
            <Wrapper.Date>
                10/11/21
            </Wrapper.Date>
        </Wrapper>
        <Wrapper>
            <Wrapper.Img extra />
            <Wrapper.Name>Sodiqov Alisher</Wrapper.Name>
            <Wrapper.Position>Hodim</Wrapper.Position>
            <Wrapper.Title>ish boshlangan sana</Wrapper.Title>
            <Wrapper.Date>
                10/11/21
            </Wrapper.Date>
        </Wrapper>
        <Wrapper>
            <Wrapper.Img extra />
            <Wrapper.Name>Alimov Ravshanjon</Wrapper.Name>
            <Wrapper.Position>Hodim</Wrapper.Position>
            <Wrapper.Title>ish boshlangan sana</Wrapper.Title>
            <Wrapper.Date>
                10/11/21
            </Wrapper.Date>
        </Wrapper>
        <Wrapper>
            <Wrapper.Img extra />
            <Wrapper.Name>Rafiqov Nodirjon </Wrapper.Name>
            <Wrapper.Position>Hodim</Wrapper.Position>
            <Wrapper.Title>ish boshlangan sana</Wrapper.Title>
            <Wrapper.Date>
                10/11/21
            </Wrapper.Date>
        </Wrapper>
        <Wrapper>
            <Wrapper.Img extra />
            <Wrapper.Name>Umurzoqov Axadjon</Wrapper.Name>
            <Wrapper.Position>Hodim</Wrapper.Position>
            <Wrapper.Title>ish boshlangan sana</Wrapper.Title>
            <Wrapper.Date>
                10/11/21
            </Wrapper.Date>
        </Wrapper>
        <Wrapper>
            <Wrapper.Img extra />
            <Wrapper.Name>Usmonov Bilolxon</Wrapper.Name>
            <Wrapper.Position>Hodim</Wrapper.Position>
            <Wrapper.Title>ish boshlangan sana</Wrapper.Title>
            <Wrapper.Date>
                10/11/21
            </Wrapper.Date>
        </Wrapper>
        <Wrapper>
            <Wrapper.Img extra />
            <Wrapper.Name>Hakimaxon</Wrapper.Name>
            <Wrapper.Position>Hodim</Wrapper.Position>
            <Wrapper.Title>ish boshlangan sana</Wrapper.Title>
            <Wrapper.Date>
                10/11/21
            </Wrapper.Date>
        </Wrapper>
        </WrapperMain>
    </Container>

  )
};

export default HodimlarBulimi;
