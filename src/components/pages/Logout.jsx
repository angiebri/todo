import { useNavigate } from 'react-router-dom'
import { auth } from '../../firebaseConfig'
import { signOut } from 'firebase/auth'
import { MdExitToApp } from 'react-icons/md'
import Button from '../Items/Button'

export const Logout = () => {
    const navigate = useNavigate()

    const onLogout = () => {
        signOut(auth)
            .then(() => {
                navigate('/todo')
            })
            .catch((err) => {
                alert(err.message)
            })
    }

    return (
        <Button
            icon={<MdExitToApp size={25} className='text-pink-400' />}
            onClick={onLogout}
        />
    )
}
