import {
  Container,
  HeaderContainer,
  LogoContainer,
  LogoImgContainer,
  NavContainer,
  SNavLink,
  Catalog,
  Favorite,
} from './Header.styled';

import Logotype from '../../img/logo.png';

const Header = () => {
  
  return (
    
      <Container>
        <HeaderContainer>
          <LogoContainer to="/">
            <LogoImgContainer>
              <img src={Logotype} alt="Logotype" />
            </LogoImgContainer>
            
          </LogoContainer>
          
            
            <NavContainer>
              <SNavLink to={'/catalog'}>
                <Catalog />
                Catalog
              </SNavLink>
              <SNavLink to={'/favorite'}>
                <Favorite />
                Favorite
              </SNavLink>
            </NavContainer>
        
        </HeaderContainer>
       
      </Container>
   
  );
};

export default Header;
