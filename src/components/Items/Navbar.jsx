import React from 'react'
import { Logout } from '../pages/Logout'

const Navbar = ({ todo }) => {
    return (
        <div className='flex place-content-between mb-10'>
            <div></div>
            <h1 className='text-2xl font-bold text-center'>{todo}</h1>
            <Logout />
        </div>
    )
}

export default Navbar
