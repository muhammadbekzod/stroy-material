import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
export const Container = styled.div`
color: white;
  display: flex;
  flex-direction: column;
  width: 300px;
  min-width: 300px;
  height: 100vh;
  padding-top: 30px;
  background: #0c0766;
  position: sticky;
  top: 0;
`;

export const Header = styled.div`
  display: flex;
  padding: 0 24px;
  height: 100px;
  align-items: center;
  margin-bottom: 50px;
`;

Header.Logo = styled.img`
  border:1px solid black;
  width: 70px;
  height: 70px;
  margin-left: 20px;
  margin-right: 20px;
  border-radius: 50%;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 24px;
  height: ${({ left }) => left && '100%'};
`;

Wrapper.Title = styled.div`
  font-family: SFProDisplay bold;
  font-size: 16px;
  line-height: 19px;
  color: silver;
`;

Wrapper.Desc = styled.div`
  font-family: SFProDisplay;
  font-size: 12px;
  line-height: 14px;
  color: silver;
  mix-blend-mode: normal;
  opacity: 0.5;
`;

export const Link = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  width: 100%;
  padding: 10px 40px;
  color: silver;
  margin-bottom: 10px;
  border-radius: 0px 6px 6px 0px;
  transition: all 0.3s;
  text-decoration: none;
  
width: ${({form})=>(form ?'0' :'')};
:hover{
  border: none;
  text-decoration: none;
}
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background: #f6f6f6;
  border-radius: 6px;
  margin-right: 10px;
`;

export const activeStyle = {
  background: '#ff8001',
  color: 'white',
};

export const Logout = styled.div`
  display: flex;
  align-items: center;
  margin-top: auto;
  padding-left: 40px;
  font-size: 16px;
  line-height: 19px;
  color: silver;
  cursor: pointer;
  margin-bottom: 50px;
`;