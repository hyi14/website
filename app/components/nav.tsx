'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/', label: 'Home' },
  { href: '/blog', label: 'Blog' },
  { href: '/deploy', label: 'Deploy' },
  // { href: '/blog', label: 'Blog' },
  // { href: '/contact', label: 'Contact' },
]

export function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="mb-10">
      <ul className="flex flex-wrap gap-3">
        {links.map(({ href, label }) => {
          const active = href === '/' ? pathname === '/' : pathname.startsWith(href)
          return (
            <li key={href}>
              <Link
                href={href}
                aria-current={active ? 'page' : undefined}
                className={[
                  'px-4 py-2 rounded-full text-sm md:text-base transition',
                  'border border-transparent',
                  'hover:bg-neutral-200 hover:dark:bg-neutral-800',
                  'active:bg-neutral-300 active:dark:bg-neutral-700',
                  active
                    ? 'bg-neutral-200 dark:bg-neutral-800 font-medium'
                    : 'bg-transparent'
                ].join(' ')}
              >
                {label}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

// import Link from 'next/link'

// const navItems = {
//   '/': {
//     name: 'home',
//   },
//   '/blog': {
//     name: 'blog',
//   },
//   'https://vercel.com/templates/next.js/portfolio-starter-kit': {
//     name: 'deploy',
//   },
// }

// export function Navbar() {
//   return (
//     <aside className="-ml-[8px] mb-16 tracking-tight">
//       <div className="lg:sticky lg:top-20">
//         <nav
//           className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
//           id="nav"
//         >
//           <div className="flex flex-row space-x-0 pr-10">
//             {Object.entries(navItems).map(([path, { name }]) => {
//               return (
//                 <Link
//                   key={path}
//                   href={path}
//                   className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1"
//                 >
//                   {name}
//                 </Link>
//               )
//             })}
//           </div>
//         </nav>
//       </div>
//     </aside>
//   )
// }
