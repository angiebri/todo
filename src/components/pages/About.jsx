import React from 'react'
import { Logout } from '../pages/Logout'

const About = () => {
    return (
        <div className='flex items-center justify-between mt-4 p-2 w-full'>
            <div></div>
            <h1 className='text-white '>
                Это приложение создано в качестве обучения
            </h1>
            <Logout />
        </div>
    )
}

export default About
