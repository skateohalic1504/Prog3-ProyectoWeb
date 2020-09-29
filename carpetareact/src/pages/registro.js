import React from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import Header from '../Components/header';
import './registro.css';

const Registro = () => {
    return (
        <>
        <Header></Header>

        <h1>Registro!</h1>
            <small>Un pequeño paso para un gran futuro!</small>
        <div className="containerRegistro">
        <Form>
            <Form.Row>
                <Col>
                    <Form.Control placeholder="Nombre" />
                </Col>
                <Col>
                    <Form.Control placeholder="Segundo Nombre (Opcional)" />
                </Col>
                <Col>
                    <Form.Control placeholder="Apellido" />
                </Col>
            </Form.Row>
            
            <div className="containerRegistro">
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Correo Electronico</Form.Label>
                    <Form.Control type="email" placeholder="Ingresar Correo" />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" placeholder="Contraseña" />
                </Form.Group>

                <Form.Group controlId="formGridAddress1">
                    <Form.Label>Direccion</Form.Label>
                    <Form.Control placeholder="1234 Main St" />
                </Form.Group>

                <Form.Group controlId="formGridAddress2">
                    <Form.Label>Direccion 2</Form.Label>
                    <Form.Control placeholder="Apartment, studio, or floor" />
                </Form.Group>
                </div>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>Ciudad</Form.Label>
                    <Form.Control />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Provincia</Form.Label>
                    <Form.Control as="select" defaultValue="Escoja...">
                        <option>Escoja...</option>
                        <option>Distrito Nacional</option>
                        <option>Santo Domingo Norte</option>
                        <option>Santo Domingo Este</option>
                        <option>Santo Domingo Oeste</option>
                        <option>Santo Domingo Sur</option>
                    </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Codigo postal</Form.Label>
                    <Form.Control />
                    </Form.Group>
                </Form.Row>

                <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Provincia</Form.Label>
                    <Form.Control as="select" defaultValue="Escoja...">
                        <option>Escoja...</option>
                        <option>FullStack Developer</option>
                        <option>Backend</option>
                        <option>Frontend</option>
                        <option>React</option>
                        <option>C#</option>
                    </Form.Control>
                    </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
        </Form>
        </div>
        </>
    );
}

export default Registro;