import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import type { Mistake, WritingAttempt } from '@/lib/types'
import { updateAttempt } from '@/lib/db/attempts'
import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { toast } from 'sonner';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

export function AddCorrection({ attempt }: { attempt: WritingAttempt }) {
  const [improved, setImproved] = useState(attempt.improved)
  const [feedback, setFeedback] = useState(attempt.feedback)
  const [mistakes, setMistakes] = useState<Mistake[]>(attempt.mistakes)
  const [jsonInput, setJsonInput] = useState('')
  const [activeTab, setActiveTab] = useState('form');

  const addMistake = () => {
    setMistakes([...mistakes, {
      id: Date.now().toString(),
      type: 'grammar',
      description: '',
      severity: 'medium',
      originalLine: '',
      fixedLine: ''
    }])
  }

  const updateMistake = (index: number, field: keyof Mistake, value: string) => {
    const newMistakes = [...mistakes]
    newMistakes[index] = { ...newMistakes[index], [field]: value }
    setMistakes(newMistakes)
  }

  const removeMistake = (index: number) => {
    setMistakes(mistakes.filter((_, i) => i !== index))
  }

  const handleJsonSubmit = () => {
    try {
      const data = JSON.parse(jsonInput)
      if (data.improved) setImproved(data.improved)
      if (data.feedback) setFeedback(data.feedback)
      if (Array.isArray(data.mistakes)) setMistakes(data.mistakes)
      toast.success("JSON imported successfully", {
        description: "The correction data has been loaded from JSON"
      })
    } catch (error) {
        console.log(error);
      toast.error("Invalid JSON", {
        description: "Please check your JSON format and try again"
      })
    }
  }

  const generateJsonTemplate = () => {
    const template = {
      improved: "",
      feedback: "",
      mistakes: [
        {
          id: "1",
          type: "grammar",
          description: "Example mistake description",
          severity: "medium",
          highlightedText: "example error",
          originalLine: "Original sentence with error",
          fixedLine: "Corrected version of sentence"
        }
      ]
    }
    setJsonInput(JSON.stringify(template, null, 2))
  }

  const handleSubmit = async () => {
    try {
      await updateAttempt(attempt.id, {
        improved,
        feedback,
        mistakes
      })
      toast.success("Correction saved successfully")
    } catch (error) {
        console.log(error);
      toast.error("Failed to save correction", {
        description: "Please try again or check your connection"
      })
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Add Correction</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="form">Form Input</TabsTrigger>
            <TabsTrigger value="json">JSON Input</TabsTrigger>
          </TabsList>
          
          <TabsContent value="form" className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="improved">Improved Version</Label>
              <Textarea
                id="improved"
                value={improved}
                onChange={(e) => setImproved(e.target.value)}
                placeholder="Enter corrected version..."
                className="min-h-[200px] font-mono"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="feedback">Feedback</Label>
              <Textarea
                id="feedback"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                placeholder="Enter overall feedback..."
                className="min-h-[100px]"
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <Label>Mistakes</Label>
                <Button variant="outline" size="sm" onClick={addMistake}>
                  Add Mistake
                </Button>
              </div>

              {mistakes.length === 0 ? (
                <div className="text-center py-4 text-muted-foreground">
                  No mistakes added yet
                </div>
              ) : (
                <div className="space-y-3">
                  {mistakes.map((mistake, index) => (
                    <div key={mistake.id} className="border p-4 rounded space-y-3">
                      <div className="flex justify-between items-center">
                        <h4 className="font-medium">Mistake {index + 1}</h4>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeMistake(index)}
                          className="text-red-500 hover:text-red-700"
                        >
                          Remove
                        </Button>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor={`type-${index}`}>Type</Label>
                          <select
                            id={`type-${index}`}
                            value={mistake.type}
                            onChange={(e) => updateMistake(index, 'type', e.target.value)}
                            className="border p-2 rounded w-full"
                          >
                            <option value="grammar">Grammar</option>
                            <option value="vocabulary">Vocabulary</option>
                            <option value="coherence">Coherence</option>
                            <option value="task-achievement">Task Achievement</option>
                          </select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor={`severity-${index}`}>Severity</Label>
                          <select
                            id={`severity-${index}`}
                            value={mistake.severity}
                            onChange={(e) => updateMistake(index, 'severity', e.target.value)}
                            className="border p-2 rounded w-full"
                          >
                            <option value="low">Low</option>
                            <option value="medium">Medium</option>
                            <option value="high">High</option>
                          </select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor={`desc-${index}`}>Description</Label>
                        <Input
                          id={`desc-${index}`}
                          value={mistake.description}
                          onChange={(e) => updateMistake(index, 'description', e.target.value)}
                          placeholder="Describe the mistake"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor={`highlight-${index}`}>Highlighted Text (optional)</Label>
                        <Input
                          id={`highlight-${index}`}
                          value={mistake.highlightedText || ''}
                          onChange={(e) => updateMistake(index, 'highlightedText', e.target.value)}
                          placeholder="Text to highlight in original"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor={`original-${index}`}>Original Line</Label>
                          <Textarea
                            id={`original-${index}`}
                            value={mistake.originalLine || ''}
                            onChange={(e) => updateMistake(index, 'originalLine', e.target.value)}
                            placeholder="Original sentence with mistake"
                            className="min-h-[60px]"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor={`fixed-${index}`}>Fixed Line</Label>
                          <Textarea
                            id={`fixed-${index}`}
                            value={mistake.fixedLine || ''}
                            onChange={(e) => updateMistake(index, 'fixedLine', e.target.value)}
                            placeholder="Corrected version"
                            className="min-h-[60px]"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </TabsContent>

          <TabsContent value="json" className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <Label htmlFor="json">Paste JSON Data</Label>
                <Button variant="outline" size="sm" onClick={generateJsonTemplate}>
                  Generate Template
                </Button>
              </div>
              <Textarea
                id="json"
                value={jsonInput}
                onChange={(e) => setJsonInput(e.target.value)}
                placeholder={`Paste your JSON here in this format:\n\n${JSON.stringify({
                  improved: "The corrected version of the entire essay",
                  feedback: "Overall feedback about the essay",
                  mistakes: [
                    {
                      id: "unique-id",
                      type: "grammar",
                      description: "Mistake description",
                      severity: "medium",
                      highlightedText: "optional highlighted text",
                      originalLine: "Original sentence with mistake",
                      fixedLine: "Corrected sentence"
                    }
                  ]
                }, null, 2)}`}
                className="min-h-[300px] font-mono text-sm"
              />
            </div>
            <Button onClick={handleJsonSubmit} className="w-full">
              Import from JSON
            </Button>
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter>
        <Button onClick={handleSubmit} className="w-full">
          Save Correction
        </Button>
      </CardFooter>
    </Card>
  )
}