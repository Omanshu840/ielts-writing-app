import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Highlight } from "@/lib/band9-essays"
import { cn } from "@/lib/utils"

interface HighlightedTextProps {
  text: string
  highlights: Highlight[]
  className?: string
}

export function HighlightedText({ text, highlights, className }: HighlightedTextProps) {
  
  const getHighlightClasses = (type: Highlight['type']) => {
    switch(type) {
      case 'vocabulary':
        return 'bg-purple-100 hover:bg-purple-200 border-purple-300 text-purple-800'
      case 'phrase':
        return 'bg-blue-100 hover:bg-blue-200 border-blue-300 text-blue-800'
      case 'grammar':
        return 'bg-green-100 hover:bg-green-200 border-green-300 text-green-800'
      case 'structure':
        return 'bg-amber-100 hover:bg-amber-200 border-amber-300 text-amber-800'
      default:
        return 'bg-gray-100 hover:bg-gray-200'
    }
  }

  const processText = () => {
    if (!highlights || highlights.length === 0) return text

    const parts = []
    let lastIndex = 0
    const sortedHighlights = [...highlights].sort((a, b) => 
      text.indexOf(a.text) - text.indexOf(b.text)
    )

    sortedHighlights.forEach((highlight) => {
      const index = text.indexOf(highlight.text, lastIndex)
      if (index === -1) return

      // Add text before the highlight
      if (index > lastIndex) {
        parts.push(text.slice(lastIndex, index))
      }

      // Add the highlight
      parts.push(
        <Popover key={index}>
          <PopoverTrigger asChild>
            <span
              className={cn(
                "border-b-2 cursor-pointer px-1 rounded-sm",
                getHighlightClasses(highlight.type)
              )}
              onClick={(e) => {
                e.stopPropagation()
              }}
            >
              {highlight.text}
            </span>
          </PopoverTrigger>
          <PopoverContent className="w-80">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className={cn(
                  "px-2 py-1 rounded-full text-xs font-medium capitalize",
                  getHighlightClasses(highlight.type)
                )}>
                  {highlight.type}
                </span>
                <h4 className="font-medium">{highlight.text}</h4>
              </div>
              <p className="text-sm">{highlight.explanation}</p>
              {highlight.example && (
                <div className="mt-2 p-2 bg-muted rounded">
                  <p className="text-xs text-muted-foreground">Example:</p>
                  <p className="text-sm">{highlight.example}</p>
                </div>
              )}
            </div>
          </PopoverContent>
        </Popover>
      )

      lastIndex = index + highlight.text.length
    })

    // Add remaining text
    if (lastIndex < text.length) {
      parts.push(text.slice(lastIndex))
    }

    return parts.length > 0 ? parts : text
  }

  return (
    <div className={cn("whitespace-pre-line leading-relaxed", className)}>
      {processText()}
    </div>
  )
}