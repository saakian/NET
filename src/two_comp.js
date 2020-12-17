import React from 'react'
import {Link} from "react-router-dom"

function two_comp() {
    return (
        <div>
            <h1>COMP_TWO</h1>
            <Link to="/"><button>COMP_ONE</button> </Link>
        </div>
    )
}

export default two_comp
