import React from 'react';
import HeadingOne from './components/HeadingOne';
import HeadingTwo from './components/HeadingTwo';
import Paragraph from './components/Paragraph';


const App = () => {

    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
                <div class="container px-4">
                    <a class="navbar-brand" href="#page-top">Start Bootstrap</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                    <div class="collapse navbar-collapse" id="navbarResponsive">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item"><a class="nav-link" href="#about">About</a></li>
                            <li class="nav-item"><a class="nav-link" href="#services">Services</a></li>
                            <li class="nav-item"><a class="nav-link" href="#contact">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="info mx-auto w-75">
                <HeadingOne texto={"Texto 1"} />
                <HeadingOne texto={"Texto 2"} />
                <HeadingOne texto={"Texto 3"} />
                <HeadingOne texto={"Texto 4"} />
                <HeadingOne texto={"Texto 5"} />
                <HeadingOne texto={"Hola Mundo"} />
                <HeadingTwo style={{ color: 'red' }}>
                    Hola Jack
                </HeadingTwo>
                <Paragraph name={"John"} lastname={"Doe"} age={4000} single={true} />
                <Paragraph name={"Jane"} age={39} single={false} />
            </div>
        </>
    )

}

export default App;