import { Link } from 'react-router-dom'

export function Branding() {
  return (
    <Link to="/" className="flex items-center gap-2">
      {/* <img 
        src="/ielts-logo.png" 
        alt="IELTS Writing Logo"
        className="h-8 w-8 object-contain"
      /> */}
      <span className="text-xl font-bold">IELTS Writing Coach</span>
    </Link>
  )
}