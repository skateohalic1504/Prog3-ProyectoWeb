import React from 'react';
import Bootstrap from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './footer.css';

const Footer = () => {
    return (
        <>
        <div className="container1">
            <div className="footerContent">
                <ul>
                <h4>Contactos</h4>
                <hr />
                    <Link to="/"><li>Correo</li></Link>
                    <Link to="/"><li>Sobre Nosotros</li></Link>
                    <Link to="/"><li>Github</li></Link>
                </ul>
            </div>
            <div className="footerContent">
                <h4></h4>
            </div>
        </div>
        </>
    );
}

export default Footer;