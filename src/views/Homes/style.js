import styled from 'styled-components';

export const ContainerBack = styled.div`
  background-color: ${(props) => props.theme.hotelSection.hotelBg};
  max-height: 828px;
  margin: 0 auto;
`;

export const Section = styled.div`
  padding: 120px 104px;
`;

export const Container = styled.div`
  background-color: ${(props) => props.theme.hotelSection.hotelBg};
  max-width: 1232px;
  margin: 0 auto;
  box-sizing: content-box;
  position: relative;
  overflow: hidden;
`;

export const HeaderText = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  
  &:hover:after {
    position: absolute;
    content: "";
    bottom: -20px;
    background: #F5BD41;
    height: 4px;
    width: 100px;
    margin: 0 auto;
  }
`;


