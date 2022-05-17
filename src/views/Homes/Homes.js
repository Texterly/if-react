/* eslint-disable */

import Blocks from '../../components/Blocks/Blocks';
import './Homes.css';
import Title from "../Title/Title";
import {Container, ContainerBack, HeaderText, Section} from "./style";

function Homes ({title, data}) {
    return (
        <ContainerBack>
            <Section>
                <Container>
                    <HeaderText>
                        <Title text={title}/>
                    </HeaderText>
                    <Blocks data={data}/>
                </Container>
            </Section>
        </ContainerBack>
    );
}

export default Homes;
