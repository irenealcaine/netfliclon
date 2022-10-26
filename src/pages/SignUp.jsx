import React from 'react'

const SignUp = () => {
  return (
    <>
      <div className='w-full h-screen'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/79fe83d4-7ef6-4181-9439-46db72599559/33195bfc-7f65-4308-8869-677efc451cad/ES-es-20221017-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="" className='block absolute w-full h-full object-cover' />
        <div className="bg-black/90 sm:bg-black/50 fixed top-0 left-0 w-full h-screen" />
        <div className="fixed w-full px-4 py-24 z-50">
          <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
            <div className="max-w-[320px] mx-auto py-16">
              <h1 className="text-3xl font-bold">Regístrate</h1>
              <form className='w-ful flex flex-col py-4'>
                <input
                  type="email"
                  placeholder='Email'
                  autoComplete='email'
                  className='p-3 my-2 bg-gray-700 rounded'
                />
                <input
                  type='password'
                  placeholder='Contraseña'
                  autoComplete='current-password'
                  className='p-3 my-2 bg-gray-700 rounded'
                />
                <button className='bg-red-600 py-3 my-6 px-6 rounded font-bold'>Resgístrate</button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default SignUp
