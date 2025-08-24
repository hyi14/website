import Image from 'next/image'

export default function SiteHeader() {
  return (
    <header className="mt-10 mb-8">
      <div className="flex items-center gap-6">
        <div className="relative h-20 w-20 rounded-full bg-neutral-200 overflow-hidden">
          <Image
            src="/avatar.jpg"
            alt="Profile photo"
            fill
            sizes="80px"
            className="object-cover"
            priority
          />
        </div>
        
        <div className="prose">
          <h1 className="!m-0">
            Hi, I’m <span className="whitespace-nowrap">Name</span>!
          </h1>
        </div>
      </div>
    </header>
  )
}
