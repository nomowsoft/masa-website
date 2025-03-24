"use client"
import Link from "next/link"
import { usePathname } from "next/navigation";

const Navitem = ({ name, href }: { name: string; href: string }) => {
  const pathname = usePathname();
  const isActive = (pathname === href)
  return (
    <li className="mx-0">
      <Link
        className={`block py-2 lg:px-6 xl:px-12 lg:text-xl xl:text-2xl transition-all duration-300 transform hover:-translate-y-1 hover:text-gray-700 ${isActive ? 'text-success' : 'text-gray-500'}`}
        href={href}
      >
        {name}
      </Link>
    </li>
  )
}

export default Navitem