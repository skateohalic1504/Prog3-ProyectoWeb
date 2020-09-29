import React from 'react';
import {Card, Button, InputGroup, FormControl, Dropdown} from 'react-bootstrap';
import './cards.css';

const Cards = () => {
    return(
        <>
        <div className="cards">
        <Card className="card" style={{ width: '18rem' }}>
            <Card.Img className="pic" variant="top" src="/img/profile.jpg" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button variant="outline-dark">Go somewhere</Button>
            </Card.Body>
        </Card>
        
        <Card className="card" style={{ width: '18rem' }}>
            <Card.Img className="pic" variant="top" src="/img/profile.jpg" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button variant="outline-dark">Go somewhere</Button>
            </Card.Body>
        </Card>
        </div>
        </>
    );
}

export default Cards;