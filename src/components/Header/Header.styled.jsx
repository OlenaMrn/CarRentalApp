import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';


const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #154eed;
`;
const Container = styled.div`
  background-color: white;
  padding: 0px 80px;
  
`;
const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;
  color: #000000;
`;
const LogoImgContainer = styled.div`
  max-width: 60px;
`;



const NavContainer = styled.div`
  display: flex;
  gap: 15px;
  font-family: 'Helvetica', sans-serif;
  font-size: 18px;
  
`;

const SNavLink = styled(NavLink)`
  color: #154eed;

  &.active {
    position: relative;
    color: #D11818;
  
  }

  
`;
const Catalog = styled.div`
  margin-right: 5px;
`;
const Favorite = styled.div`
  margin-right: 5px;
  fill: red;
`;
export {
  Container,
  LogoContainer,
  HeaderContainer,
  Catalog,
  Favorite,
  LogoImgContainer,
  NavContainer,
  SNavLink,
};
