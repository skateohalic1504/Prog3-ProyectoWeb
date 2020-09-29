import React from 'react';
import Header from '../Components/header';
import Cards from '../Components/cards';
import {Jumbotron, Container} from 'react-bootstrap';

const sobreNosotros = () => {
    return (
        <>
        <Header></Header>
        <Jumbotron fluid>
            <Container>
                <h1>Conoce a Los Desarolladores</h1>
            </Container>
        </Jumbotron>
        <Cards></Cards>
        </>
    );
}

export default sobreNosotros;