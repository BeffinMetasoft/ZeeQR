import React from 'react'
import spinner from '../../assests/spinner.gif'

function Spinner() {
    return (
        <div >
            <div className="fp-container">
            <img src={spinner} className="fp-loader" alt="loading" />
        </div>
            
        </div>
    )
}

export default Spinner