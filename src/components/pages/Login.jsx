import Button from '../Items/Button'
import { MdExitToApp } from 'react-icons/md'
import { Link, useNavigate } from 'react-router-dom'

import {
    browserLocalPersistence,
    setPersistence,
    signInWithEmailAndPassword,
} from "firebase/auth"
import { auth } from "../../firebaseConfig"
import { useState } from "react"
import Input from '../Items/Input'

const Login = () => {

    const [err, setErr] = useState("")
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const onLogin = (e) => {
        e.preventDefault()

        const formData = new FormData(e.target)

        const email = formData.get("email")
        const password = formData.get("password")

        if (email === "" || password === "") {
            setErr("Please fill all the fields!")
            return
        }

        setLoading(true)
        setPersistence(auth, browserLocalPersistence).then(() => {
            signInWithEmailAndPassword(auth, email, password)
                .then(() => {
                    navigate("/todo/todolist")
                    setLoading(false)
                })
                .catch((err) => {
                    setErr(err.message)
                    setLoading(false)
                })
        })
    }

    return (
        <div className="y-10 bg-zinc-900 text-white w-4/5 mx-auto" >
            <div className='flex place-content-between mb-10'>
                <h1 className='text-2xl font-bold text-center mb-10 text-white w-4/5 mx-auto mt-5'>Todo</h1>
                <div className="flex items-center">
                    <Link to='/todo'>
                        <Button icon={<MdExitToApp size={25} className='text-pink-400' />}></Button>
                    </Link></div>
            </div>
            <div onSubmit={onLogin} className='py-10 w-80 h-80 mx-auto flex place-content-between'>
                <form className='flex-row items-between justify-between mb-4 rounded-2xl bg-zinc-800 p-5 w-full'>
                    <div className='flex items-center justify-between mb-4 rounded-2xl border-zinc-700 border-2 px-5 py-3 w-full'><Input className='bg-transparent w-full border-none outline-none' type="text" placeholder="Email" id="email" name="email" /></div>
                    <div className='flex items-center justify-between mb-8 rounded-2xl border-zinc-700 border-2 px-5 py-3 w-full'><Input className='bg-transparent w-full border-none outline-none' type="password" placeholder="Password" id="password" name="password"></Input></div>
                    <Button text={loading ? "Loading..." : "Log In"} className='text-white flex items-center justify-center mb-4 rounded-2xl bg-zinc-700 p-2 w-full  hover:bg-pink-500 transition-colors ease-in-out duration-300' />
                    <p className="">{err}</p>
                </form>
            </div>
        </div>
    )
}

export default Login
