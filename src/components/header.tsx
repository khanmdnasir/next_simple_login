"use client"

import { Input } from '@/components/ui/input'
import { Mail, HelpCircle, Phone, User, ShoppingCart, Truck, ChevronDown } from 'lucide-react'

export function Header() {
  return (
    <header className="bg-gray-200">
      <div className="container flex mx-auto justify-end items-center py-2 px-4">
        <div className="flex space-x-4 text-sm">
          <a href="#" className="flex items-center space-x-1">
            <HelpCircle size={16} />
            <span>FAQ</span>
          </a>
          <a href="#" className="flex items-center space-x-1">
            <Mail size={16} />
            <span>Send Inquiry</span>
          </a>
          <a href="#" className="flex items-center space-x-1">
            <Phone size={16} />
            <span>Live Support</span>
          </a>
          <a href="#" className="flex items-center space-x-1">
            <User size={16} />
            <span>Contact</span>
          </a>
        </div>
      </div>
      <div className="bg-white border-b-2 border-gray-300">
        <div className="container mx-auto flex justify-between items-center py-4 px-4">
          <div className="text-2xl font-bold">Drukland.de</div>
          <nav className="flex space-x-6 items-center">
            <a href="#" className="flex items-center space-x-1">
              <span>Business</span>
              <ChevronDown size={16} />
            </a>
            <a href="#" className="flex items-center space-x-1">
              <span>Products</span>
              <ChevronDown size={16} />
            </a>
            <a href="#">About Us</a>
            <Input type="search" placeholder="Search" className="w-64" />
            <Truck size={24} />
            <User size={24} />
            <ShoppingCart size={24} />
          </nav>
          
        </div>
      </div>
    </header>
  )
}

