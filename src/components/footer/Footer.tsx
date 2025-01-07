import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-success shadow py-16">
        <div className="mx-auto p-4 md:py-8 md:mx-20 md:rounded-3xl py-5 lg:py-20 md:border md:border-primary ">
            <div className="sm:flex sm:items-center sm:justify-between">
                <a href="https://flowbite.com/" className="flex items-center justify-center md:justify-start mb-4 sm:mb-0">
                    <Image height={20} width={150} src="/footer/Masa_logo.svg" className="h-16" alt="Flowbite Logo" />
                </a>
                <ul className="flex flex-wrap items-center justify-center mb-6 text-xl text-primary">
                    <li>
                        <a href="#" className="hover:underline me-4 md:me-6">الرئسية</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline me-4 md:me-6">الباقات</a>
                    </li>
                </ul>
            </div>
            <hr className="my-6 border-primary sm:mx-auto lg:my-8" />
            <span className="block text-lg text-primary text-center">© 2025 <a href="https://flowbite.com/" className="hover:underline">Masa</a>. All Rights Reserved.</span>
        </div>
    </footer>
  )
}
