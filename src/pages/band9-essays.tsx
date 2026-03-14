import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { HighlightedText } from "@/components/highlighted-text";
import { Band9Essay } from "@/lib/band9-essays";
import { useEffect, useState } from "react";
import { getBand9Essays } from "@/lib/db/github";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function Band9Essays() {
  const navigate = useNavigate();
  const [band9Essays, setBand9Essays] = useState<Band9Essay[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadBand9Essays = async () => {
      setLoading(true);
      const data = await getBand9Essays();
      setBand9Essays(data);
      setLoading(false);
    };

    loadBand9Essays();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6 w-full">
      <Button
        variant="outline"
        onClick={() => navigate(-1)}
        className="gap-2 mb-6"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to main app
      </Button>

      <h1 className="text-3xl font-bold">Band 9 Essay Examples</h1>
      <p className="text-muted-foreground">
        Study these high-scoring examples to understand what makes an IELTS Band 9 essay
      </p>

      <Tabs defaultValue="task2" className="w-full mt-6">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="task1">Task 1 (Academic)</TabsTrigger>
          <TabsTrigger value="task2">Task 2 (Essay)</TabsTrigger>
        </TabsList>

        <TabsContent value="task1" className="space-y-4">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {band9Essays
              .filter((essay) => essay.taskType === "task1")
              .map((essay) => (
                <Card key={essay.id} className="overflow-hidden py-2">
                  <AccordionItem value={essay.id} className="border-0">
                    <CardHeader className="pb-0 px-0">
                      <AccordionTrigger className="hover:no-underline px-4 py-2 [&[data-state=open]>svg:last-child:rotate-180">
                        <CardTitle className="text-base font-normal  text-left">
                          {essay.question}
                        </CardTitle>
                      </AccordionTrigger>
                    </CardHeader>
                    <AccordionContent className="pt-0">
                      <CardContent className="space-y-4 px-6 pb-6">
                        <div className="space-y-2">
                          <h3 className="font-medium">Band 9 Answer</h3>
                          <div className="p-4 bg-green-50 rounded-md border-l-4 border-green-400 text-base">
                            <HighlightedText
                              text={essay.answer}
                              highlights={essay.highlights || []}
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <h3 className="font-medium">Examiner's Analysis</h3>
                          <div className="p-4 bg-blue-50 rounded-md border-l-4 border-blue-400">
                            <p>{essay.analysis}</p>
                          </div>
                        </div>
                      </CardContent>
                    </AccordionContent>
                  </AccordionItem>
                </Card>
              ))}
          </Accordion>
        </TabsContent>

        <TabsContent value="task2" className="space-y-4">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {band9Essays
              .filter((essay) => essay.taskType === "task2")
              .map((essay) => (
                <Card key={essay.id} className="overflow-hidden py-2">
                  <AccordionItem value={essay.id} className="border-0">
                    <CardHeader className="pb-0 px-0">
                      <AccordionTrigger className="hover:no-underline px-4 py-2 [&[data-state=open]>svg:last-child:rotate-180">
                        <CardTitle className="text-base font-normal text-left">
                          {essay.question}
                        </CardTitle>
                        {essay.topic && (
                          <span className="text-sm text-muted-foreground mt-1">
                            Topic: {essay.topic}
                          </span>
                        )}
                      </AccordionTrigger>
                    </CardHeader>
                    <AccordionContent className="pt-0">
                      <CardContent className="space-y-4 px-6 pb-6">
                        <div className="space-y-2">
                          <h3 className="font-medium">Band 9 Answer</h3>
                          <div className="p-4 bg-green-50 rounded-md border-l-4 border-green-400 text-base">
                            <HighlightedText
                              text={essay.answer}
                              highlights={essay.highlights || []}
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <h3 className="font-medium">Examiner's Analysis</h3>
                          <div className="p-4 bg-blue-50 rounded-md border-l-4 border-blue-400">
                            <p>{essay.analysis}</p>
                          </div>
                        </div>
                      </CardContent>
                    </AccordionContent>
                  </AccordionItem>
                </Card>
              ))}
          </Accordion>
        </TabsContent>
      </Tabs>
    </div>
  );
}