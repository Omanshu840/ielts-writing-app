import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import type { WritingAttempt } from '@/lib/types'
import { format } from 'date-fns'

export function AttemptCard({ attempt }: { attempt: WritingAttempt }) {
  return (
    <Card className="hover:shadow-sm transition-shadow hover:border-primary w-full">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg line-clamp-2">
            {attempt.question.substring(0, 100)}...
          </CardTitle>
          <Badge variant="outline" className="text-sm">
            Band {attempt.bandScore}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>{attempt.wordCount} words</span>
          <span>{attempt.timeSpent} mins</span>
          <span>{format(new Date(attempt.date), 'MMM d, yyyy')}</span>
        </div>
      </CardContent>
    </Card>
  )
}