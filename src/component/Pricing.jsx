import React from 'react'
import { Card, CardContent } from './ui/card'
import { Button } from './ui/button'
import { Link } from 'react-router-dom'
import { CheckCircle2 } from 'lucide-react'

const pricingPlans = [
    {
        name: "Free",
        price: "$0",
        period: "forever",
        features: ["3 analyses per month", "Basic ATS score", "Formatting tips"],
        cta: "Get Started",
        highlighted: false,
    },
    {
        name: "Pro",
        price: "$12",
        period: "/month",
        features: ["Unlimited analyses", "Advanced AI feedback", "Keyword optimization", "Industry-specific tips", "Priority support"],
        cta: "Start Free Trial",
        highlighted: true,
    },
    {
        name: "Enterprise",
        price: "$49",
        period: "/month",
        features: ["Everything in Pro", "Team accounts", "API access", "Custom branding", "Dedicated support"],
        cta: "Contact Sales",
        highlighted: false,
    },
];

function Pricing() {
    return (
        <section id="pricing" className="py-20 bg-muted/40">
            <div className="container">
                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                        Simple Pricing
                    </h2>
                    <p className="text-muted-foreground text-lg">Pick the plan that fits your needs.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                    {pricingPlans.map((plan) => (
                        <Card
                            key={plan.name}
                            className={`relative shadow-card border-border/50 ${plan.highlighted ? "ring-2 ring-primary shadow-elevated scale-105" : ""
                                }`}
                        >
                            {plan.highlighted && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 gradient-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                                    Most Popular
                                </div>
                            )}
                            <CardContent className="pt-8 pb-6 text-center">
                                <h3 className="font-display font-semibold text-lg mb-2">{plan.name}</h3>
                                <div className="mb-6">
                                    <span className="text-4xl font-display font-bold text-foreground">{plan.price}</span>
                                    <span className="text-muted-foreground text-sm">{plan.period}</span>
                                </div>
                                <ul className="space-y-3 mb-8 text-left">
                                    {plan.features.map((feat) => (
                                        <li key={feat} className="flex items-center gap-2 text-sm text-muted-foreground">
                                            <CheckCircle2 className="h-4 w-4 text-success shrink-0" />
                                            {feat}
                                        </li>
                                    ))}
                                </ul>
                                <Button
                                    className={`w-full ${plan.highlighted ? "gradient-primary text-primary-foreground" : ""}`}
                                    variant={plan.highlighted ? "default" : "outline"}
                                    asChild
                                >
                                    <Link to="/auth">{plan.cta}</Link>
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Pricing