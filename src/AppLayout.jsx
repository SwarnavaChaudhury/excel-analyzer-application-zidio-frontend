import React, { useState, useEffect, createContext } from 'react'
import SideBar from './components/commons/SideBar'
import { Outlet } from 'react-router'
import Header from './components/commons/Header'
import Footer from './components/commons/Footer'



export const xcelvisionContext = createContext();



export default function AppLayout() {


    const [isMobile, setIsMobile] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const [selectedMenu, setSelectedMenu] = useState("Dashboard");

    // detect screen size
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1024) // lg breakpoint
        }
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])






    // Load from localStorage on mount
    useEffect(() => {
        const savedMenu = localStorage.getItem("selectedMenu");
        if (savedMenu) setSelectedMenu(savedMenu);
    }, []);

    // Keep localStorage in sync
    useEffect(() => {
        if (selectedMenu) localStorage.setItem("selectedMenu", selectedMenu);
    }, [selectedMenu]);







    return (
        <xcelvisionContext.Provider value={{ selectedMenu, setSelectedMenu }}>
            <section className="w-full">
                <div className="grid lg:grid-cols-[auto_1fr]">
                    {/* Sidebar (desktop fixed / mobile drawer) */}
                    <SideBar
                        collapsed={isMobile}
                        isOpen={isOpen}
                        onClose={() => setIsOpen(false)}
                        isMobile={isMobile}
                        selectedMenu={selectedMenu}
                        setSelectedMenu={setSelectedMenu}
                    />

                    {/* Main Content */}
                    <div className='lg:w-full w-screen bg-gray-50'>
                        <Header toggleSidebar={() => setIsOpen(!isOpen)} />

                        <div className="px-4 sm:px-6 md:px-10 py-4 pb-20 min-h-[70vh] transition-all duration-300">
                            <Outlet />
                        </div>

                        <Footer />
                    </div>
                </div>
            </section>
        </xcelvisionContext.Provider>
    )
}
