import styled from 'styled-components';

export const TopForm = styled.form`
  position: relative;
  border-radius: 8px;
  font-size: 18px;
  line-height: 21px;
  margin-bottom: 118px;
  margin-top: 145px;
`;

export const CityField = styled.div`
  position: relative;
  height: 64px;
  border-radius: 8px;
  background: #FFFFFF;
`;

export const CityInput = styled.input`
  height: 100%;
  min-width: 37.9%;
  outline: none;
  border: 4px solid #F3F3F4;
  border-radius: 8px;
  
  &:hover {
    border-color: #F5BD41;
  }
`;

export const CityFieldButton = styled.svg`
  display: none;
`;

export const CityLabel = styled.label`
  position: absolute;
  left: 24px;
  top: 22px;
  font-weight: 400;
  color: #000000;
  transition: 2s ease all;

  &:focus-within {
    top: -48px;
    color: #FFFFFF;
  }
`;

