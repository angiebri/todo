import Button from '../Items/Button'
import { MdExitToApp } from 'react-icons/md'
import { Link } from 'react-router-dom'

// Тег компонента следую переносить на новую строчку
// Я бы еще добавил правило на максимальную длину строчки (80 или 100)
const Login = () => {

    return (
        <div className='py-10 w-80 h-80 mx-auto flex place-content-between'>
            <h1 className='text-2xl font-bold text-center mb-10 text-white w-4/5 mx-auto mt-5'>Todo</h1>
            <div className='flex items-center'>
                <Link to='/'>
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

export default Login
