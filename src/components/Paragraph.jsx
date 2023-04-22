import React from 'react';
import PropTypes from 'prop-types';

function Paragraph(props){
    return <p>Hola, {props.name} {props.lastname}, tienes {props.age} de edad.</p>    
}

Paragraph.propTypes = {
    name: PropTypes.string.isRequired,
    lastname: PropTypes.string,
    age: PropTypes.number.isRequired
} 

export default Paragraph;