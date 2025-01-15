import Image from 'next/image';
import Link from 'next/link';
import SocialMedia from './social_media';
import { FaLocationDot, FaPhone, FaEarthAmericas } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";


export default function Footer() {
  return (
    <footer className="bg-info shadow">
        <div className="mx-5 p-4 md:pb-6 md:mx-20 rounded-3xl py-4 lg:py-4">
            <div className="sm:flex sm:items-center sm:justify-between">
                <div className="mt-0">
                    <Link href="/" className="flex items-center justify-center md:justify-start mb-4 sm:mb-0">
                        <Image height={20} width={150} src="/footer/logo masa.svg" alt="Flowbite Logo" />
                    </Link>
                    <ul className="text-center md:text-right my-6 text-xl text-success">
                        <li>
                            <Link href="/" className="hover:underline me-4 md:me-6">الرئسية</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <div className="flex justify-center">
                        <Link href="https://www.odoo.com/partners/masa-lshrk-l-rby-lmtkhss-llstshrt-wtqny-lm-lwmt-988848?country_id=185" target="new" className="hover:underline me-4 md:me-6 hover:animate-bounce">
                            <Image src="/banar/odoo_gold_partner_rgb.svg" alt="..." width={200} height={20} />
                        </Link>
                    </div>
                    <div className="flex flex-wrap justify-center items-center  text-success sm:justify-center">
                        <div className="flex items-center mx-5">
                            <Image src="/banar/odoo14.png" width={70} height={20} alt="..." />
                        </div>
                        <div className="flex items-center mx-5">
                            <Image src="/banar/odoo15.png" width={70} height={20} alt="..." />
                        </div>
                        <div className="flex items-center mx-5">
                            <Image src="/banar/odoo16.png" width={70} height={20} alt="..." />
                        </div>
                        <div className="flex items-center mx-5">
                            <Image src="/banar/odoo17.png" width={70} height={20} alt="..." />
                        </div>
                    </div>
                </div>
                <div className="mb-6 md:mb-0 text-xl text-success mr-10 mt-5 md:mr-0 md:mt-0">
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
                    <SocialMedia />
                </div>
            </div>
            <hr className="my-6 border-success sm:mx-auto lg:my-4" />
            <span className="block text-lg text-success text-center">2025 ©<Link href="https://www.odoo.com/partners/masa-lshrk-l-rby-lmtkhss-llstshrt-wtqny-lm-lwmt-988848?country_id=185" className="hover:underline" target="new">جميع الحقوق محفوظة لشركة ماسا</Link></span>
        </div>
    </footer>
  )
}
