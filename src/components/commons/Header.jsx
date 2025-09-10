import React, { useState, useEffect, useRef } from "react";
import { IoNotificationsOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import { FaChartLine } from "react-icons/fa";
import { FiUploadCloud } from "react-icons/fi";
import { MdFileUploadOff } from "react-icons/md";
import { GiArtificialIntelligence } from "react-icons/gi";
import { RiMenuUnfold2Line } from "react-icons/ri";







export default function Header({ toggleSidebar }) {


    const [showNotifications, setShowNotifications] = useState(false);
    const notifRef = useRef(null);

    // Close when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (notifRef.current && !notifRef.current.contains(event.target)) {
                setShowNotifications(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);



    // <FaChartLine /> -- when chart is created
    // <FiUploadCloud /> -- when file uploaded
    // <MdFileUploadOff /> -- when file uploading failed
    // <GiArtificialIntelligence /> -- when ai in sights is ready


    let actionPerformNotification = [
        { msg: "File uploaded", file_name: "sample123.xlsx", time: "3:02AM" },
        { msg: "Chart created", file_name: "data44.xlsx", time: "12:45PM" },
        { msg: "AI insight generated", file_name: "fst558.xlsx", time: "9:10AM" },
        { msg: "File uploaded", file_name: "finance_16.xlsx", time: "8:30AM" },
        { msg: "Chart created", file_name: "store_19.xlsx", time: "7:15AM" },
        { msg: "Upload Failed", file_name: "action_88.xlsx", time: "8:05AM" },
    ];

    // Helper function to map icon + style
    const getIconConfig = (msg) => {
        switch (msg) {
            case "File uploaded":
                return { icon: <FiUploadCloud />, bg: "bg-green-100", color: "text-green-600" };
            case "Chart created":
                return { icon: <FaChartLine />, bg: "bg-blue-100", color: "text-blue-600" };
            case "AI insight generated":
                return { icon: <GiArtificialIntelligence />, bg: "bg-purple-100", color: "text-purple-600" };
            case "Upload Failed":
                return { icon: <MdFileUploadOff />, bg: "bg-red-100", color: "text-red-600" };
            default:
                return { icon: <FaChartLine />, bg: "bg-gray-100", color: "text-gray-600" };
        }
    };



    return (
        <header className="bg-white shadow-md px-6 py-4 flex items-center justify-between sticky top-0 left-0 z-50 lg:w-full w-screen">
            {/* Left Section */}
            <div className="flex items-center gap-3">
                <button
                    className="cursor-pointer pr-4"
                    onClick={toggleSidebar}
                >
                    <RiMenuUnfold2Line className="text-2xl" />
                </button>

                <span className="text-xl font-bold text-gray-800">Excel Analyzer</span>
                <span className="px-2 py-1 rounded bg-blue-100 text-blue-600 text-xs font-medium">
                    User Panel
                </span>
            </div>

            {/* Right Section */}
            <nav className="flex items-center gap-6">
                {/* Notification Button */}
                <div className="relative" ref={notifRef}>
                    <button
                        onClick={() => setShowNotifications(!showNotifications)}
                        className="relative flex items-center justify-center w-10 h-10 text-gray-600 hover:text-blue-600 transition-colors"
                    >
                        <IoNotificationsOutline className="cursor-pointer text-2xl" />
                        {actionPerformNotification.length > 0 && (
                            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center animate-blink">
                                {actionPerformNotification.length}
                            </span>
                        )}
                    </button>

                    {/* Notification Wizard */}
                    {showNotifications && (
                        <div className="absolute lg:right-0 right-[-50px] mt-3 w-80 bg-white shadow-2xl rounded-xl z-[9999] border border-gray-200">
                            <div className="flex items-center justify-between px-4 py-3 bg-green-200 rounded-t-xl">
                                <span className="font-semibold text-gray-800">Notifications</span>
                                <button className="text-xs text-blue-600 hover:underline cursor-pointer">Clear All</button>
                            </div>
                            <div className="max-h-64 overflow-y-auto custom-scrollbar px-[5px]">
                                {actionPerformNotification.length > 0 ? (
                                    actionPerformNotification.map((n, i) => {
                                        const { icon, bg, color } = getIconConfig(n.msg);
                                        return (
                                            <div
                                                key={i}
                                                className="flex items-center justify-between px-4 py-3 border-t border-gray-200 hover:bg-gray-100 transition"
                                            >
                                                <p className="flex justify-start items-center gap-[10px]">
                                                    <span className={`${bg} ${color} p-3 rounded-full text-lg`}>
                                                        {icon}
                                                    </span>
                                                    <span>
                                                        <span className="text-gray-700 text-[16px] font-semibold block">
                                                            {n.msg}
                                                        </span>
                                                        <span className="text-gray-700 text-sm">{n.file_name}</span>
                                                    </span>
                                                </p>
                                                <span className="text-xs text-gray-400">{n.time}</span>
                                            </div>
                                        );
                                    })
                                ) : (
                                    <p className="text-gray-400 text-[14px]">No Notification Found!!</p>
                                )}
                            </div>
                        </div>
                    )}

                    <style>
                        {`
            @keyframes blink {
              0%, 100% { opacity: 1; }
              50% { opacity: 0.3; }
            }
            .animate-blink {
              animation: blink 1s infinite;
            }
            .custom-scrollbar::-webkit-scrollbar {
              width: 6px;
            }
            .custom-scrollbar::-webkit-scrollbar-thumb {
              background: #cbd5e1;
              border-radius: 4px;
            }
            `}
                    </style>
                </div>

                {/* User Profile Image */}
                <div className="lg:block hidden">
                    <div className="flex items-center gap-2 cursor-pointer">
                        <img
                            src="https://ui-avatars.com/api/?name=User"
                            alt="User Profile"
                            className="w-8 h-8 rounded-full border"
                        />
                    </div>
                </div>

                {/* Account Settings */}
                <a
                    href="#"
                    className="flex items-center gap-[2px] text-gray-600 hover:text-blue-600 transition-colors font-medium cursor-pointer"
                >
                    <FaRegUserCircle />
                    <span className="lg:block hidden">
                        Account Settings
                    </span>
                </a>

                {/* Logout */}
                <button className="flex items-center gap-[2px] text-gray-600 hover:text-red-600 transition-colors font-medium cursor-pointer">
                    <IoIosLogOut />
                    <span className="lg:block hidden">
                        Logout
                    </span>
                </button>
            </nav>
        </header>
    );
}
