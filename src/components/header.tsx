import { ModeToggle } from "@/components/mode-toggle";
import { Branding } from "@/components/branding";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function Header() {
    return (
        <header className="w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="flex h-16 items-center justify-between px-4">
                <Branding />

                <div className="flex items-center space-x-4">
                    <Link to="/ielts-writing-app/band9-essays">
                        <Button variant="ghost">Band 9 Examples</Button>
                    </Link>
                    {/* <div className="relative w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search corrections..."
              className="pl-9"
            />
          </div> */}
                    {/* <Button variant="outline">Add Correction</Button> */}
                    <ModeToggle />
                </div>
            </div>
        </header>
    );
}
