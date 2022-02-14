import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
width: 100%;
padding: 20px;
`

export const Wrapper = styled.div`
display: flex;

`
Wrapper.Header = styled.div`
display: flex;
width: 100%;
padding-right: 25px;
justify-content: space-between;
h1{
    font-size: 45px;
    margin-left: 100px;
    font-weight: 500;
}
`
Wrapper.NavRight = styled.div`
display: flex;
width: 220px;
justify-content: space-between;
align-items: center;
`
export const ContainerMain = styled.div`
display: flex;
justify-content: space-between;
padding: 30px;
`
Container.Left = styled.div`
display: flex;
flex-direction: column;

`

Container.LeftNav  = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`

Container.NavButton = styled.button`
cursor: pointer;
border: 1px solid lightgray;
width: 230px;
background-color: white;
height: 40px;
font-size: 18px;
:hover{
    background: #3e8e41;
}
:active {
  background-color: #3e8e41;
  transform: translateY(4px);
}
width: ${({sum})=> (sum) ? "250px" : 'none'};
`

Container.Right = styled.div`
display: flex;
border: 1px solid lightgray;
border-radius: 8px;
width: 450px;
height: 1000px;
background-color: white;
margin-left: 15px;

;
`

export const AddDailyInfo = styled(NavLink)`
cursor: pointer;
text-decoration: none;
height: 60px;
width: 220px;
border: 1px solid lightgray;
border-radius: 4px;
font-size: 18px;
display: flex;
justify-content: center;
align-items: center;
background: #ff8001;
box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.06);
background-color: ${({extra})=> (extra) ? "orange" : 'none'};
margin-left: ${({extra})=> (extra) ? "30px" : 'none'};
:hover{
    background: #3e8e41;
}
:active {
  background-color: #3e8e41;
  transform: translateY(4px);
}
`

export const ExtraWrapper = styled.div`
display: flex;
text-decoration: none;
`