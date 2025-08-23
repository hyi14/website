'use client'

import { usePathname } from 'next/navigation'
import SiteHeader from './site-header'
import { Navbar } from './nav'

export default function SiteChrome() {
  const pathname = usePathname()
  // Hide on individual blog articles ONLY
  const isArticle = pathname?.startsWith('/blog/') ?? false

  if (isArticle) return null
  return (
    <>
      <SiteHeader />
      <Navbar />
    </>
  )
}
