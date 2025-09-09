import React from 'react'
import Breadcrumb from '../elements/Breadcrumb'
import { FaDownload } from "react-icons/fa6";
import { AiOutlineDelete } from "react-icons/ai";





export default function FileHistory() {
    return (
        <section className="py-8 bg-gray-50 min-h-screen">
            <Breadcrumb page="File History" />

            <div className="flex justify-between items-center px-8 mb-6">
                <input
                    type="text"
                    name="file_name"
                    id="file_name"
                    placeholder="Search File Here..."
                    className="w-full max-w-md px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white shadow-sm transition"
                />
            </div>

            <div className="px-8">
                <div className="overflow-x-auto rounded-xl shadow-lg bg-white">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gradient-to-r from-green-600 to-green-400 text-white">
                            <tr>
                                <th className="px-4 py-3 text-left font-semibold">Sl. No.</th>
                                <th className="px-4 py-3 text-left font-semibold">File Name</th>
                                <th className="px-4 py-3 text-center font-semibold">Upload Date</th>
                                <th className="px-4 py-3 text-center font-semibold">File Size</th>
                                <th className="px-4 py-3 text-center font-semibold">Create Chart Status</th>
                                <th className="px-4 py-3 text-center font-semibold">Number of Chart Created</th>
                                <th className="px-4 py-3 text-center font-semibold">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-100">
                            <tr className="hover:bg-blue-50 transition">
                                <td className="px-4 py-3">1.</td>
                                <td className="px-4 py-3 text-[18px] font-medium text-blue-600">
                                    FSI-2023-DOWNLOAD.xlsx
                                </td>
                                <td className="px-4 py-3 text-gray-600 text-center">8th Sept 2025</td>
                                <td className="px-4 py-3 text-gray-600 text-center">
                                    0.15 MB
                                    </td>
                                <td className="px-4 py-3 flex justify-center items-center">
                                    <span className="inline-block px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-semibold">
                                        Success
                                    </span>
                                </td>
                                <td className="px-4 py-3 text-center text-gray-800">3</td>
                                <td className="px-4 py-3 flex gap-2 justify-center items-center">
                                    <button
                                        className="p-2 rounded-lg bg-blue-100 hover:bg-blue-200 text-blue-700 transition"
                                        title="Download"
                                    >
                                        <FaDownload />
                                    </button>
                                    <button
                                        className="p-2 rounded-lg bg-red-100 hover:bg-red-200 text-red-700 transition"
                                        title="Delete"
                                    >
                                        <AiOutlineDelete />
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}