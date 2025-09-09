import React, { useState, useEffect } from 'react'
import SideBar from './components/commons/SideBar'
import { Outlet } from 'react-router'
import Header from './components/commons/Header'
import Footer from './components/commons/Footer'

export default function AppLayout() {
    const [isMobile, setIsMobile] = useState(false)
    const [isOpen, setIsOpen] = useState(false)

    // detect screen size
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1024) // lg breakpoint
        }
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <section className="w-full">
            <div className="grid lg:grid-cols-[auto_1fr]">
                {/* Sidebar (desktop fixed / mobile drawer) */}
                <SideBar
                    collapsed={isMobile}
                    isOpen={isOpen}
                    onClose={() => setIsOpen(false)}
                    isMobile={isMobile}
                />

                {/* Main Content */}
                <div>
                    <Header toggleSidebar={() => setIsOpen(!isOpen)} />

                    <div className="px-4 sm:px-6 md:px-10 py-4 pb-20 min-h-[70vh] transition-all duration-300">
                        <Outlet />
                    </div>

                    <Footer />
                </div>
            </div>
        </section>
    )
}
