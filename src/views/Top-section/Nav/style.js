import styled from 'styled-components';

export const Triphouse = styled.div`
  max-width: 1232px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`;

export const TriphouseLogo = styled.svg`
  display: flex;
`;

export const LinkHeader =styled.div`
  display: flex;
  align-items: center;
`;

export const NavLink = styled.div`
  display: flex;
  
  div {
    padding-right: 24px;
  }
`;

export const TriphouseText = styled.div`
  color: #FFFFFF;
  font-family: 'Roboto', sans-serif;
  font-size: 24px;
  font-weight: 400;
  
  p{
    position: relative;
    
    &:hover:after {
      position: absolute;
      content: "";
      bottom: -12px;
      left: 0;
      right: 0;
      background: #F5BD41;
      height: 4px;
      width: 84%;
      display: block;
      margin: 0 auto;
    }
  }
`;

export const NavPicture = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  
  div {
    padding-left: 24px;
    
    &:nth-child(3) {
      display: none;
    }
  }
`;

export const NavPicMenu = styled.svg`
  display: none;
`;

export const NavPicNight = styled.svg`
  fill: ${(props) => props.theme.themeIconFill};
  //fill: #FFFFFF;
  width: 30px;
  height: 30px;
  margin-right: 24px;
  cursor: pointer;
`;

