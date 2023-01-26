/* eslint-disable no-unused-vars */
import React from 'react'
// import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'
// import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { } from 'react-icons/'

const NavBar = () => {
  const { user, logOut } = UserAuth()
  const navigate = useNavigate()
  // const [open, setOpen] = useState(false)

  const handleLogout = async () => {
    try {
      await logOut()
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='flex md:flex-row flex-col md:items-center justify-between p-4 z-[100] w-full absolute'>
      <Link to='/'>
        <h1 className='text-red-600 text-4xl font-black uppercase cursor-pointer'>Netfliclon</h1>
      </Link>

      {/* {user?.email ? (
        <>
          <div className='text-white bg-black/40 rounded p-1 md:hidden absolute top-4 right-4 text-xl' onClick={() => { setOpen(!open) }}>{open ? <AiOutlineClose /> : <AiOutlineMenu />}</div>
          <div className={`md:flex`}>
            <div className={`flex flex-col md:flex-row md:items-center mt-0`}>
              <Link to='/account'>
                <button className='border md:border-0 px-6 py-2 rounded md:pr-4 cursor-pointer text-white mb-1 md:mb-0 w-full '>Cuenta</button>
              </Link>
              <button onClick={handleLogout} className='bg-red-600 border border-red-600 px-6 py-2 rounded cursor-pointer text-white'>Cerrar sesión</button>
            </div>
          </div>
        </>
      ) : (
        <div className=''>
          <Link to='/login'>
            <button className=' pr-4 cursor-pointer text-white'>Iniciar sesión</button>
          </Link>
          <Link to='/signup'>
            <button className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white'>Registrarse</button>
          </Link>

        </div>
      )
      } */}

    </div >
  )
}

export default NavBar
