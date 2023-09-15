"use client"
import { usePathname,  } from 'next/navigation'
export default function Page() {
    const pathname = usePathname()
    const url = pathname
    console.log(url);
  return (
    <div>page</div>
  )
}
