"use client"

import React, { useState } from 'react'
import { URL_LOGIN } from '../helpers/variables/variables'
import { useRouter } from 'next/navigation'

const Login = () => {
    const router = useRouter()
    const [info, setInfo] = useState({
        email: '',
        password: ''
    })

    const [error, setError] = useState(false)

    const submit = async (e) => {
        e.preventDefault()
        console.log(info)
        const adminInfo = await fetch(`${URL_LOGIN}`, {
              cache: "no-store",
              method: "POST", 
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(info)
            });
            const admin = await adminInfo.json();
            if(admin.data){
                localStorage.setItem("user", admin.data.session.access_token)
                router.push("/dashboard")
                return
            }
            setError(true)
    }
  return (
    <div className='flex justify-center items-center w-full h-screen bg-gray-800'>
    <form onSubmit={submit} className='flex flex-col p-10 gap-5 rounded-2xl bg-primary'>
        {error && <span className='font-bold text-center'>Error al ingresar</span>}
        <input className='w-full pl-4 bg-white focus:outline-none focus:ring-0' placeholder='Email'  type='email' value={info.email} onChange={e => {setInfo(state => ({...state, email: e.target.value})); setError(false)}} />
        <input className='w-full pl-4 bg-white focus:outline-none focus:ring-0' placeholder='Contraseña' type='password' value={info.password} onChange={e => {setInfo(state => ({...state, password: e.target.value})); setError(false)}} />
        <button className='font-semibold text-white cursor-pointer' type='submit'>INICIAR</button>
    </form>
    </div>
  )
}

export default Login