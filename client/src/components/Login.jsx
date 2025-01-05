import React, { useState,useEffect,useContext } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext'

const Login = () => {
     const [state, setState] = useState('Login')
     const {setShowLogin} = useContext(AppContext)


     useEffect(()=>{
              document.body.style.overflow='hidden'
              return ()=>{
                document.body.style.overflow='unset'
              }
     },[])
  return (
    <div className='absolute top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center'>
            <form className='relative bg-white p-10 rounded-xl text-slate-500' >
                <h1 className='text-center text-2xl text-neutral-700 font-medium'>{state}</h1>
                <p className='text-sm'>Welcome back! Please sign in to continue</p>

           
                   {state!=='Login' && <div className='border px-6 py-2 flex items-center gap-2 rounded-full mt-5'>
                        <img className='h-6' src={assets.profile_icon} alt="" />
                        <input className='outline-none text-sm' type="text" required placeholder='Full Name' />
                    </div>}
                    <div className='border px-6 py-2 flex items-center gap-2 rounded-full mt-5'>
                        <img className='h-4' src={assets.email_icon} alt="" />
                        <input className='outline-none text-sm' type="email" required placeholder='Email id' />
                    </div>
                    <div className='border px-6 py-2 flex items-center gap-2 rounded-full mt-5'>
                        <img className='h-5' src={assets.lock_icon} alt="" />
                        <input className='outline-none text-sm' type="password" required placeholder='Password' />
                    </div>

                        <p className='text-sm text-blue-600 my-4 cursor-pointer'>Forgot password?</p>
                        <button className='bg-blue-600 w-full text-white py-2 rounded-full'>{state=== 'Login' ? 'Login' : 'Create'}</button>

                     {state ==='Login' ?   <p  className='mt-5 text-center'>Dont have an acoount? <span className='text-blue-600 cursor-pointer' onClick={()=> setState('Sign up')}>Sign up</span></p>
                     :
                        <p className='mt-5 text-center'>Already have an account?<span onClick={()=> setState('Login')} className='text-blue-600 cursor-pointer'>Log in</span></p>

                     }
                           
                        <img onClick={()=> setShowLogin(false)} className='absolute top-5 right-5 cursor-pointer' src={assets.cross_icon} alt="" />
            </form>
    </div>
  )
}

export default Login