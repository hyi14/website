'use client'

import Image from 'next/image'

export default function SiteHeader() {
  return (
    <header className="mt-10 mb-8">
      <div className="flex items-center gap-6">
        {/* Avatar placeholder or photo */}
        <div className="relative h-20 w-20 rounded-full bg-neutral-200 overflow-hidden">
          <Image
            src="/avatar.jpg"     // put your file in /public/avatar.jpg
            alt="Profile photo"
            fill
            sizes="80px"
            className="object-cover"
          />
        </div>

        <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
          Hi, I’m <span className="whitespace-nowrap">Your Name</span>!
        </h1>
      </div>
    </header>
  )
}
