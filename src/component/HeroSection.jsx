import React from 'react'
import { Button } from './ui/button'
import { Link } from 'react-router-dom'
import { Star, ArrowRight } from 'lucide-react'

function HeroSection() {
    return (
        <section className="gradient-hero py-24 md:py-32">
            <div className="container text-center max-w-3xl mx-auto animate-fade-in">
                <div className="inline-flex items-center gap-2 bg-accent text-accent-foreground rounded-full px-4 py-1.5 text-sm font-medium mb-6">
                    <Star className="h-3.5 w-3.5" />
                    AI-Powered Resume Analysis
                </div>
                <h1 className="text-4xl md:text-6xl font-display font-extrabold text-foreground leading-tight mb-6">
                    Land Your Dream Job with a{" "}
                    <span className="text-primary">Perfect Resume</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                    Upload your resume and get instant AI feedback on ATS compatibility,
                    keyword optimization, and content quality.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Button size="lg" className="gradient-primary text-primary-foreground text-base px-8" asChild>
                        <Link to="/auth">
                            Analyze My Resume <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                    <Button size="lg" variant="outline" className="text-base px-8" asChild>
                        <a href="#features">Learn More</a>
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default HeroSection