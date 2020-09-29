import React from 'react';
import './hero.css';
import {Carousel, Button, Jumbotron} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Hello = () => {
    return (
        <>
            <Carousel>
                {/* first slide */}
                <Carousel.Item>
                    <Jumbotron className="jumbo">
                        <h1 className="jumboText">Tu Oportunidad Para Un Nuevo Empleo</h1>
                        <p className="jumboText">
                            Busca Empleos es un proyecto ambicioso, que tiene como objetivo
                            ayudar a todo dominicano encontrar su trabajo ideal!
                            <br />
                            Asi que.... Que esperas Unete a nuestra familia!
                            <br />
                            <br />
                            Ya seas Empleador o Empleado, Encontraras lo que estas buscando.
                        </p>
                        <p className="jumboText">
                            <Link to="./registro">
                            <Button variant="outline-light">Registrate</Button>
                            </Link>
                        </p>
                    </Jumbotron>
                </Carousel.Item>

                {/* second slide */}
                <Carousel.Item>
                    <Jumbotron className="jumbo">
                    <h1 className="jumboText">¿Cuantas gastas en pasaje regando curriculums? </h1>
                        <p className="jumboText">
                            ¡Tranquilo que con “Busca Empleos RD” se terminó eso!
                            <br />
                            ¡Todas tus empresas favoritas a ley de un Click!
                            <br />
                            <br />
                            Ya seas Empleador o Empleado, Encontraras lo que estas buscando.
                        </p>
                        <p className="jumboText">
                            <Link to="./login">
                            <Button variant="outline-light">Login</Button>
                            </Link>
                        </p>
                    </Jumbotron>
                </Carousel.Item>
            </Carousel>
        </>
    );
}

export default Hello;