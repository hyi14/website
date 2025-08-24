import Link from 'next/link'
import type { ReactNode } from 'react'

export default function BlogArticleLayout({ children }: { children: ReactNode }) {
  return (
    <section className="space-y-8">
      <div>
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-[0.5rem] hover:bg-[#F3F4F6] active:bg-[#E5E7EB] text-sm transition"
        >
          <span aria-hidden>←</span>
          Back to blog
        </Link>
      </div>
      {children}
      <div>
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-[0.5rem] hover:bg-[#F3F4F6] active:bg-[#E5E7EB] text-sm transition"
        >
          <span aria-hidden>←</span>
          Back to blog
        </Link>
      </div>
    </section>
  )
}
