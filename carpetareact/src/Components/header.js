import React from 'react';
import { Navbar, Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <>
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Busca Empleos RD</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Link to="/">
                            <Nav.Link href="#home">Inicio</Nav.Link>
                        </Link>
                        <Link to="/login">
                            <Nav.Link href="#login">LogIn</Nav.Link>
                        </Link>
                        <Link to="/registro">
                        <Nav.Link href="#registrate">Registrate</Nav.Link>
                        </Link>
                        <Link to="/sobreNosotros">
                        <Nav.Link href="#sobreNosotros">Sobre Nosotros!</Nav.Link>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
        </Navbar>
        </>
    );
}

export default Header;