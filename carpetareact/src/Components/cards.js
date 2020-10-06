import React from 'react';
import {Card} from 'react-bootstrap';
import './cards.css';

const Cards = () => {
    return(
        <>
        <div className="cards">
        <Card className="card" style={{ width: '18rem' }}>
            <Card.Img className="pic" variant="top" src="/img/profile.jpg" />
            <Card.Body>
                <Card.Title>Eddy Vicente</Card.Title>
                <Card.Text>
                <ul className="id">
                    <li>2016-4262</li>
                    <li>Base de Datos</li>
                    <li>20164262@itla.edu.do</li>
                </ul>
                </Card.Text>
            </Card.Body>
        </Card>
        
        <Card className="card" style={{ width: '18rem' }}>
            <Card.Img className="pic" variant="top" src="/img/10.jpg" />
            <Card.Body>
                <Card.Title>Jeffrey Ortiz</Card.Title>
                <Card.Text>
                <ul className="id">
                    <li>2017-4893</li>
                    <li>Front-End</li>
                    <li>20174893@itla.edu.do</li>
                </ul>
                </Card.Text>
            </Card.Body>
        </Card>

        <Card className="card" style={{ width: '18rem' }}>
            <Card.Img className="pic" variant="top" src="/img/1.jpg" />
            <Card.Body>
                <Card.Title>Alfredo Linarez</Card.Title>
                <Card.Text>
                <ul className="id">
                    <li>2017-4800</li>
                    <li>Front-End</li>
                    <li>20174800@itla.edu.do</li>
                </ul>
                </Card.Text>
            </Card.Body>
        </Card>

        <Card className="card" style={{ width: '18rem' }}>
            <Card.Img className="pic" variant="top" src="/img/3.jpg" />
            <Card.Body>
                <Card.Title>Wilfred Medina</Card.Title>
                <Card.Text>
                <ul className="id">
                    <li>N/A</li>
                    <li>Base de Datos</li>
                    <li>@itla.edu.do</li>
                </ul>
                </Card.Text>
            </Card.Body>
        </Card>

        <Card className="card" style={{ width: '18rem' }}>
            <Card.Img className="pic" variant="top" src="/img/4.jpg" />
            <Card.Body>
                <Card.Title>Darlin Santana</Card.Title>
                <Card.Text>
                <ul className="id">
                    <li>2017-5032</li>
                    <li>Back-End</li>
                    <li>20175032@itla.edu.do</li>
                </ul>
                </Card.Text>
            </Card.Body>
        </Card>

        <Card className="card" style={{ width: '18rem' }}>
            <Card.Img className="pic" variant="top" src="/img/2.jpg" />
            <Card.Body>
                <Card.Title>Erick Brito</Card.Title>
                <Card.Text>
                <ul className="id">
                    <li>N/A</li>
                    <li>Back-End</li>
                    <li>@itla.edu.do</li>
                </ul>
                </Card.Text>
            </Card.Body>
        </Card>
        </div>
        </>
    );
}

export default Cards;