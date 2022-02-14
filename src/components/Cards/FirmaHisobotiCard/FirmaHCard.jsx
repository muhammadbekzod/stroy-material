import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const FirmaHCard = () => {
  return (
    <Container>
         <Wrapper>
         <Wrapper.Title>
          Jami
         </Wrapper.Title>
         <Wrapper.Title sum>
             10.500.000
         </Wrapper.Title>
         <Wrapper.Title>
             1130
         </Wrapper.Title>
         <Wrapper.Title br>
          
         </Wrapper.Title>
        </Wrapper>
        <Wrapper>
         <Link to="/firmalarhisoboti/:id">
             Dusel Abror Aka
         </Link>
         <Wrapper.Title sum>
             2.500.000
         </Wrapper.Title>
         <Wrapper.Title>
             130
         </Wrapper.Title>
         <Wrapper.Title br>
            13/02/2021
         </Wrapper.Title>
        </Wrapper>
        <Wrapper>
         <Wrapper.Title>
            Akfa Asalxon
         </Wrapper.Title>
         <Wrapper.Title sum>
             1.500.000
         </Wrapper.Title>
         <Wrapper.Title>
             0
         </Wrapper.Title>
         <Wrapper.Title br>
            13/02/2021
         </Wrapper.Title>
        </Wrapper>
        <Wrapper>
         <Wrapper.Title>
             Epa Ulug'bek
         </Wrapper.Title>
         <Wrapper.Title sum>
           0
         </Wrapper.Title>
         <Wrapper.Title>
           0
         </Wrapper.Title>
         <Wrapper.Title br>
            0
         </Wrapper.Title>
        </Wrapper>
    </Container>
  )
};


export const Container = styled.div`
display: flex;
flex-direction: column;
margin-top: 30px;
`

export const Wrapper = styled.div`
cursor: pointer;
display: flex;
width: 100%;
height: 40px;
border: 1px solid gray;
background-color: white;
box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.06);
:hover{
    background-color: #3b873b ;
}
`

Wrapper.Title = styled.div`
display: flex;
padding-left: 10px;
align-items: center;
border-right: 2px solid gray;
width: 230px;
width: ${({sum})=> (sum) ? "250px" : 'none'};
border-right: ${({br})=> (br) ? "none" : '2px solid gray;'};
`

export const Link = styled(NavLink)`
`

export default FirmaHCard;
