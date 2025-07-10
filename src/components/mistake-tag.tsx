import type { Mistake } from '@/lib/types'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

const mistakeTypeMap = {
  grammar: {
    bg: 'bg-amber-100',
    text: 'text-amber-800',
    border: 'border-amber-300'
  },
  vocabulary: {
    bg: 'bg-blue-100',
    text: 'text-blue-800',
    border: 'border-blue-300'
  },
  coherence: {
    bg: 'bg-purple-100',
    text: 'text-purple-800',
    border: 'border-purple-300'
  },
  'task-achievement': {
    bg: 'bg-green-100',
    text: 'text-green-800',
    border: 'border-green-300'
  }
}

const severityMap = {
  low: 'border-green-400',
  medium: 'border-yellow-400',
  high: 'border-red-400'
}

export function MistakeTag({ mistake }: { mistake: Mistake }) {
  const typeStyles = mistakeTypeMap[mistake.type]
  
  return (
    <Badge
      variant="outline"
      className={cn(
        'font-medium capitalize hover:bg-opacity-80 transition-colors',
        typeStyles.bg,
        typeStyles.text,
        typeStyles.border,
        severityMap[mistake.severity]
      )}
    >
      {mistake.type.replace('-', ' ')} • {mistake.severity}
      {mistake.highlightedText && (
        <span className="ml-1 font-normal">({mistake.highlightedText})</span>
      )}
    </Badge>
  )
}