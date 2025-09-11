import React, { useState } from 'react'
import Breadcrumb from '../elements/Breadcrumb'
import { MdAlternateEmail } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { TbLockPassword } from "react-icons/tb";






export default function AccountSettings() {



    let [selectedBlock, setSelectedBlock] = useState('profile');




    return (
        <section className="py-8 min-h-screen">

            <Breadcrumb page="Account Settings" />

            <div className='grid lg:grid-cols-[30%_auto] grid-cols-1 gap-[20px]'>
                <div className='border border-gray-200 p-5 rounded-[10px] bg-white shadow-[0px_0px_5px_2px_#ccc] w-full flex flex-col justify-center items-center'>

                    <img src="https://cdn-icons-png.flaticon.com/512/9131/9131478.png" alt="" className='w-[60px] h-[60px] rounded-full border-2 border-gray-500 p-[5px]' />
                    <h2 className='text-2xl font-medium text-blue-600 mt-3'>
                        User Profile Name
                    </h2>
                    <p className='flex justify-start items-center gap-[5px] mt-1'>
                        <span>
                            <MdAlternateEmail />
                        </span>
                        <a href="mailto:user11@gmail.com">
                            user11@gmail.com
                        </a>
                    </p>
                    <p className='flex justify-start items-center gap-[5px] bg-green-200 border border-green-500 text-green-600 font-medium px-[10px] py-[2px] text-[14px] rounded-full mt-2'>
                        <span>
                            <FaRegUser />
                        </span>
                        <a href="mailto:user11@gmail.com">
                            User
                        </a>
                    </p>

                    <div className='h-[1px] w-full bg-gray-400 my-5'></div>

                    <div className='text-[14px] font-medium flex justify-center items-center gap-[10px]'>
                        <span>
                            <SlCalender className='text-blue-600' />
                        </span>
                        <span>
                            Member Since
                        </span>
                    </div>
                    <div className='text-center mt-1'>
                        September 8, 2025
                    </div>

                </div>
                <div className='border border-gray-200 px-8 py-5 rounded-[10px] bg-white shadow-[0px_0px_5px_2px_#ccc] w-full'>

                    <div className='flex justify-between items-center'>
                        <h2
                            className={`text-2xl font-medium flex justify-start items-center gap-[10px] cursor-pointer
                                ${selectedBlock == 'profile' ? 'underline' : ''}
                                `}
                            onClick={() => setSelectedBlock('profile')}
                        >
                            <FaRegUser />
                            Profile Details
                        </h2>
                        <h2
                            className={`text-2xl font-medium flex justify-start items-center gap-[10px] cursor-pointer
                                ${selectedBlock == 'password' ? 'underline' : ''}
                                `}
                            onClick={() => setSelectedBlock('password')}
                        >
                            <TbLockPassword />
                            Update Password
                        </h2>
                    </div>


                    {/* //////////////////////////////////////////////////////////////// */}
                    {/* //////////////////////////////////////////////////////////////// */}
                    {/* //////////////////////////////////////////////////////////////// */}
                    {/* //////////////////////////////////////////////////////////////// */}


                    {
                        selectedBlock == 'profile' && <div className='update-profile-details'>

                            <form className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="firstName">
                                        First Name
                                    </label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                                        placeholder="Enter first name"
                                        autoComplete="given-name"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="lastName">
                                        Last Name
                                    </label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                                        placeholder="Enter last name"
                                        autoComplete="family-name"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="phone">
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                                        placeholder="Enter phone number"
                                        autoComplete="tel"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="email">
                                        Email ID
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                                        placeholder="Enter email address"
                                        autoComplete="email"
                                    />
                                </div>
                                <div className="flex items-end">
                                    <button
                                        type="submit"
                                        className="w-full bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg shadow hover:bg-blue-700 transition"
                                    >
                                        Save Changes
                                    </button>
                                </div>
                            </form>

                        </div>
                    }

                    {/* //////////////////////////////////////////////////////////////// */}
                    {/* //////////////////////////////////////////////////////////////// */}
                    {/* //////////////////////////////////////////////////////////////// */}
                    {/* //////////////////////////////////////////////////////////////// */}

                    {
                        selectedBlock == 'password' && <div className='update-user-password'>
                            <form className="mt-8 grid grid-cols-1 gap-6 max-w-md mx-auto">
                                <div>
                                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                                        New Password
                                    </label>
                                    <input
                                        type="password"
                                        id="password"
                                        name="password"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                                        placeholder="Enter new password"
                                        autoComplete="new-password"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
                                        Confirm Password
                                    </label>
                                    <input
                                        type="password"
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                                        placeholder="Confirm new password"
                                        autoComplete="new-password"
                                    />
                                </div>
                                <div>
                                    <button
                                        type="submit"
                                        className="w-full bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg shadow hover:bg-blue-700 transition"
                                    >
                                        Update Password
                                    </button>
                                </div>
                            </form>
                        </div>
                    }


                </div>
            </div>

        </section>
    )
}