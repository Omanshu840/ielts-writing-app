import type { Correction } from "@/lib/types";
import { MistakeTag } from "./mistake-tag";
import ReactMarkdown from "react-markdown";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Info } from "lucide-react";

export function CorrectionCard({ correction }: { correction: Correction }) {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl">Writing Correction</CardTitle>
          <Badge variant="outline" className="text-sm">
            Band {correction.bandScore}
          </Badge>
        </div>
        <Separator />
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <h3 className="font-medium">Original Sentence</h3>
          <Alert variant="destructive" className="text-sm">
            <AlertDescription>{correction.original}</AlertDescription>
          </Alert>
        </div>
        
        <div className="space-y-2">
          <h3 className="font-medium">Corrected Version</h3>
          <Alert variant="default" className="bg-emerald-50 border-emerald-200">
            <AlertDescription className="text-emerald-900">
              {correction.corrected}
            </AlertDescription>
          </Alert>
        </div>
        
        <div className="space-y-2">
          <h3 className="font-medium">Explanation</h3>
          <div className="p-4 bg-muted rounded-md text-sm">
            <ReactMarkdown>{correction.explanation}</ReactMarkdown>
          </div>
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Info className="h-4 w-4 text-muted-foreground" />
            <h3 className="font-medium">Mistakes Found</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {correction.mistakes.map((mistake) => (
              <MistakeTag key={mistake.id} mistake={mistake} />
            ))}
          </div>
        </div>
        
        <Separator />
        
        <div className="text-sm text-muted-foreground text-right">
          Corrected on {new Date(correction.date).toLocaleDateString()}
        </div>
      </CardContent>
    </Card>
  );
}