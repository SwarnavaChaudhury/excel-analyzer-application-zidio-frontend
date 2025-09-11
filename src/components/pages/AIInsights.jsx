import React from 'react'
import Breadcrumb from '../elements/Breadcrumb'
import { GiIdea } from "react-icons/gi";
import { FaArrowsRotate } from "react-icons/fa6";




export default function AIInsights() {
    return (
        <section className="py-8 min-h-screen">

            <Breadcrumb page="AI Insights" />


            <div className="lg:px-8 px-2 mb-6 lg:w-full w-[90vw]">
                <input
                    type="text"
                    name="file_name"
                    id="file_name"
                    placeholder="Search File Here..."
                    className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none 
                        focus:ring-2 focus:ring-blue-500 bg-white shadow-sm transition"
                />
            </div>


            <div className='grid lg:grid-cols-3 grid-cols-1 gap-[25px]'>
                <div className='border border-gray-300 shadow-[0px_0px_5px_1px_#ccc] hover:shadow-[0px_0px_6px_3px_#ccc] duration-300 p-5 rounded-[15px] bg-green-100'>
                    <div>
                        <div className='flex justify-between items-center'>
                            <h2 className='flex justify-start items-center gap-[10px]'>
                                <span className='text-[20px]'>
                                    <GiIdea />
                                </span>
                                <span className='text-[18px]'>
                                    <span className='text-blue-600 font-medium'>Insights for:</span>
                                    <span className='text-gray-500'> [ Chart Name ] </span>
                                </span>
                            </h2>


                            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 cursor-pointer">
                                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent flex justify-center items-center gap-[10px]">
                                    <FaArrowsRotate />
                                    Regenerate
                                </span>
                            </button>
                        </div>
                        <div className='text-[16px] mt-2'>
                            The data reveals Yemen, Somalia, and South Sudan as the most unstable nations, characterized by pervasive issues like factionalized elites, poor state legitimacy, and significant refugee populations. While most countries saw a slight decrease in instability from the previous year, Yemen and Cameroon notably experienced an increase.
                        </div>
                        <div className='text-gray-400 text-[14px] text-end'>
                            ~ 9/9/2025, 3:02:41 AM
                        </div>

                    </div>
                </div>
                <div></div>
                <div></div>
            </div>


        </section>
    )
}