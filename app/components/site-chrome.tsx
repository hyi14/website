'use client'

import { usePathname } from 'next/navigation'
import SiteHeader from './site-header'
import { Navbar } from './nav'

export default function SiteChrome() {
  const pathname = usePathname()
    const isArticle = pathname?.startsWith('/blog/') ?? false
  if (isArticle) return null

  return (
    <div className={isArticle ? 'hidden' : ''} aria-hidden={isArticle}>
      <SiteHeader />
      <Navbar />
    </div>
    // <>
    //   <SiteHeader />
    //   <Navbar />
    // </>
  )
}
