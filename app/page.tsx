import Image from 'next/image'
import { Chat } from '@/components/chat'
import { generateId } from 'ai'
import { AI } from './actions'

export const maxDuration = 60

export default function Page() {
  const id = generateId()
  return (
    <div className="flex flex-col items-center justify-start min-h-screen px-4 pt-8 sm:pt-12 md:pt-16 pb-14 md:pb-24">
      <div className="w-full max-w-[300px] sm:max-w-[408px] mb-2 sm:mb-4 md:mb-6">
        <Image
          src="/Dontbedumblogo.png"
          alt="Don't Be Dumb Logo"
          width={408}
          height={138}
          className="w-full h-auto"
          priority
        />
      </div>
      <div className="w-full max-w-xl sm:max-w-2xl md:max-w-3xl pt-2 sm:pt-4 md:pt-6">
        <AI initialAIState={{ chatId: id, messages: [] }}>
          <Chat id={id} />
        </AI>
      </div>
    </div>
  )
}
