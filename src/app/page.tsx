"use client"

import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { ArrowRight, Home, LogIn, LayoutDashboard, Sparkles } from 'lucide-react'

export default function NavigationPage() {
    const router = useRouter()

    return (
        <div className="min-h-screen flex items-center justify-center bg-background">
            <div className="max-w-md w-full p-8">
                {/* Optional Header */}
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                        <Sparkles className="h-8 w-8 text-primary" />
                    </div>
                    <h1 className="text-2xl font-bold">Quick Navigation</h1>
                    <p className="text-muted-foreground mt-2">Choose where to go</p>
                </div>

                {/* Navigation Buttons */}
                <div className="space-y-3">
                    <Button
                        onClick={() => router.push('/test')}
                        className="w-full h-12"
                        variant="default"
                        size="lg"
                    >
                        <Home className="mr-2 h-5 w-5" />
                        Test Page
                        <ArrowRight className="ml-auto h-5 w-5" />
                    </Button>

                    <Button
                        onClick={() => router.push('/dashboard')}
                        className="w-full h-12"
                        variant="secondary"
                        size="lg"
                    >
                        <LayoutDashboard className="mr-2 h-5 w-5" />
                        Dashboard
                        <ArrowRight className="ml-auto h-5 w-5" />
                    </Button>

                    <Button
                        onClick={() => router.push('/login')}
                        className="w-full h-12"
                        variant="outline"
                        size="lg"
                    >
                        <LogIn className="mr-2 h-5 w-5" />
                        Login
                        <ArrowRight className="ml-auto h-5 w-5" />
                    </Button>
                </div>

                {/* Optional Footer */}
                <div className="mt-8 text-center">
                    <p className="text-xs text-muted-foreground">
                        Built with Next.js & shadcn/ui
                    </p>
                </div>
            </div>
        </div>
    )
}