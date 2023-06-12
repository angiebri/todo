import { Link } from 'react-router-dom'
import Button from '../Items/Button'
import '../../index.css'

const Home = () => {
    return (
        <div className='py-10 w-80 h-80 mx-auto'>
            <h1 className='text-2xl font-bold text-center mb-10 text-white w-4/5 mx-auto mt-5'>
                Todo
            </h1>
            <form className='flex-row items-between justify-between mb-4 rounded-2xl bg-zinc-800 p-5 w-full'>
                <Link to='/todo/register'>
                    <Button
                        text='Register'
                        className='text-white flex items-center justify-center mb-4 rounded-2xl bg-zinc-900 p-2 w-full  hover:bg-pink-500 transition-colors ease-in-out duration-300'
                    />
                </Link>
                <Link to='/todo/login'>
                    <Button
                        text='Log In'
                        className='text-white flex items-center justify-center mb-4 rounded-2xl bg-zinc-700 p-2 w-full  hover:bg-pink-500 transition-colors ease-in-out duration-300'
                    />
                </Link>
            </form>
            <div className='py-10 w-80 h-80 mx-auto'>
                <Link to='/todo/about'>
                    <Button
                        text='About'
                        className='text-white flex items-center justify-center mb-4 rounded-2xl bg-zinc-800 p-2 w-full  hover:bg-pink-500 transition-colors ease-in-out duration-300'
                    />
                </Link>
            </div>
        </div>
    )
}

export default Home
