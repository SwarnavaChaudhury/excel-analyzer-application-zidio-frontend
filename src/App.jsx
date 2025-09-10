import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link } from 'react-router'

function App() {

  return (
    <>

      <section className='w-full shadow-2xl'>
        <div className='lg:w-[1240px] w-full mx-auto lg:px-0 px-5 flex justify-between items-center py-4'>

          <div>
            <span className="text-3xl">📈</span>
            <span className='text-2xl text-blue-600 font-medium'>
              XcelVision
            </span>
          </div>

          <nav>
            <ul className='flex justify-center items-center gap-[40px]'>
              <li>
                <span className='text-[18px] font-medium cursor-pointer hover:text-blue-600 duration-200'>
                  Home
                </span>
              </li>
              <li>
                <span className='text-[18px] font-medium cursor-pointer hover:text-blue-600 duration-200'>
                  About
                </span>
              </li>
              <li>
                <span className='text-[18px] font-medium cursor-pointer hover:text-blue-600 duration-200'>
                  Team
                </span>
              </li>
              <li>
                <span className='text-[18px] font-medium cursor-pointer hover:text-blue-600 duration-200'>
                  Contact
                </span>
              </li>
            </ul>
          </nav>

          <div>

            <Link to={'/login'} className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
              Login
            </Link>
            <Link to={'/register'} className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
              Register
            </Link>

          </div>

        </div>
      </section>

    </>
  )
}

export default App
