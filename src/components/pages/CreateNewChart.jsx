import React, { useState } from 'react'
import Breadcrumb from '../elements/Breadcrumb'
import { FaRegSave } from "react-icons/fa";
import { FaArrowsRotate } from "react-icons/fa6";
import { FaChartLine } from "react-icons/fa";





export default function CreateNewChart() {





    const chart_type_2d = [
        "Bar Chart",
        "Line Chart",
        "Pie Chart",
        "Doughnut Chart",
        "Polar Area Chart",
    ];
    const chart_type_3d = ["3D Scaller Plot", "3D Bar Chart"];

    const [dimension, setDimension] = useState("2D");
    const [chartTypes, setChartTypes] = useState(chart_type_2d);
    const [selectedChart, setSelectedChart] = useState("");

    // handle dimension change
    const handleDimensionChange = (e) => {
        const value = e.target.value;
        setDimension(value);

        if (value === "2D") {
            setChartTypes(chart_type_2d);
        } else if (value === "3D") {
            setChartTypes(chart_type_3d);
        } else {
            setChartTypes([]);
        }

        setSelectedChart(""); // reset chart type when dimension changes
    };






    return (
        <section className="py-8 min-h-screen">

            <Breadcrumb page="Create New Chart Visualisation" />

            <div className='grid lg:grid-cols-[35%_auto] grid-cols-1 gap-[20px] w-full'>
                <div className='border border-gray-400 p-5 rounded-[10px] bg-white shadow-[0px_0px_5px_2px_#ccc] w-full'>

                    <h2 className='text-[30px] font-medium mb-2'>
                        Chart Visualization
                    </h2>

                    <div>
                        <label htmlFor="select_file" className='font-medium'>
                            Select File
                        </label>
                        <select name="select_file" id="select_file" className='w-full border border-gray-500 h-[40px] rounded-[10px] px-2'>
                            <option value="" selected> --- Select File --- </option>
                            <option value=""> file_name.xlxs </option>
                            <option value=""> file_name.xlxs </option>
                            <option value=""> file_name.xlxs </option>
                        </select>
                    </div>

                    <div className='bg-gray-400 h-[1px] w-full my-5'></div>

                    <div>
                        <label
                            htmlFor="select_chart_dimension"
                            className="font-medium block mb-1"
                        >
                            Chart Dimension
                        </label>
                        <select
                            name="select_chart_dimension"
                            id="select_chart_dimension"
                            value={dimension}
                            onChange={handleDimensionChange}
                            className='w-full border border-gray-500 h-[40px] rounded-[10px] px-2'
                        >
                            <option value="2D">2D</option>
                            <option value="3D">3D</option>
                        </select>
                    </div>

                    <div className="bg-gray-400 h-[1px] w-full my-5"></div>

                    <div>
                        <label htmlFor="select_chart_type" className="font-medium block mb-1">
                            Chart Type
                        </label>
                        <select
                            name="select_chart_type"
                            id="select_chart_type"
                            value={selectedChart}
                            onChange={(e) => setSelectedChart(e.target.value)}
                            className="w-full border border-gray-500 h-[40px] rounded-[10px] px-2"
                        >
                            <option value="">-- Select Chart Type --</option>
                            {chartTypes.map((chart, index) => (
                                <option key={index} value={chart}>
                                    {chart}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className='bg-gray-400 h-[1px] w-full my-5'></div>

                    <div className='mt-2'>
                        <label htmlFor="x_axis" className='font-medium'>
                            Select X-Axis
                        </label>
                        <select name="x_axis" id="x_axis" className='w-full border border-gray-500 h-[40px] rounded-[10px] px-2'>
                            <option value=""> --- Select X-Axis --- </option>
                        </select>
                    </div>
                    <div className='mt-2'>
                        <label htmlFor="y_axis" className='font-medium'>
                            Select Y-Axis
                        </label>
                        <select name="y_axis" id="y_axis" className='w-full border border-gray-500 h-[40px] rounded-[10px] px-2'>
                            <option value=""> --- Select Y-Axis --- </option>
                        </select>
                    </div>
                    <div className='mt-2'>
                        <label htmlFor="z_axis" className='font-medium'>
                            Select Z-Axis
                        </label>
                        <select name="z_axis" id="z_axis" className='w-full border border-gray-500 h-[40px] rounded-[10px] px-2'>
                            <option value=""> --- Select Z-Axis --- </option>
                        </select>
                    </div>

                    <div className='bg-gray-400 h-[1px] w-full my-5'></div>

                    <p className='font-medium'>
                        Download as
                    </p>
                    <div className='flex justify-center items-center gap-[15px] pt-[10px]'>

                        <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-8 py-3 text-center me-2 mb-2 cursor-pointer">
                            PNG
                        </button>

                        <button type="button" className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-8 py-3 text-center me-2 mb-2 cursor-pointer">
                            PDF
                        </button>

                    </div>

                    <div className='bg-gray-400 h-[1px] w-full my-5'></div>

                    <p className='flex justify-between items-center'>
                        <span className='font-medium'>
                            Generate AI Insights
                        </span>
                        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 cursor-pointer">
                            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent flex justify-center items-center gap-[10px]">
                                <FaArrowsRotate />
                                Regenerate
                            </span>
                        </button>
                    </p>
                    <div className='pt-[10px]'>

                        <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Generate AI Insights..."></textarea>

                    </div>

                    <div className='bg-gray-400 h-[1px] w-full my-5'></div>

                    <button className='bg-blue-500 hover:bg-blue-700 duration-400 text-white font-medium cursor-pointer py-2 rounded-[10px] text-[15px] w-full flex justify-center items-center gap-[5px]'>
                        <FaChartLine />
                        Create Chart
                    </button>
                    <button className='bg-green-500 hover:bg-green-700 duration-400 text-white font-medium cursor-pointer py-2 rounded-[10px] text-[15px] w-full flex justify-center items-center gap-[5px] mt-3'>
                        <FaRegSave />
                        Save Chart
                    </button>


                </div>
                <div className='border border-gray-400 p-5 rounded-[10px] bg-white shadow-[0px_0px_5px_2px_#ccc] w-full'>

                    {/* //////////////////////////////////////////////////////////////////// */}
                    {/* //////////////////////////////////////////////////////////////////// */}
                    {/* //////////////////////////////////////////////////////////////////// */}

                    {/* chart diagram */}
                    <div className='flex justify-center items-center pt-2 pb-8'>
                        <img src="https://media.geeksforgeeks.org/wp-content/uploads/20230704123818/Percentage-Bar-Diagram-copy-(1).webp" alt="" className='w-full h-auto' />
                    </div>

                    <div className='bg-gray-400 h-[1px] w-full my-5'></div>

                    <div>
                        <h2 className='text-2xl font-medium'>
                            Fetched Data
                        </h2>
                    </div>

                    <div className='max-h-[400px] lg:w-full w-[80vw] overflow-x-scroll overflow-y-scroll mt-3'>


                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead className="text-xs uppercase bg-gradient-to-r from-green-600 to-green-400 text-white">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Sl. No.
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Invoice No
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Description
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Quantity
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Invoice Date
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Customar ID
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Country
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td className="px-6 py-4">
                                        1.
                                    </td>
                                    <td className="px-6 py-4">
                                        465465
                                    </td>
                                    <td className="px-6 py-4">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing.
                                    </td>
                                    <td className="px-6 py-4">
                                        5
                                    </td>
                                    <td className="px-6 py-4">
                                        12th feb
                                    </td>
                                    <td className="px-6 py-4">
                                        CUSTOMER654545
                                    </td>
                                    <td className="px-6 py-4">
                                        India
                                    </td>
                                </tr>
                            </tbody>
                        </table>


                    </div>






                    {/* //////////////////////////////////////////////////////////////////// */}
                    {/* //////////////////////////////////////////////////////////////////// */}
                    {/* //////////////////////////////////////////////////////////////////// */}

                </div>
            </div>

        </section>
    )
}