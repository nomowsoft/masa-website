"use client"
import Link from "next/link"
import { usePathname } from "next/navigation";

const Navitem = ({ name, href }: { name: string; href: string }) => {
  const pathname = usePathname();
  const isActive = (pathname === href)
  return (
    <li>
      <Link className={`block py-2 pr-4 pl-3 text-2xl ${ isActive ? 'text-success' : 'text-gray-500'}`} href={href}>
        {name}
      </Link>
    </li>
  )
}

export default Navitem