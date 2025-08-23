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
    </section>
  )
}

// import Link from 'next/link'

// export default function BlogArticleLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <section className="space-y-8">
//       <div>
//         <Link
//           href="/"
//           className={[
//             // match style: 8px radius + hover/pressed colors
//             'inline-flex items-center gap-2 px-4 py-2 rounded-[0.5rem] transition',
//             'hover:bg-[#F3F4F6] active:bg-[#E5E7EB]',
//             'text-sm'
//           ].join(' ')}
//         >
//           <span aria-hidden>←</span>
//           Back to home
//         </Link>
//       </div>

//       {children}
//     </section>
//   )
// }
