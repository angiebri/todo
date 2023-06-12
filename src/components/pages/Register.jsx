import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
    browserLocalPersistence,
    createUserWithEmailAndPassword,
    setPersistence,
} from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'
import { auth, database } from '../../firebaseConfig'
import Button from '../Items/Button'
import Navbar from '../Items/Navbar'

export const Register = () => {
    const [err, setErr] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const onRegister = (e) => {
        e.preventDefault()

        const formData = new FormData(e.target)

        const email = formData.get('email')
        const password = formData.get('password')
        const repeatPassword = formData.get('repeatPassword')

        if (email === '' || password === '' || repeatPassword === '') {
            setErr('Please fill all fields!')
            return
        }

        if (password !== repeatPassword) {
            setErr('Password and confirmation password dont match')
            return
        }

        setLoading(true)
        setPersistence(auth, browserLocalPersistence).then(() => {
            createUserWithEmailAndPassword(auth, email, password)
                .then((res) => {
                    setDoc(doc(database, 'users', res.user.uid), {
                        email,
                        uid: res.user.uid,
                    })
                    navigate('/todo')
                    setLoading(false)
                })
                .catch((err) => {
                    setErr(err.message)
                    setLoading(false)
                })
        })
    }

    return (
        <div>
            <div className='y-10 bg-zinc-900 text-white w-4/5 mx-auto mt-4'>
                <Navbar todo='Todo' exit='/todo' />
                <div className='w-80 h-90 mx-auto flex place-content-between'>
                    <form
                        onSubmit={onRegister}
                        className='flex-row items-between justify-between mb-4 rounded-2xl bg-zinc-800 p-5 w-full'
                    >
                        <div className='flex items-center justify-between mb-4 rounded-2xl border-zinc-700 border-2 px-5 py-3 w-full'>
                            <input
                                className='bg-transparent w-full border-none outline-none'
                                type='text'
                                placeholder='Email'
                                id='email'
                                name='email'
                            />
                        </div>
                        <div className='flex items-center justify-between mb-4 rounded-2xl border-zinc-700 border-2 px-5 py-3 w-full'>
                            <input
                                className='bg-transparent w-full border-none outline-none'
                                type='password'
                                placeholder='Password'
                                id='password'
                                name='password'
                            ></input>
                        </div>
                        <div className='flex items-center justify-between mb-8 rounded-2xl border-zinc-700 border-2 px-5 py-3 w-full'>
                            <input
                                className='bg-transparent w-full border-none outline-none'
                                type='password'
                                placeholder='Repeat Password'
                                id='repeatPassword'
                                name='repeatPassword'
                            ></input>
                        </div>
                        <Button
                            text={loading ? 'Loading...' : 'Sing In'}
                            className='text-white flex items-center justify-center mb-4 rounded-2xl bg-zinc-700 p-2 w-full  hover:bg-pink-500 transition-colors ease-in-out duration-300'
                        />
                        <p className='text-pink-500'>{err}</p>

                        <div className='flex place-content-between'>
                            <p>Have an account?</p>
                            <Link to='/todo/login'>
                                <Button
                                    text='Log In'
                                    className='text-white  hover:text-pink-500 transition-colors ease-in-out duration-300'
                                />
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
