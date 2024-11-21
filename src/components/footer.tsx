"use client"
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-gray-100 mt-auto">
      <div className="container mx-auto px-8 py-6 border-t-2 border-gray-300">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-auto mb-4 md:mb-0">
            <p className="text-sm text-gray-600">© 2024 Drukland.de. All rights reserved.</p>
          </div>
          <nav className="flex flex-wrap gap-4">
            <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">Terms of Use</Link>
            <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">Sitemap</Link>
            <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">Company Information</Link>
            <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">Cookie settings</Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
