import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faExclamation} from '@fortawesome/free-solid-svg-icons'

const Error = () => {
    return(
        <div className="error">
            <div className="error__title">
                <FontAwesomeIcon className="error__title__icon" icon={faExclamation} color="red" size="5x"/>
                <h1>Ups ha ocurrido un error</h1>
            </div>
            <div className="error__description">
                <p>Ha sucedido un error, por favor vuelva a intentarlo más tarde.</p>
            </div>
        </div>
    )
}

export default Error