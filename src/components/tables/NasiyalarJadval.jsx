import React from 'react';
import styled from 'styled-components';

const NasiyalarJadval = () => {
  return (

    <Container>
        <Wrapper>
            <Wrapper.Con yellow>25.01.21</Wrapper.Con>
            <Wrapper.Con yellow>2.000.000</Wrapper.Con>
            <Wrapper.Con yellow>Alisher</Wrapper.Con>
            <Wrapper.Con yellow>Yusufbek</Wrapper.Con>
            <Wrapper.Con yellow>1.500.000</Wrapper.Con>
            <Wrapper.Con yellow>500.000</Wrapper.Con>
            <Wrapper.Con yellow>90.150-00-00</Wrapper.Con>
            <Wrapper.Con yellow>Davronbek A</Wrapper.Con>
           
        </Wrapper>
        <Wrapper>
            <Wrapper.Con green>25.01.21</Wrapper.Con>
            <Wrapper.Con green>2.000.000</Wrapper.Con>
            <Wrapper.Con green>Alisher</Wrapper.Con>
            <Wrapper.Con green>Yusufbek</Wrapper.Con>
            <Wrapper.Con green>1.500.000</Wrapper.Con>
            <Wrapper.Con green>500.000</Wrapper.Con>
            <Wrapper.Con green>90.150-00-00</Wrapper.Con>
            <Wrapper.Con green>Davronbek A</Wrapper.Con>
           
        </Wrapper>
        <Wrapper>
            <Wrapper.Con red>25.01.21</Wrapper.Con>
            <Wrapper.Con red>2.000.000</Wrapper.Con>
            <Wrapper.Con red>Alisher</Wrapper.Con>
            <Wrapper.Con red>Yusufbek</Wrapper.Con>
            <Wrapper.Con red>1.500.000</Wrapper.Con>
            <Wrapper.Con red>500.000</Wrapper.Con>
            <Wrapper.Con red>90.150-00-00</Wrapper.Con>
            <Wrapper.Con red>Davronbek A</Wrapper.Con>
           
        </Wrapper>
        <Wrapper>
            <Wrapper.Con yellow>25.01.21</Wrapper.Con>
            <Wrapper.Con yellow>2.000.000</Wrapper.Con>
            <Wrapper.Con yellow>Alisher</Wrapper.Con>
            <Wrapper.Con yellow>Yusufbek</Wrapper.Con>
            <Wrapper.Con yellow>1.500.000</Wrapper.Con>
            <Wrapper.Con yellow>500.000</Wrapper.Con>
            <Wrapper.Con yellow>90.150-00-00</Wrapper.Con>
            <Wrapper.Con yellow>Davronbek A</Wrapper.Con>
           
        </Wrapper>
        <Wrapper>
            <Wrapper.Con red>25.01.21</Wrapper.Con>
            <Wrapper.Con red>2.000.000</Wrapper.Con>
            <Wrapper.Con red>Alisher</Wrapper.Con>
            <Wrapper.Con red>Yusufbek</Wrapper.Con>
            <Wrapper.Con red>1.500.000</Wrapper.Con>
            <Wrapper.Con red>500.000</Wrapper.Con>
            <Wrapper.Con red>90.150-00-00</Wrapper.Con>
            <Wrapper.Con red>Davronbek A</Wrapper.Con>
           
        </Wrapper>
        <Wrapper>
            <Wrapper.Con green>25.01.21</Wrapper.Con>
            <Wrapper.Con green>2.000.000</Wrapper.Con>
            <Wrapper.Con green>Alisher</Wrapper.Con>
            <Wrapper.Con green>Yusufbek</Wrapper.Con>
            <Wrapper.Con green>1.500.000</Wrapper.Con>
            <Wrapper.Con green>500.000</Wrapper.Con>
            <Wrapper.Con green>90.150-00-00</Wrapper.Con>
            <Wrapper.Con green>Davronbek A</Wrapper.Con>
           
        </Wrapper>
        
    </Container>
  )
};

export const Container = styled.div`
margin-top: 30px;
/* height: 50px; */
width: 100%;
border: 2px solid gray;
`
export const Wrapper = styled.div`
display: flex;
align-items: center;
text-align: left;
border-bottom: 2px solid gray;
/* justify-content: space-between; */

`
Wrapper.Con = styled.div`
width: 150px;
height: 48px;
display: flex;
text-align: left;
align-items: center;
border-right: 2px solid gray;
background-color: ${({red})=> (red) ? "rgb(232, 0, 0)" : 'none'};

background-color: ${({yellow})=> (yellow) ? "rgb(255, 234, 0)" : 'none'};
background-color: ${({green})=> (green) ? "rgb(0, 170, 0)" : 'none'};
`

export default NasiyalarJadval;
