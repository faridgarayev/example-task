import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <nav className='nav'>
            <label className="logo">Logo</label>
            <ul className='links'>
                <li>
                    <NavLink className='link' to='/'>Home</NavLink>
                </li>
                <li>
                    <NavLink className='link' to='/order'>Orders</NavLink>
                </li>
                <li>
                    <NavLink className='link' to='/createorder'>Create Order</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Header