import React, { useState } from 'react'
import PropTypes from 'prop-types'

const CounterApp = ({ value = 0 }) => {

    const [ counter, setCounter ] = useState( value ); // []
    

    // handleAdd
    const handleAdd = () => {
        setCounter( counter + 1);
        // setCounter( (c) => c + 1 );
    }

    const handleSubtract = () => setCounter( counter - 1);
    
    const handleReset = () => setCounter( value );


    return (
        <>
            <h1>CounterApp</h1>
            <h2> { counter } </h2>

            <button onclick={ handleAdd }>+1</button>
            <button onclick={ handleReset }>Reset</button>
            <button onclick={ handleSubtract }>-1</button>
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number
}

export default CounterApp;


