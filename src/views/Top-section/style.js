import styled from 'styled-components';

export const StyledHeader = styled.div`
  background: url(${(props) => props.background});
  background-size: cover;
  position: relative;
  min-height: 100vh;
  width: 100%;
  margin: 0 auto;
  height: 100%;
`;

export const HeaderBackground = styled.div`
  opacity: ${(props) => props.theme.darkLayerOpacity};
  background-color: rgba(18, 18, 18, 0.25);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transition: .5s ease;
`;

export const SectionHeader = styled.div`
  padding: 51px 104px 120px 104px;
`;

export const HeaderPage = styled.div`
  padding-top: 196px;
  color: #FFFFFF;
  max-width: 1232px;
  margin: 0 auto;
  
  h1 {
    font-family: 'Roboto', sans-serif;
    font-size: 50px;
    font-weight: 500;
  }
`;

