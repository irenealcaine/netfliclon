import React from 'react'

const NavBar = () => {
  return (
    <div className='flex items-center justify-between p-4 z-[100] w-full absolute'>
      <h1 className='text-red-600 text-4xl font-black uppercase cursor-pointer'>Netfliclon</h1>
      <div>
        <button className=' pr-4 cursor-pointer text-white'>Iniciar sesión</button>
        <button className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white'>Registrarse</button>
      </div>
    </div >
  )
}

export default NavBar
