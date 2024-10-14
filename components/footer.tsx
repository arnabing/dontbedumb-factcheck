import React from 'react'
import Link from 'next/link'
import { Code } from 'lucide-react'

const Footer: React.FC = () => {
  return (
    <footer className="w-fit p-1 md:p-2 fixed bottom-0 right-0">
      <Link
        href="https://www.linkedin.com/in/arnabing/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        <Code size={16} className="mr-1" />
        <span className="pr-2">by Arnab </span>
      </Link>
    </footer>
  )
}

export default Footer
