'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { href: '#', label: 'Home', primary: true },
    { href: '#', label: 'Asphalt' },
    { href: '#', label: 'Consulting' },
    { href: '#', label: 'Lab' },
    { href: '#', label: 'Contact' }
  ]

  return (
    <>
      <div className="w-full h-[70px] px-4 py-4 flex justify-between items-center lg:px-[162px] lg:py-2 bg-black-600 z-50">
        <Image 
          src="/logo.png"
          alt="MPI Logo"
          height={50}
          width={50}
        />

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`font-semibold transition-colors hover:text-yellow-600 ${
                link.primary ? 'text-yellow-500' : 'text-gray-600'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none"
        >
          <Image src={"/tabler_icon_menu_2.svg"} alt='Hamburger Menu' width={32} height={32} className='z-50'/>
        </button>
      </div>

      {/* Mobile Navigation Overlay */}
      <div 
        className={`fixed inset-0 bg-black-600 transform transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } z-40`}
      >
        <nav className="flex flex-col h-full pt-24 px-8">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`py-4 text-lg font-medium transition-colors hover:text-yellow-600 ${
                link.primary ? 'text-yellow-500' : 'text-gray-600'
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  )
}

export default Header