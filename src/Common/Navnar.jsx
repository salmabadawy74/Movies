import React from 'react'
import {NavLink,Link} from 'react-router-dom'


const Navnar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to='/' >Vidly</Link>
    <ul className="navbar-nav">
                <NavLink className='nav-item nav-link' to='/'>Movies</NavLink>
                <NavLink className='nav-item nav-link' to='/customers'>Customers</NavLink>
                <NavLink className='nav-item nav-link' to='/rental'>Rental</NavLink>
                <NavLink className='nav-link nav-item' to='/register' >Register</NavLink>
    </ul>
</nav>
    )
}

export default Navnar
