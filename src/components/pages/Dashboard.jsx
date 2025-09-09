import React, { useCallback, useState } from 'react'
import Breadcrumb from '../elements/Breadcrumb'
import { FaUpload } from "react-icons/fa6";
import { FaChartPie } from "react-icons/fa";
import { FiClock } from "react-icons/fi";
import { FaRegChartBar } from "react-icons/fa";
import { RxCrossCircled } from "react-icons/rx";
import { FaRegCircleCheck } from "react-icons/fa6";
import { useDropzone } from 'react-dropzone';
import { RiFileExcel2Line } from "react-icons/ri";
import { HiOutlineCloudUpload } from "react-icons/hi";
import UploadsChart from '../elements/dashboard/UploadsChart';







export default function Dashboard() {





  return (
    <section>

      <Breadcrumb page='Dashboard' />

      <div className='grid lg:grid-cols-[60%_auto] grid-cols-1 gap-10'>
        <div>
          <div className='grid lg:grid-cols-2 grid-cols-1 gap-5'>

            {/* box 1 */}
            <div className="relative z-10 overflow-hidden bg-gradient-to-r from-yellow-700 to-yellow-500 py-5 px-8 rounded-[15px] flex justify-between items-center hover:translate-y-[-5px] duration-300 cursor-pointer group">
              {/* Shine Effect */}
              <div className="absolute inset-0 rounded-[15px] before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/40 before:to-transparent before:translate-x-[-100%] group-hover:before:translate-x-[100%] before:duration-700 before:skew-x-12"></div>

              <div className="relative z-10">
                <h2 className="text-white text-2xl font-medium">
                  Total File Uploaded
                </h2>
                <h3 className="text-4xl text-white mt-2 font-bold">
                  20
                </h3>
              </div>

              <div className="relative z-10 text-3xl text-white">
                <FaUpload />
              </div>
            </div>


            {/* box 2 */}

            <div className="relative z-10 overflow-hidden bg-gradient-to-r from-cyan-700 to-cyan-500 py-5 px-8 rounded-[15px] flex justify-between items-center hover:translate-y-[-5px] duration-300 cursor-pointer group">
              {/* Shine Effect */}
              <div className="absolute inset-0 rounded-[15px] before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/40 before:to-transparent before:translate-x-[-100%] group-hover:before:translate-x-[100%] before:duration-700 before:skew-x-12"></div>

              <div>
                <h2 className='text-white text-2xl font-medium'>
                  Total Chart Created
                </h2>
                <h3 className='text-4xl text-white mt-2 font-bold'>
                  20
                </h3>
              </div>
              <div className='text-3xl text-white'>
                <FaChartPie />
              </div>
            </div>

          </div>
          <div className='grid lg:grid-cols-2 grid-cols-1 gap-5 mt-5'>

            {/* box 3 */}
            <div className="relative overflow-hidden bg-gradient-to-r from-green-700 to-green-500 py-5 px-8 rounded-[15px] flex justify-between items-center hover:translate-y-[-5px] duration-300 cursor-pointer group">
              {/* Shine Effect */}
              <div className="absolute inset-0 rounded-[15px] before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/40 before:to-transparent before:translate-x-[-100%] group-hover:before:translate-x-[100%] before:duration-700 before:skew-x-12"></div>

              <div>
                <h2 className='text-white text-2xl font-medium'>
                  Success File Upload
                </h2>
                <h3 className='text-4xl text-white mt-2 font-bold'>
                  15
                </h3>
              </div>
              <div className='text-3xl text-white relative'>
                <FaUpload />
                <FaRegCircleCheck className='absolute top-[-12px] right-[-5px] text-[18px] font-bold' />
              </div>
            </div>

            {/* box 4 */}
            <div className="relative overflow-hidden bg-gradient-to-r from-red-700 to-red-500 py-5 px-8 rounded-[15px] flex justify-between items-center hover:translate-y-[-5px] duration-300 cursor-pointer group">
              {/* Shine Effect */}
              <div className="absolute inset-0 rounded-[15px] before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/40 before:to-transparent before:translate-x-[-100%] group-hover:before:translate-x-[100%] before:duration-700 before:skew-x-12"></div>
              <div>
                <h2 className='text-white text-2xl font-medium'>
                  Filed File Upload
                </h2>
                <h3 className='text-4xl text-white mt-2 font-bold'>
                  5
                </h3>
              </div>
              <div className='text-3xl text-white relative'>
                <FaUpload />
                <RxCrossCircled className='absolute top-[-12px] right-[-5px] text-[18px] font-bold' />
              </div>
            </div>

          </div>



          {/* progress bar of useage of uploading files */}
          <div className='mt-5 py-5 px-8 bg-green-200 rounded-[15px]'>
            <div className="mb-1 text-lg font-medium dark:text-white text-[20px]">
              Storage Used
              <br />
              <span className='text-gray-500 font-normal text-[14px]'> [ 45 MB used out of 100 MB ] </span>
            </div>
            <div className="w-full h-4 mb-4 bg-gray-200 rounded-full dark:bg-gray-700">
              <div className="h-4 bg-green-600 rounded-full dark:bg-green-500 w-[45%]"></div>
            </div>
          </div>



          <div className='py-5'>
            <UploadsChart />
          </div>



        </div>
        <div>

          <div className='border border-gray-200 shadow-[0px_0px_3px_2px_#ccc] rounded-[10px] p-5'>

            <h2 className='text-2xl font-medium mb-5'>
              Activity Log
            </h2>

            {/* List of files uploaded */}
            {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
              // ////////////////////////////////////////////
              // ////////////////////////////////////////////

              <div key={num} className='bg-gray-200 flex justify-between items-center px-5 py-2 mb-2 rounded-[10px] hover:translate-y-[-5px] duration-300'>
                <div className='flex justify-start items-center gap-[5px]'>
                  <div className='text-green-600 bg-green-200 p-[15px] rounded-[20px]'>
                    <FaRegChartBar />
                  </div>
                  <div>
                    <h2 className='text-[18px] font-medium text-blue-600'>
                      File Name
                    </h2>
                    <p className='text-gray-400 text-[14px]'>
                      Chart Status: Completed
                    </p>
                  </div>
                </div>
                <div className='text-gray-400 text-[14px] flex justify-start items-center gap-[2px]'>
                  <FiClock />
                  6th Feb 2025
                </div>
              </div>

              // ////////////////////////////////////////////
              // ////////////////////////////////////////////
            ))}



          </div>

        </div>
      </div>



    </section>
  )
}