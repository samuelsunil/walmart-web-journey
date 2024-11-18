import Link from 'next/link';
import { Search, ShoppingCart, MapPin, Menu } from 'lucide-react';

import Image from 'next/image';

export function Header() {
  return (
    <header className="bg-walmart">
      {/* Top Bar */}
      <div className="bg-primary text-white">
        <div className="container mx-auto px-4 py-2 flex items-center justify-between">
          {/* Left Side */}
          <div className="flex items-center gap-2">
            <Menu className="w-6 h-6" />
            <Link href="/" className="flex items-center gap-2">
              <Image src="/walmart-logo.png" alt="Walmart" width={32} height={32} />
            </Link>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl mx-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search everything at Walmart online and in store"
                className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-blue-500"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2">
                <Search className="w-5 h-5 text-gray-500" />
              </button>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <div className="text-sm">
                <div>How do you want your items?</div>
                <div>Salinas, 93905 • Salinas Supercenter</div>
              </div>
            </div>
            <Link href="/reorder" className="text-sm text-center">
              <div>Reorder</div>
              <div>My Items</div>
            </Link>
            <Link href="/account" className="text-sm text-center">
              <div>Sign In</div>
              <div>Account</div>
            </Link>
            <Link href="/cart" className="flex items-center">
              <ShoppingCart className="w-6 h-6" />
              <span className="ml-1">$0.00</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="bg-white border-b">
        <div className="container mx-auto px-4">
          <ul className="flex items-center gap-6 py-2">
            <li><Link href="/departments" className="hover:underline">Departments</Link></li>
            <li><Link href="/services" className="hover:underline">Services</Link></li>
            <li><Link href="/savings" className="hover:underline">Savings</Link></li>
            <li><Link href="/grocery" className="hover:underline">Grocery & Essentials</Link></li>
            <li><Link href="/thanksgiving" className="hover:underline">Thanksgiving</Link></li>
            <li><Link href="/holiday" className="hover:underline">Holiday Shop</Link></li>
            <li><Link href="/gifts" className="hover:underline">Gift Ideas</Link></li>
            <li><Link href="/trending" className="hover:underline">New & Trending</Link></li>
            <li><Link href="/toys" className="hover:underline">Toy Shop</Link></li>
            <li><Link href="/home" className="hover:underline">Home</Link></li>
            <li><Link href="/fashion" className="hover:underline">Fashion</Link></li>
            <li><Link href="/electronics" className="hover:underline">Electronics</Link></li>
            <li><Link href="/registry" className="hover:underline">Registry</Link></li>
            <li><Link href="/cash" className="hover:underline">ONE Cash</Link></li>
            <li><Link href="/plus" className="hover:underline">Walmart+</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}