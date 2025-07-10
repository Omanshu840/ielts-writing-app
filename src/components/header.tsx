import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { ModeToggle } from "@/components/mode-toggle";

export function Header() {
  return (
    <header className="w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center justify-between px-4">
        <div className="flex items-center space-x-2">
          <h1 className="text-xl font-bold">IELTS Writing</h1>
          <Badge variant="secondary" className="px-2 py-1 text-xs">
            Corrections
          </Badge>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="relative w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search corrections..."
              className="pl-9"
            />
          </div>
          <Button variant="outline">Add Correction</Button>
          <ModeToggle/>
        </div>
      </div>
    </header>
  )
}