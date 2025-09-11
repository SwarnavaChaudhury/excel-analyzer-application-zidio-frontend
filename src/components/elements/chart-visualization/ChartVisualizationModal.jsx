import React from 'react'
import { RxCross2 } from "react-icons/rx";


export default function ChartVisualizationModal({ isOpen, onClose }) {


    if (!isOpen) return null; // don't render if not open


    return (
        <div>


            {/* --------------------------------------------------------------------- */}
            {/* --------------------------------------------------------------------- */}

            <div
                className='absolute top-0 left-0 z-[99999] bg-[#6358589a] h-full w-full'
                onClick={onClose} // click outside to close
            ></div>

            {/* Modal Box */}
            <div className='lg:w-[1240px] w-full px-4 bg-white min-h-[500px] absolute top-[50%] left-[50%] z-[999999] translate-x-[-50%] translate-y-[-50%] border border-gray-300 rounded-2xl'>
                <div className='p-5 flex justify-between items-center border-b border-gray-500'>
                    <div>
                        <h2 className='text-2xl font-medium text-blue-500'>
                            Chart Name
                        </h2>
                    </div>
                    <span
                        className='cursor-pointer text-xl hover:text-red-500'
                        onClick={onClose}
                    >
                        <RxCross2 />
                    </span>
                </div>
                <div className='py-3 px-5'>
                    <span>
                        <b>Type:</b> <span className='text-gray-500'>Pie Chart</span> &nbsp; | &nbsp;
                        <b>File:</b> <span className='text-gray-500'> fsi-2019.xlsx </span> &nbsp;
                        |&nbsp; <b>X:</b> <span className='text-gray-500'>[Column Name]</span> &nbsp;
                        |&nbsp; <b>Y:</b> <span className='text-gray-500'>[Column Name]</span> &nbsp;
                        |&nbsp; <b>Z:</b> <span className='text-gray-500'>[Column Name]</span> &nbsp;
                    </span>
                </div>
                <div className='flex justify-center items-center pt-2 pb-8'>
                    <img src="https://media.geeksforgeeks.org/wp-content/uploads/20230704123818/Percentage-Bar-Diagram-copy-(1).webp" alt="" />
                </div>
                <div className='flex justify-center items-center gap-[20px] pb-5'>
                    <button className='bg-yellow-500 text-white px-8 py-3 rounded-xl'>
                        Download PNG
                    </button>
                    <button className='bg-green-500 text-white px-8 py-3 rounded-xl'>
                        Download PDF
                    </button>
                </div>

            </div>

            {/* --------------------------------------------------------------------- */}
            {/* --------------------------------------------------------------------- */}




        </div>
    )
}