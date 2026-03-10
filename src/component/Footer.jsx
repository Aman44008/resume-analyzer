import React from 'react'
import { FileSearchCorner } from "lucide-react";

function Footer() {
    return (
        <footer className="border-t border-border py-8">
            <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                    <FileSearchCorner className="h-5 w-5 text-primary" />
                    <span className="font-display font-semibold text-foreground">ResumeIQ</span>
                </div>
                <p className="text-sm text-muted-foreground">© 2026 ResumeIQ. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer