'use client'

import Image from 'next/image'

export default function SiteHeader() {
  return (
    <header className="mt-10 mb-8">
      <div className="flex items-center gap-6">
        {/* Avatar (place an image at /public/avatar.jpg). If missing, the gray circle shows. */}
        <div className="relative h-28 w-28 rounded-full bg-neutral-200 overflow-hidden">
          <Image
            src="/avatar.jpg"
            alt="Profile photo"
            fill
            sizes="112px"
            className="object-cover"
          />
        </div>

        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
          Hi, I’m <span className="whitespace-nowrap">Your Name</span>!
        </h1>
      </div>
    </header>
  )
}
