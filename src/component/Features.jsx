import React from 'react'
import { Card, CardContent } from './ui/card'
import { Upload, BarChart3, Zap, Shield } from 'lucide-react'

const features = [
    {
        icon: Upload,
        title: "Easy Upload",
        description: "Upload your resume in PDF, DOCX, or TXT format and get instant analysis.",
    },
    {
        icon: BarChart3,
        title: "ATS Score",
        description: "Get a detailed ATS compatibility score with actionable improvements.",
    },
    {
        icon: Zap,
        title: "AI-Powered Insights",
        description: "Advanced AI analyzes formatting, keywords, and content quality.",
    },
    {
        icon: Shield,
        title: "Privacy First",
        description: "Your resume data is encrypted and never shared with third parties.",
    },
];

function Features() {
    return (
        <section id="features" className="py-20">
            <div className="container">
                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                        Everything You Need
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-xl mx-auto">
                        Comprehensive tools to make your resume stand out from the crowd.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((f) => (
                        <Card key={f.title} className="shadow-card hover:shadow-elevated transition-shadow border-border/50">
                            <CardContent className="pt-6">
                                <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center mb-4">
                                    <f.icon className="h-5 w-5 text-accent-foreground" />
                                </div>
                                <h3 className="font-display font-semibold text-lg text-foreground mb-2">{f.title}</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">{f.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Features