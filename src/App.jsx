import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Index from './pages'
import { TooltipProvider } from "./component/ui/tooltip";

function App() {

    return (
        <>
            <TooltipProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<Index />} />
                    </Routes>
                </BrowserRouter>
            </TooltipProvider>
        </>
    )
}

export default App
