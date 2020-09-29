import React from 'react';
import {Nav, Card, Button, InputGroup, Dropdown, FormControl} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './jobs.css';

const Jobs = () => {
    return (
        <>
        <div className="card">
        <div className="search">
        <InputGroup className="mb-3">
        <Dropdown>
            <Dropdown.Toggle variant="dark" id="dropdown-basic">
                 Categorias
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item href="#accion1">Fullstack</Dropdown.Item>
                <Dropdown.Item href="#accion1">Front End</Dropdown.Item>
                <Dropdown.Item href="#accion1">Back End</Dropdown.Item>
                <Dropdown.Item href="#accion1">React</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
                <FormControl
                placeholder="Buscar"
                aria-label="Buscar"
                aria-describedby="basic-addon1"
                />
            </InputGroup>
        </div>

        <div>
        <Card>
            <Card.Header>
                <Nav variant="tabs" defaultActiveKey="#first">
                <Nav.Item>
                    <Nav.Link href="#first">Descripcion</Nav.Link>
                </Nav.Item>
                <Link to="/">
                <Nav.Item>
                    <Nav.Link href="#link">Mas</Nav.Link>
                </Nav.Item>
                </Link>
                </Nav>
            </Card.Header>
            <Card.Body>
                <Card.Title>Trabajo de X empresa</Card.Title>
                <Card.Text>
                Descripcion breve del trabajo.
                </Card.Text>
                <Link to="/jobsinformation">
                <Button variant="outline-dark">Mas Informacion</Button>
                </Link>
            </Card.Body>
            </Card>
        </div>
        <div>
        <Card>
            <Card.Header>
                <Nav variant="tabs" defaultActiveKey="#first">
                <Nav.Item>
                    <Nav.Link href="#first">Descripcion</Nav.Link>
                </Nav.Item>
                <Link to="/">
                <Nav.Item>
                    <Nav.Link href="#link">Mas</Nav.Link>
                </Nav.Item>
                </Link>
                </Nav>
            </Card.Header>
            <Card.Body>
                <Card.Title>Trabajo de X empresa</Card.Title>
                <Card.Text>
                Descripcion breve del trabajo.
                </Card.Text>
                <Link to="/jobsinformation">
                <Button variant="outline-dark">Mas Informacion</Button>
                </Link>
            </Card.Body>
            </Card>
        </div>
        </div>
        </>
    );
}

export default Jobs;