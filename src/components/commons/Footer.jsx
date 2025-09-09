import React from 'react'

export default function Footer() {
    return (
        <footer className="bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 text-white py-4 shadow-lg fixed bottom-0 w-full">
            <div className="text-center text-sm text-indigo-300">
                &copy; {new Date().getFullYear()} XcelVision. All rights reserved.
            </div>
        </footer>
    )
}