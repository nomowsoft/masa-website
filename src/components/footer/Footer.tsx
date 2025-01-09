import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-info shadow py-6">
        <div className="mx-auto p-4 md:py-6 md:mx-20 md:rounded-3xl py-4 lg:py-4 md:border md:border-success ">
            <div className="sm:flex sm:items-center sm:justify-between">
                <a href="https://flowbite.com/" className="flex items-center justify-center md:justify-start mb-4 sm:mb-0">
                    <Image height={20} width={150} src="/navbar/Masa_logo.svg" className="h-16" alt="Flowbite Logo" />
                </a>
                <ul className="flex flex-wrap items-center justify-center mb-6 text-xl text-success">
                    <li>
                        <a href="#" className="hover:underline me-4 md:me-6">الرئسية</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline me-4 md:me-6">الباقات</a>
                    </li>
                </ul>
            </div>
            <hr className="my-6 border-success sm:mx-auto lg:my-8" />
            <span className="block text-lg text-success text-center">2025 ©<a href="https://flowbite.com/" className="hover:underline">جميع الحقوق محفوظة لشركة ماسا</a></span>
        </div>
    </footer>
  )
}
