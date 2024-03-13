'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function () {
  const pathname = usePathname()
    return (
      <nav className="">
        <ul className="flex items-center justify-center text-white flex-wrap bg-teal-500 p-6">
          <li className="mr-5">
            <Link className={`${pathname === '/' ? 'text-blue-700' : ''}`} href="/">Home</Link>
          </li>
          <li className="mr-5">
            <Link className={`${pathname === '/about' ? 'text-blue-700' : ''}`} href="/about">About</Link>
          </li>
          <li className="mr-5">
            <Link className={`${pathname === '/blogpost' ? 'text-blue-700' : ''}`} href="/blogpost">Blog</Link>
          </li>
          <li className="mr-5">
            <Link className={`${pathname === '/contact' ? 'text-blue-700' : ''}`} href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    );
  }
  