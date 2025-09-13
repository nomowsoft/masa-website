import Image from 'next/image';
import Link from 'next/link';
import SocialMedia from './social_media';
import { FaLocationDot, FaPhone, FaEarthAmericas } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";


export default function Footer() {
  return (
    <footer className="bg-info shadow py-6">
        <div className="mx-5 p-4 md:py-6 md:mx-20 rounded-3xl py-4 lg:py-4">
            <div className="sm:flex sm:items-center sm:justify-between">
                <div>
                    <Link href="/" className="flex items-center justify-center md:justify-start mb-4 sm:mb-0">
                        <Image height={20} width={150} src="/footer/logo masa.svg" className="h-16" alt="Flowbite Logo" />
                    </Link>
                    <ul className="text-center md:text-right my-6 text-xl text-success">
                        <li>
                            <Link href="/" className="hover:underline me-4 md:me-6">الرئسية</Link>
                        </li>
                        <li className="mt-2">
                            <Link href="https://www.odoo.com/partners/masa-lshrk-l-rby-lmtkhss-llstshrt-wtqny-lm-lwmt-988848?country_id=185" className="hover:underline me-4 md:me-6">رابط ماسا على أودو</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <div className="flex flex-wrap justify-center items-center md:mt-6 text-success sm:justify-center">
                        <div className="flex items-center mt-2 mx-5" data-aos="fade-down">
                            <Image src="/banar/odoo14.png" width={90} height={20} alt="..." />
                        </div>
                        <div className="flex items-center mt-2 mx-5" data-aos="fade-down">
                            <Image src="/banar/odoo15.png" width={90} height={20} alt="..." />
                        </div>
                        <div className="flex items-center mt-2 mx-5" data-aos="fade-down">
                            <Image src="/banar/odoo16.png" width={90} height={20} alt="..." />
                        </div>
                        <div className="flex items-center mt-2 mx-5" data-aos="fade-down">
                            <Image src="/banar/odoo17.png" width={90} height={20} alt="..." />
                        </div>
                    </div>
                    <SocialMedia />
                </div>
                <div className="mb-6 text-xl text-success mr-10 mt-5 md:mr-0 md:mt-0">
                    <div className="flex flex-wrap lg:justify-start">
                        <div className="mx-2">
                            <span><FaLocationDot /></span>
                        </div>
                        <div className="text-sm">
                            <p>P.O.Box 295940</p>
                            <p>12612 Riyadh</p>
                            <p>المملكة العربية السعودية</p>
                        </div>
                    </div>
                    <div className="flex flex-wrap lg:justify-start mt-2">
                        <div className="mx-2">
                            <FaPhone />
                        </div>
                        <div>
                            <p className="text-sm">+966 53 780 2802</p>
                        </div>
                    </div>
                    <div className="flex flex-wrap lg:justify-start mt-2">
                        <div className="mx-2">
                            <FaEarthAmericas />
                        </div>
                        <div>
                            <Link href="http://masa.sa" target="new">
                                <p className="text-sm">http://masa.sa</p>
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-wrap lg:justify-start mt-2">
                        <div className="mx-2">
                            <MdEmail />
                        </div>
                        <div>
                            <p className="text-sm">info@masa.sa</p>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="my-6 border-success sm:mx-auto lg:my-8" />
            <span className="block text-lg text-success text-center">2025 ©<Link href="https://www.odoo.com/partners/masa-lshrk-l-rby-lmtkhss-llstshrt-wtqny-lm-lwmt-988848?country_id=185" className="hover:underline" target="new">جميع الحقوق محفوظة لشركة ماسا</Link></span>
        </div>
    </footer>
  )
}
