import React, { useState, useEffect } from 'react'
import { Link } from 'react-router';
import { GiArtificialIntelligence } from "react-icons/gi";
import { RiAccountCircleLine } from "react-icons/ri";
import { FaRegChartBar } from "react-icons/fa";
import { PiFilesFill } from "react-icons/pi";
import { MdDriveFolderUpload } from "react-icons/md";
import { MdOutlineDashboardCustomize } from "react-icons/md";

export default function SideBar({ collapsed, isOpen, onClose, isMobile }) {
    const [selected, setSelected] = useState('Dashboard')

    // Load selected menu from localStorage on mount
    useEffect(() => {
        const savedMenu = localStorage.getItem("selectedMenu");
        if (savedMenu) {
            setSelected(savedMenu);
        }
    }, []);

    const menuItems = [
        { name: 'Dashboard', path: '/dashboard', icon: MdOutlineDashboardCustomize },
        { name: 'Upload Files', path: '/upload-files', icon: MdDriveFolderUpload },
        { name: 'File History', path: '/file-history', icon: PiFilesFill },
        { name: 'Chart Visualisations', path: '/chart-visualisations', icon: FaRegChartBar },
        { name: 'AI Insights', path: '/ai-insights', icon: GiArtificialIntelligence },
        { name: 'Account Settings', path: '/account-settings', icon: RiAccountCircleLine },
    ]

    const handleMenuClick = (menuName) => {
        setSelected(menuName);
        localStorage.setItem("selectedMenu", menuName); // Save to localStorage
        if (isMobile) onClose();
    }

    return (
        <>
            {/* Mobile overlay */}
            {isMobile && isOpen && (
                <div
                    className="fixed inset-0 bg-black/40 z-40"
                    onClick={onClose}
                />
            )}

            <aside
                className={`
                    bg-gradient-to-b from-green-500 to-green-700 text-white shadow-lg flex flex-col px-2 h-screen
                    transition-all duration-300
                        ${isMobile
                        ? `fixed top-0 left-0 z-50 ${isOpen ? 'translate-x-0' : '-translate-x-full'} w-64`
                        : `${collapsed ? 'w-20' : 'w-64'} sticky left-0 top-0`
                    }
                    `}
            >
                {/* Logo */}
                <div className="p-6 text-2xl font-bold tracking-wide flex items-center gap-2">
                    <span className="text-3xl">📈</span>
                    {!collapsed && !isMobile && "XcelVision"}
                </div>

                {/* Nav Links */}
                <nav className="flex-1 mt-4">
                    <ul>
                        {menuItems.map(item => {
                            const Icon = item.icon
                            return (
                                <li key={item.name}>
                                    <Link
                                        to={item.path}
                                        onClick={() => handleMenuClick(item.name)}
                                        className={`flex items-center gap-3 px-5 py-3 rounded-lg transition-colors duration-200 cursor-pointer
                                            ${selected === item.name
                                                ? 'bg-white text-blue-900 font-semibold shadow-md'
                                                : 'hover:bg-blue-800 hover:text-white text-blue-100'}
                                            `}
                                    >
                                        <Icon className="text-xl" />
                                        {(!collapsed || isMobile) && <span>{item.name}</span>}
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>

                {/* Footer */}
                {!collapsed && !isMobile && (
                    <div className="mt-auto p-5 text-xs text-blue-200 opacity-70">
                        &copy; {new Date().getFullYear()} &nbsp; XcelVision
                    </div>
                )}
            </aside>
        </>
    )
}
