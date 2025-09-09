import React, { useCallback, useState } from 'react'
import Breadcrumb from '../elements/Breadcrumb';
import { useDropzone } from 'react-dropzone';
import { RiFileExcel2Line } from "react-icons/ri";
import { HiOutlineCloudUpload } from "react-icons/hi";







export default function UploadFiles() {




    const [selectedFile, setSelectedFile] = useState(null); // 🟢 state for file

    const onDrop = useCallback((acceptedFiles) => {
        // console.log(acceptedFiles);
        setSelectedFile(acceptedFiles[0]); // get the first file only
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

    const removeFile = () => {
        setSelectedFile(null);
    };




    return (
        <section>

            <Breadcrumb page='Upload Files' />

            <div className='grid grid-cols-[20%_auto_20%]'>

                <div></div>
                <div>


                    <div className='mt-5 rounded-[15px] bg-white border border-gray-400 p-5'>
                        <label className="block mb-2 font-bold">
                            Upload File Here
                        </label>
                        <div>
                            <div
                                {...getRootProps()}
                                className={`p-10 text-center border-2 border-dashed ${isDragActive ? 'bg-green-200' : 'bg-gray-50'
                                    } cursor-pointer hover:bg-green-400 duration-500 rounded-[15px] h-[200px]`}
                            >
                                <input {...getInputProps()} accept=".xls,.xlsx,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" />
                                {isDragActive
                                    ?
                                    <p className='flex justify-center items-center flex-col'>
                                        <span className='text-green-600 bg-green-200 p-3 rounded-full text-3xl'>
                                            <HiOutlineCloudUpload />
                                        </span>
                                        <span className='text-[25px] font-semibold block'>
                                            Drop the Excel File Here...
                                        </span>
                                    </p>
                                    :
                                    <p className='flex justify-center items-center flex-col'>
                                        <span className='text-green-600 bg-green-200 p-3 rounded-full text-3xl'>
                                            <RiFileExcel2Line />
                                        </span>
                                        <span className='text-[25px] font-semibold block'>
                                            Drag & Drop an Excel File Here...
                                        </span>
                                        <span>
                                            or click to select Excel File
                                        </span>
                                    </p>
                                }
                            </div>
                        </div>
                    </div>



                </div>
                <div></div>

            </div>

        </section>
    )
}