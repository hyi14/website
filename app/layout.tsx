import './global.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Navbar } from './components/nav'
import SiteHeader from './components/site-header'
import Footer from './components/footer'
import { baseUrl } from './sitemap'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { headers } from 'next/headers'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: 'Hannah Yi',
  description: 'This is my Website.',
  url: baseUrl,
  siteName: 'My Portfolio',
  locale: 'en_US',
  type: 'website',
},
robots: {
  index: true,
  follow: true,
  googleBot: {
    index: true,
    follow: true,
    'max-video-preview': -1,
    'max-image-preview': 'large',
    'max-snippet': -1,
    },
  },
}

const cx = (...c: string[]) => c.filter(Boolean).join(' ')

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = headers().get('x-invoke-path') || ''
  const showHeader = !pathname.startsWith('/blog')

  return (
    <html
      lang="en"
      className={cx(
        // base font + color scheme
        'font-sans antialiased',
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <body
        className={cx(
          // FULL-PAGE SHELL like in your screenshot
          'min-h-screen bg-white dark:bg-gray-900 transition-colors'
        )}
      >
        {/* center the page and add global padding */}
        <main className="max-w-4xl mx-auto p-8 relative">
          <div className="space-y-12">
            <div className="fixed inset-0 hidden dark:block pointer-events-none" />
            {/* header + nav */}
            <SiteHeader />
            <Navbar />

            {/* page content */}
            {children}

            <Footer />
            <Analytics />
            <SpeedInsights />
          </div>
        </main>
      </body>
    </html>
  )
}

// import './global.css'
// import type { Metadata } from 'next'
// import { GeistSans } from 'geist/font/sans'
// import { GeistMono } from 'geist/font/mono'
// import { Navbar } from './components/nav'
// import { Analytics } from '@vercel/analytics/react'
// import { SpeedInsights } from '@vercel/speed-insights/next'
// import Footer from './components/footer'
// import { baseUrl } from './sitemap'

// export const metadata: Metadata = {
//   metadataBase: new URL(baseUrl),
//   title: 'Hannah Yi',
//   description: 'This is my Website.',
//   openGraph: {
//     title: 'My Website',
//     description: 'This is my Website.',
//     url: baseUrl,
//     siteName: 'My Website',
//     locale: 'en_US',
//     type: 'website',
//   },
//   robots: {
//     index: true,
//     follow: true,
//     googleBot: {
//       index: true,
//       follow: true,
//       'max-video-preview': -1,
//       'max-image-preview': 'large',
//       'max-snippet': -1,
//     },
//   },
// }

// const cx = (...classes) => classes.filter(Boolean).join(' ')

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html
//       lang="en"
//       className={cx(
//         'text-black bg-white dark:text-white dark:bg-black',
//         GeistSans.variable,
//         GeistMono.variable
//       )}
//     >
//       <body className="antialiased max-w-xl mx-4 mt-8 lg:mx-auto">
//         <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
//           <Navbar />
//           {children}
//           <Footer />
//           <Analytics />
//           <SpeedInsights />
//         </main>
//       </body>
//     </html>
//   )
// }
