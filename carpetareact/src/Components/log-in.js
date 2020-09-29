import React from 'react';
import './log-in.css';
import {Form, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Login = () => {
    return (
        <>
        <div classNames="container">
        <Form>
            <Form.Group>
                <Form.Label className="label">Correo Electronico</Form.Label>
                <Form.Control type="email" placeholder="Ingresar Correo" />
                <Form.Text className="text-muted">
                    Nunca compartiremos tu informacion con nadie!
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" placeholder="Contraseña" />
            </Form.Group>
            <Button variant="dark" type="submit">
                Enviar
            </Button>
        </Form>
        <small className="small">No tienes cuenta? </small>
        <small className="small"><Link to="/registro">Registrate Aqui!</Link></small>
        </div>
        </>
    );
}

export default Login;

