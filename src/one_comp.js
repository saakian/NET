import React from 'react'
import {Link} from "react-router-dom"

function one_comp() {
    return (
        <div>
            <h1>COMP_ONE</h1>
            <Link to="/two"> <button>COMP_TWO</button> </Link>
        </div>
    )
}

export default one_comp
