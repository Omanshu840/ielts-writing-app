import { Outlet } from 'react-router-dom'
import { Header } from '@/components/header'
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/sonner"


export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="min-h-screen bg-muted/40">
        {/* Full-width header */}
        <Header />
        <Toaster />
        
        {/* Contained main content */}
        <main className="py-8">
          <div className="container max-w-7xl mx-auto px-4">
            <Outlet />
          </div>
        </main>
      </div>
    </ThemeProvider>
  )
}