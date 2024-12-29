import { Disclosure, DisclosureButton, DisclosurePanel} from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { FaPhone } from "react-icons/fa6";
import Link from 'next/link'
import module from './header.module.css'
import Image from 'next/image';

const navigation = [
  { name: 'ماذا  قالو عنا', href: '#', current: true },
  { name: 'من نحن', href: '#', current: false },
  { name: 'الخدمات', href: '#', current: false },
  { name: 'المنتجات', href: '#', current: false },
  { name: 'الباقات', href: '#', current: false },
  { name: 'لماذا ماسا', href: '#', current: false },
  { name: 'العملاء', href: '#', current: false },
]

export default function Header() {
  return (
    <Disclosure as="nav" className={module.header}>
      <div className="mx-auto  px-2 py-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center mx-5 rounded-md p-2 text-gray-400">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block size-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-start sm:items-stretch">
            <div className="flex shrink-0 items-center mx-10">
              <Image
                width={50}
                height={50}
                alt="Your Company"
                src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
                className="h-8 w-auto"
              />
            </div>
            <div className="hidden sm:ml-6 sm:block mx-20">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={`rounded-md px-3 py-2 text-sm font-medium ${item.current ? ' text-white' : 'text-gray-300 '}`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 hidden md:flex">
            <button
              type="button"
              className="relative rounded-sm  p-1 text-white "
            >
              <div className="flex items-center">
                <div className="text-left">
                  <div>
                    <span>اتصل بنا</span>
                  </div>
                  <div>
                    <span>+966 5378 02802</span>
                  </div>
                </div>
                <div className="mx-5 sm-mx-2">
                  <FaPhone className="w-6 h-6"/>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={`block rounded-md px-3 py-2 text-base font-medium ${item.current ? ' text-white' : 'text-gray-300 hover:text-white'}`}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}
