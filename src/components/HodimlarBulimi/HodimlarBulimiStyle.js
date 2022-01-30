import styled from "styled-components";
import menejer from '../../img/boshqaruvchi.jpeg';
export const Container = styled.div`
display: flex;
flex-direction: column;
width: 100%;
margin: 30px;
h1{
    margin-top: 30px;
}
`
Container.Header = styled.div`
display: flex;
width: 95%;
justify-content: space-between;
`

export const WrapperMain = styled.div`
margin-top: 50px;
width: 100%;
display: grid;
grid-template-areas: 'a a a a';
gap: 20px;

`

export const Wrapper = styled.div`
cursor: pointer;
display: flex;
flex-direction: column;
width: 300px;
height: 400px;
background-color: white;
border-radius: 10px;
:hover{
   
    box-shadow: 15px 15px 20px 5px lightgray;
}
`

Wrapper.Img = styled.div`
display: flex;
height: 250px;
background-position: center;
background-image: url(${menejer});
background-size: cover;
border-top-right-radius: 10px;
border-top-left-radius: 10px;
background-image :${({extra})=>(extra ? 'none' : '')};
border :${({extra})=>(extra ? '1px solid black' : '')};
`

Wrapper.Name = styled.div`
display: flex;
justify-content: center;
font-size: 26px;
font-weight: 500;

`

Wrapper.Position = styled.div`
display: flex;
justify-content: center;
font-size: 25px;
font-weight: 400;
`

Wrapper.Date = styled.div`
display: flex;
justify-content: center;
font-size: 22px;
font-weight: 500;
`

Wrapper.Title = styled.div`
display: flex;
justify-content: center;
color: gray;
font-size: 14px;
`