import React from 'react'
import { Link } from 'react-router-dom'
import { MdExitToApp } from 'react-icons/md'

import Button from '../Items/Button'

const About = () => {
    return (
        <div className='flex items-center justify-between mt-4 p-2 w-full'>
            <h1 className='text-white '>
                Это приложение создано в качестве обучения
            </h1>
            <div className='flex items-center'>
                <Link to='/todo'>
                    <Button
                        icon={(
                            <MdExitToApp
                                size={25}
                                className='text-pink-400'
                            />
                        )} 
                    />
                </Link>
            </div>
        </div>
    )
}

export default About
