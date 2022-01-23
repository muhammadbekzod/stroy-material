import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const Wrapper = styled.div`
display: flex;
flex-direction: column;

`
Wrapper.Nav = styled.div`
display: flex;
align-items: center;
height: 10vh;
width: 82vw;
padding-left: 2vw;
justify-content: space-between;
`


Wrapper.NavRight = styled.div`
display: flex;
height: 60px;
width: 220px;
justify-content: space-between;
align-items: center;
`

Wrapper.Body = styled.div`
display: flex;
width: 100%;
padding: 30px;
`

Wrapper.BodyLeft = styled.div`  
width: 75%;
padding-right: 30px;
`

Wrapper.BodyRight = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

width: 25%;
p{
    font-size: 20px;
font-weight: 500;
margin-bottom: 20px;
}
`
export const NasiyaInfo = styled.div`
display: flex;
justify-content: space-between;
align-items: center;

`

NasiyaInfo.Button = styled.button`
display: flex;
cursor: pointer;
align-items: center;
justify-content: center;
background: white;
height: 40px;
font-size: 16px;
padding:0 20px;
/* border-color: white; */
border: 1px solid lightgray;
box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.06);
border-radius: 4px;
:hover{
    background: #3e8e41;
}
:active {
  background-color: #3e8e41;
  transform: translateY(4px);
}
`