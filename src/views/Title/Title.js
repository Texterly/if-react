/* eslint-disable */
import styled from 'styled-components';

const TextPrimary = styled.p`
  font-family: "Roboto", "Arial", sans-serif;
  font-size: 40px;
  font-weight: 400;
`;

function Title({text}) {

    return <TextPrimary>{text}</TextPrimary>
}

export default Title;