import { useState, useEffect, useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card'
import { ArrowLeft, Clock, Save } from 'lucide-react'
import { countWords, formatTime } from '@/lib/utils'
import { createAttempt } from '@/lib/db/attempts'
import type { WritingAttempt } from '@/lib/types'

export function AttemptEssay() {
  const { taskType } = useParams()
  const navigate = useNavigate()
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  
  const [question, setQuestion] = useState('')
  const [essay, setEssay] = useState('')
  const [timeLeft, setTimeLeft] = useState(
    taskType === 'task1' ? 20 * 60 : 40 * 60 // Convert minutes to seconds
  )
  const [isRunning, setIsRunning] = useState(false)
  const [wordCount, setWordCount] = useState(0)

  // Calculate word count
  useEffect(() => {
    setWordCount(essay.trim() ? essay.trim().split(/\s+/).length : 0)
  }, [essay])

  // Timer logic
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null
    
    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1)
      }, 1000)
    } else if (timeLeft === 0) {
      setIsRunning(false)
      // Auto-submit when time runs out?
    }
    
    return () => {
      if (interval) clearInterval(interval)
    }
  }, [isRunning, timeLeft])

  const startTimer = () => {
    setIsRunning(true)
    textareaRef.current?.focus()
  }

  const pauseTimer = () => {
    setIsRunning(false)
  }

  const resetTimer = () => {
    setIsRunning(false)
    setTimeLeft(taskType === 'task1' ? 20 * 60 : 40 * 60)
  }

  const handleSubmit = async () => {
    if (!essay.trim() || !question.trim()) return
  
    const newAttempt: Omit<WritingAttempt, 'id'> = {
        taskType: taskType as 'task1' | 'task2',
        question,
        original: essay,
        improved: '', // You'll fill this after manual correction
        feedback: '', // You'll fill this after manual correction
        mistakes: [], // You'll fill this after manual correction
        date: new Date().toISOString(),
        bandScore: 0, // Temporary, update after correction
        wordCount: countWords(essay),
        timeSpent: taskType === 'task1' ? 20 : 40 - Math.floor(timeLeft / 60)
    }

    const createdAttempt = await createAttempt(newAttempt)
    
    if (createdAttempt) {
        navigate(`/attempt/${createdAttempt.id}`)
    }
  }

  return (
    <div className="space-y-6 w-full">
      <Button 
        variant="outline" 
        onClick={() => navigate(-1)} 
        className="gap-2"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to questions
      </Button>

      <Card>
        <CardHeader>
          <CardTitle className="flex justify-between items-center">
            <span>IELTS Writing {taskType === 'task1' ? 'Task 1' : 'Task 2'}</span>
            <div className="flex items-center gap-2 text-lg font-medium">
              <Clock className="h-5 w-5" />
              {formatTime(timeLeft)}
            </div>
          </CardTitle>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="question">Question Prompt</Label>
            <Textarea
              id="question"
              placeholder="Paste the question here..."
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              className="min-h-[100px]"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <Label htmlFor="essay">Your Response</Label>
              <span className="text-sm text-muted-foreground">
                {wordCount} words
              </span>
            </div>
            <Textarea
              id="essay"
              ref={textareaRef}
              placeholder="Write your essay here..."
              value={essay}
              onChange={(e) => setEssay(e.target.value)}
              className="min-h-[300px] font-serif text-lg"
              spellCheck={false}
            //   disabled={!isRunning && timeLeft !== (taskType === 'task1' ? 20 * 60 : 40 * 60)}
            />
          </div>
        </CardContent>

        <CardFooter className="flex flex-col gap-4">
          <div className="flex gap-3 w-full">
            {!isRunning && timeLeft === (taskType === 'task1' ? 20 * 60 : 40 * 60) ? (
              <Button onClick={startTimer} className="flex-1">
                Start Writing
              </Button>
            ) : isRunning ? (
              <>
                <Button onClick={pauseTimer} variant="outline" className="flex-1">
                  Pause
                </Button>
                <Button onClick={resetTimer} variant="outline" className="flex-1">
                  Reset
                </Button>
              </>
            ) : (
              <Button onClick={startTimer} className="flex-1">
                Resume Writing
              </Button>
            )}
          </div>

          <Button 
            onClick={handleSubmit}
            disabled={!essay.trim()}
            className="w-full gap-2"
          >
            <Save className="h-4 w-4" />
            Submit Essay
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}