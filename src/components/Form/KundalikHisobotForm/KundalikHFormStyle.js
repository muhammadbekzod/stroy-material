import styled from "styled-components";

export const Container = styled.div`
padding-top: 100px;
display: flex;
justify-content: center;
align-items: center;
background-color: white;
width: 100%;


`
export const Form = styled.div`
padding: 30px;
display: flex;
align-items: center;
flex-direction: column;
width: 1000px;
border: 2px solid lightgray;
border-radius: 10px;
box-shadow: 2px 10px 20px rgba(0, 0, 0, 0.10);
background-color: white;
h1{
    margin-bottom: 40px;
}
p{
    margin-top: 30px;
    margin-bottom: 0;
}
`
export const Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
/* width: 500px; */
font-size: 18px;
`
export const ButtonWrapper = styled.div`
margin-top: 30px;
display: flex;
align-items: center;
justify-content: space-between;
padding-right: 30px;
`


export const WrapperCon = styled.div`
display: flex;
`

export const WrapperConMini = styled.div`
display: flex;
flex-direction: column; 
margin-right: 30px;
/* display: ${({extra})=>(extra ?'grid' :'')}; */
.form-control{
    width: 300px;
}
`
export const Extracon = styled.div`
display: flex;
width: 100%;
margin-left: ${({extra})=>(extra ?'30px' :'')};
display:  ${({extrawrap})=>(extrawrap ?'grid' :'')};
margin-top:  ${({extrawrap})=>(extrawrap ?'30px' :'')};;
`

export const Button = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100px;
height: 50px;
:hover{
  background: #3e8e41;
  border: none;
  text-decoration: none;
}
:active {
background-color: #3e8e41;
transform: translateY(4px);
}

`

export const AddWrap = styled.button`
cursor: pointer;
margin-top: 20px;
border: 1px solid lightgray;
`