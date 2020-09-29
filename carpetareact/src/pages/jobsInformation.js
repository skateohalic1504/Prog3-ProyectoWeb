import React from 'react';
import { Jumbotron, Container, Button } from 'react-bootstrap';
import Header from '../Components/header';
import './jobsinformation.css';

const JobInformation = () => {
    return (
        <>
        <Header></Header>
        <div className="contenido">
        <Jumbotron fluid>
            <Container>
                <h1>Titulo de Anuncio</h1>
            </Container>
        </Jumbotron>
        <div className="cards">
            <h5>Descripcion:</h5>
            <section className="section">
                Aqui va todo lo relacionado al trabajo, la descripcion del
                trabajo sueldo, al igaul que las responsabilidades que 
                tienen este trabajo
            </section>
            <Button className="button1" variant="outline-primary">Aplicar</Button>
        </div>
        </div>
        </>
    );
}

export default JobInformation;