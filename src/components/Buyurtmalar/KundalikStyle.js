import styled from 'styled-components';


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

export const Search = styled.input`
cursor: text;
border: 1px solid lightgray;
box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.06);
border-radius: 4px;
height: 6vh;
width: 40vw;
`

Wrapper.NavRight = styled.div`
display: flex;
height: 60px;
width: 220px;
justify-content: space-between;
align-items: center;
`

export const News = styled.div`
cursor: pointer;
border: 1px solid lightgray;
background: #F7685B;
box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.06);
border-radius: 4px;
display: flex;
justify-content: center;
align-items: center;
height: 60px;
width: 120px;
:hover{
    background: #3e8e41;
}
:active {
  background-color: #3e8e41;
  transform: translateY(4px);
}

`
export const LoginContainer = styled.div`
cursor: pointer;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

export const Login = styled.div`
font-size: 18px;
`

export const Position = styled.div`
font-size: 14px;
`

export const AddDailyInfo = styled.div`
cursor: pointer;
height: 60px;
width: 220px;
border: 1px solid lightgray;
border-radius: 4px;
font-size: 18px;
display: flex;
justify-content: center;
align-items: center;
background: #F7685B;
box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.06);
:hover{
    background: #3e8e41;
}
:active {
  background-color: #3e8e41;
  transform: translateY(4px);
}
`