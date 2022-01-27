import styled from "styled-components";


export const Main = styled.div`

display: flex;
margin-top: 3vh;
margin-left: 2vw;

`
export const Container = styled.div`
display: flex;
flex-direction: column;
`

export const Wrapper = styled.div`
display: flex;

`
Wrapper.Month = styled.div`

cursor: pointer;
display: flex;
justify-content: space-between;
align-items: center;
text-align: center;

display: flex;
height: 6vh;
width: 60vw;

p{
    display: flex;
    background: #FFFFFF;
    align-items: center;
    height: 4vh;
    border: 1px solid lightgray;
    box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.06);
    border-radius: 4px;
    padding: 0 1vw;
:hover{
    background: #3e8e41;
}
:active {
  background-color: #3e8e41;
  transform: translateY(4px);
}
}
`

export const Card = styled.div`
display: flex;
background: #FFFFFF;
width: 60vw;
height: 25vh;
box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.14);
border-radius: 4px;
margin-bottom: 3vh;
`

export const Graph = styled.img`
width: 22vw;

`
export const Daily = styled.img`
width: 22vw;
`
Container.Right = styled.div`
display: flex;
flex-direction: column;
margin-left:0.5vw;
`