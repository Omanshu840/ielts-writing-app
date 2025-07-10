import { Button } from "@/components/ui/button";
import { FileWarning } from "lucide-react";

export function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-12 text-center">
      <FileWarning className="h-12 w-12 text-muted-foreground mb-4" />
      <h3 className="text-lg font-medium mb-2">No corrections found</h3>
      <p className="text-muted-foreground mb-4">
        Start by adding your first writing correction
      </p>
      <Button>Add Correction</Button>
    </div>
  );
}