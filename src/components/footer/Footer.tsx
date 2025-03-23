import Image from 'next/image';
import Link from 'next/link';
import SocialMedia from './social_media';
import { FaLocationDot, FaPhone, FaEarthAmericas } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";


export default function Footer() {
  return (
    <footer className="bg-gray-300 py-8 px-5 lg:px-20">
        <div className="mx-auto max-w-screen-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="mt-0 mx-3 md:mx-0">
                    <Link href="/" className="flex items-center justify-center md:justify-start mb-4 sm:mb-0">
                        <Image height={20} width={150} src="/navbar/logo_masa.svg" alt="Flowbite Logo" />
                    </Link>
                    <p className="text-success mt-3 text-lg text-justify py-3">
                     نقدم حلولًا رقمية متكاملة تساعد الشركات على تحقيق أقصى استفادة من التكنولوجيا لتعزيز كفاءتها التشغيلية وتطوير أعمالها. نحن نؤمن بأن الابتكار هو المفتاح لتحقيق النجاح في العصر الرقمي، ونعمل على توفير حلول تقنية متقدمة تلبي احتياجات مختلف القطاعات.                    </p>
                </div>
                <div className="flex flex-col justify-center md:justify-end md:items-end mt-16 md:mt-0">
                    <div className="flex gap-12 justify-center pb-10">
                        <div>
                            <Link href="/" className="text-success text-sm lg:text-xl">الرئسية</Link>
                        </div>
                        <div>
                            <Link href="/services" className="text-success text-sm lg:text-xl">الخدمات</Link>
                        </div>
                        <div>
                            <Link href="/sectors" className="text-success text-sm lg:text-xl">القطاعات</Link>
                        </div>
                        <div>
                            <Link href="/partners" className="text-success text-sm lg:text-xl">الشركاء</Link>
                        </div>
                    </div>
                    <div className="mb-6 md:mb-0 text-xl text-success mt-5 md:mt-0 grid grid-cols-1 md:grid-cols-2 text-center md:text-right">
                        <div className="md:flex md:flex-wrap md:justify-end items-center">
                            <div className="md:hidden  flex justify-center">
                                <span><FaLocationDot /></span>
                            </div>
                            <div className="lg:text-lg md:text-left">
                                <p>P.O.Box 295940</p>
                                <p>12612 Riyadh</p>
                                <p>المملكة العربية السعودية</p>
                            </div>
                            <div className="mr-2 hidden md:flex justify-center">
                                <span><FaLocationDot /></span>
                            </div>
                        </div>
                        <div>
                            <div className="md:flex flex-wrap justify-end  mt-2 items-center">
                                <div>
                                    <p className="lg:text-lg">2802 780 53 966+</p>
                                </div>
                                <div className="mr-2 flex justify-center">
                                    <FaPhone />
                                </div>
                            </div>
                            <div className="md:flex flex-wrap justify-end mt-2 items-center">
                                <div>
                                    <Link href="http://masa.sa" target="new">
                                        <p className="text-lg">http://masa.sa</p>
                                    </Link>
                                </div>
                                <div className="mr-2 flex justify-center">
                                    <FaEarthAmericas />
                                </div>
                            </div>
                            <div className="md:flex flex-wrap justify-end mt-2 items-center">
                                <div>
                                    <p className="lg:text-lg">info@masa.sa</p>
                                </div>
                                <div className="mr-2 flex justify-center">
                                    <MdEmail />
                                </div>
                            </div>
                        </div>
                    </div>
                    <SocialMedia />
                </div>
            </div>
            <hr className="my-6 border-white sm:mx-auto lg:my-4" />
            <span className="block text-lg text-success text-center py-3">2025 ©<Link href="https://www.odoo.com/partners/masa-lshrk-l-rby-lmtkhss-llstshrt-wtqny-lm-lwmt-988848?country_id=185" className="hover:underline" target="new">جميع الحقوق محفوظة لشركة ماسا</Link></span>
        </div>
    </footer>
  )
}
