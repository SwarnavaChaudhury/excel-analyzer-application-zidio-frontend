import React, { useState } from 'react'
import Breadcrumb from '../elements/Breadcrumb'
import { FaRegChartBar } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { Link } from 'react-router';
import ChartVisualizationModal from '../elements/chart-visualization/ChartVisualizationModal';
import { MdDeleteOutline } from "react-icons/md";
import { FaRegEye } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";







export default function ChartVisualisation() {


    const [isModalOpen, setIsModalOpen] = useState(false);

    const showChartDetails = () => {
        setIsModalOpen(true);
    };



    return (
        <section className="py-8 min-h-screen">

            <Breadcrumb page="Chart Visualisation" />



            <div className="lg:px-8 px-2 mb-6 lg:w-full w-[90vw] flex justify-center items-center gap-[15px]">
                <input
                    type="text"
                    name="file_name"
                    id="file_name"
                    placeholder="Search File Here..."
                    className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none 
                        focus:ring-2 focus:ring-blue-500 bg-white shadow-sm transition"
                />

                <Link to={'/user-dashboard/create-new-chart'} className='bg-green-500 hover:bg-green-700 duration-300 flex justify-center items-center gap-2 px-8 py-3 text-white font-medium cursor-pointer rounded-xl text-nowrap'>
                    <FaPlus />
                    Create Chart
                </Link>
            </div>



            <div className='grid lg:grid-cols-3 grid-cols-1 gap-5 mt-5'>




                {/* ////////////////////////////////////////////////////// */}
                <div className='border border-green-300 rounded-[15px] shadow-[0px_0px_5px_3px_#ccc] bg-green-200 p-7 hover:translate-y-[-5px] duration-200'>

                    <div className='flex justify-between items-center'>
                        <div>
                            <div className='flex justify-center items-center gap-2'>
                                <h2 className='text-2xl font-medium'>
                                    Chart Name
                                </h2>
                                <button className='cursor-pointer text-2xl mt-[5px] bg-red-500 p-[4px] rounded-[5px] text-white hover:bg-white hover:text-red-500 hover:border hover:border-red-500 duration-300'>
                                    <MdDeleteOutline />
                                </button>
                            </div>
                            <p>
                                Type of Chart
                            </p>
                        </div>
                        <div className='text-white bg-green-500 p-[10px] rounded-[10px] text-3xl'>
                            <FaRegChartBar />
                        </div>
                    </div>
                    <div className='mt-5'>
                        File: &nbsp; <span className='bg-white px-5 py-2 rounded-[20px] text-blue-500 font-medium'> file_name_here.xlxs </span>
                    </div>
                    <div className='mt-5 flex justify-between items-center'>
                        <div className='basis-[50%]'>
                            <div>
                                <span className='font-medium'> X-Axis: </span>
                                <span className='text-gray-500'> [Column Name] </span>
                            </div>
                            <div>
                                <span className='font-medium'> Y-Axis: </span>
                                <span className='text-gray-500'> [Column Name] </span>
                            </div>
                            <div>
                                <span className='font-medium'> Z-Axis: </span>
                                <span className='text-gray-500'> [Column Name] </span>
                            </div>
                        </div>
                        <div className='basis-[50%] text-end'>
                            <span className='text-gray-400'> 9th Feb, 2025 11:05:17 AM </span>
                        </div>
                    </div>
                    <div className='mt-5 flex justify-end items-center gap-[25px]'>
                        <button className='bg-green-500 hover:bg-green-700 duration-400 text-white font-medium cursor-pointer py-2 rounded-[10px] text-[15px] w-full flex justify-center items-center gap-[5px]' onClick={showChartDetails}>
                            <FaRegEye />
                            View Chart
                        </button>
                        <button className='bg-yellow-500 hover:bg-yellow-700 duration-400 text-white font-medium cursor-pointer py-2 rounded-[10px] text-[15px] w-full flex justify-center items-center gap-[5px]'>
                            <FaRegEdit />
                            Edit Chart
                        </button>
                    </div>

                </div>
                {/* ////////////////////////////////////////////////////// */}




            </div>







            {/* Modal Component */}
            <ChartVisualizationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

        </section>
    )
}