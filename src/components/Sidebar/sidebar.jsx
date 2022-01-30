import React, { useEffect, useState } from 'react';
import {
  Container,
  Header,
  IconWrapper,
  Link,
  Logout,
  Wrapper,
} from './style';
import { ReactComponent as Chiqish } from '../../assets/icons/logout.svg';
import { sidebar } from '../../utils/sidebar';
import { useLocation, useNavigate } from 'react-router-dom';



export const Sidebar = () => {
  const [active, setActive] = useState('/');
  const navigate = useNavigate()
  const location = useLocation()
  useEffect(()=>{
    setActive(location?.pathname)
  },[location?.pathname])
  return (
    <Container>
      <Header>
        <Header.Logo onClick={()=>navigate('/kundalik')} />
        <Wrapper>
          <Wrapper.Title>Stroy Material</Wrapper.Title>
          <Wrapper.Desc>Firma Hisoboti</Wrapper.Desc>
        </Wrapper>
      </Header>
      <Wrapper left>
        {sidebar.map(({ v, title, Icon }) => (
          <Link key={v.id} onClick={() => setActive (v.path)} active={active === v.path ? "active" : null} to={v.path}>{v.title}
            <IconWrapper>
              <Icon />
            </IconWrapper>
            {title}
          </Link>
        ))}
        <Logout>
          <IconWrapper>
            <Chiqish />
          </IconWrapper>
          Chiqish
        </Logout>
      </Wrapper>
    </Container>
  );
};

export default Sidebar;