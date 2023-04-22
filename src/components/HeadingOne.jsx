import React from 'react';
import PropTypes from 'prop-types';

function HeadingOne(props){
    return <h1>{props.texto}</h1>
}

/* Validando los props que debo recibir */
HeadingOne.propTypes = {
    texto: PropTypes.string.isRequired
}

export default HeadingOne;