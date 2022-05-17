/* eslint-disable */
import styled from 'styled-components';

const FooterColumn = styled.ul`
  width: 33.3%;
  list-style-type: none;
  
  &:not(:last-child) {
    margin-right: 16px;
  }
  
  a {
    color:#FFFFFF;
    font-size: 20px;
    text-decoration: none;
  }
  
  li {
    &:not(:last-child) {
      margin-bottom: 24px;
    }
  }
`;

function LinkColumn({arrLinks}) {
    return <FooterColumn>
        {arrLinks.map((link, index) => {

                return <li style={index === 0 ? {fontWeight: 'bold'} : null}
                           key={index}>
                    <a href="#">{link}</a>
                </li>
            }
        )}
    </FooterColumn>
}

export default LinkColumn