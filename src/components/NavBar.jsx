import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='flex items-center justify-between p-4 z-[100] w-full absolute'>
      <Link to='/'>
        <h1 className='text-red-600 text-4xl font-black uppercase cursor-pointer'>Netfliclon</h1>
      </Link>
      <div>
        <Link to='/login'>
          <button className=' pr-4 cursor-pointer text-white'>Iniciar sesión</button>
        </Link>
        <Link to='/signup'>
          <button className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white'>Registrarse</button>
        </Link>

      </div>
    </div >
  )
}

export default NavBar
