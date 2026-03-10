import * as React from "react";
import { Link } from 'react-router-dom'
import { FileSearchCorner } from 'lucide-react'
import { Button } from './ui/button'

function IndexNavBar() {
    return (
        <header className="sticky top-0 z-50 border-b border-border/50 bg-card/80 backdrop-blur-sm">
            <div className="container flex h-16 items-center justify-between">
                <Link to="/" className="flex items-center gap-2">
                    <FileSearchCorner className="h-7 w-7 text-primary" />
                    <span className="text-xl font-display font-bold text-foreground">ResumeIQ</span>
                </Link>
                <nav className="hidden md:flex items-center gap-6">
                    <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Features</a>
                    <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
                </nav>
                <div className="flex items-center gap-3">
                    <Button variant="ghost" size="sm" asChild>
                        <Link to="/auth">Sign In</Link>
                    </Button>
                    <Button size="sm" className="gradient-primary text-primary-foreground" asChild>
                        <Link to="/auth">Get Started</Link>
                    </Button>
                </div>
            </div>
        </header>
    )
}

export default IndexNavBar