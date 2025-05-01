import { X, Search } from 'lucide-react'
import { cn } from '@/lib/utils'

export function ItemIcon({ children }: { children: React.ReactNode }) {
  return (
    <div className="item-icon">
      {children}
    </div>
  )
}

export function ItemContent({ children }: { children: React.ReactNode }) {
return (
  <div className="flex-1 text-sm">{children}</div>
  )
}

export function CloseButton({ className }: { className?: string }) {
  return (
    <button className={cn("absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-white", className)}>
      <X className="w-5 h-5" />
    </button>
  )
}

export function SearchIcon({ className }: { className?: string }) {
  return (
    <div className={cn("absolute left-0 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center text-[#EEEEEC]", className)}>
      <Search className="w-5 h-5" />
    </div>
  )
}
