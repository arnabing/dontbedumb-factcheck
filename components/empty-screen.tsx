import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

const exampleMessages = [
  {
    heading: 'Do Haitians eat pets?',
    message: 'Do Haitians eat pets?'
  },
  {
    heading: 'Kamala Harris cheat during the debate?',
    message: 'Kamala Harris cheat during the debate?'
  },
  {
    heading: 'Trump cause January 6th?',
    message: 'Trump cause January 6th?'
  },
  {
    heading: 'Trump vs Harris tax plan? Who benefits?',
    message: 'Trump vs Harris tax plan? Who benefits?'
  }
]

export function EmptyScreen({
  submitMessage,
  className
}: {
  submitMessage: (message: string) => void
  className?: string
}) {
  return (
    <div className={`mx-auto w-full transition-all ${className}`}>
      <div className="bg-background p-2">
        <div className="mt-4 flex flex-col items-start space-y-2 mb-4">
          {exampleMessages.map((message, index) => (
            <Button
              key={index}
              variant="link"
              className="h-auto p-0 text-base"
              name={message.message}
              onClick={async () => {
                submitMessage(message.message)
              }}
            >
              <ArrowRight size={16} className="mr-2 text-muted-foreground" />
              {message.heading}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
