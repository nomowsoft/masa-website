import Image from 'next/image';
import Link from 'next/link';
import SocialMedia from './social_media';
import { FaLocationDot, FaPhone, FaEarthAmericas } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";


export default function Footer() {
  return (
    <footer className="bg-success py-8 px-20">
        <div className="mx-auto max-w-screen-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="mt-0 mx-3 md:mx-0">
                    <Link href="/" className="flex items-center justify-center md:justify-start mb-4 sm:mb-0">
                        <Image height={20} width={150} src="/footer/Masa_logo.svg" alt="Flowbite Logo" />
                    </Link>
                    <p className="text-white mt-3 text-lg text-justify py-3">
                    شركة ماسا تكنولوجي هي وحدة الأعمال الرقمية للشركة العربية المتخصصة للاستشارات وتقنية المعلومات. تقدم خدمات تقنية متنوعة واستشارات وتوفر الموارد التقنية لتمكين العملاء من تحقيق أهدافهم في رحلة التحول الرقمي بطريقة مثالية تساعد متخذي القرار على معرفة العائد على الاستثمار (ROI). نفتخر بشراكتنا مع شركة أودوو منذ 10 سنوات في تقديم نموذج تحول رقمي مميز يتحدث عنه العملاء.
                    </p>
                </div>
                <div className="flex flex-col justify-center md:justify-end md:items-end mt-16 md:mt-0">
                    <div className="flex gap-8 justify-center pb-10">
                        <div>
                            <Link href="/" className="text-white text-xl">الرئسية</Link>
                        </div>
                        <div>
                            <Link href="/" className="text-white text-xl">الباقات</Link>
                        </div>
                        <div>
                            <Link href="/" className="text-white text-xl">الدعم الفني</Link>
                        </div>
                        <div>
                            <Link href="/" className="text-white text-xl">تواصل معنا</Link>
                        </div>
                    </div>
                    <div className="mb-6 md:mb-0 text-xl text-white mt-5 md:mt-0 grid grid-cols-1 md:grid-cols-2 text-center md:text-right">
                        <div className="md:flex md:flex-wrap md:justify-end items-center">
                            <div className="md:hidden mx-2 flex justify-center">
                                <span><FaLocationDot /></span>
                            </div>
                            <div className="text-lg md:text-left">
                                <p>P.O.Box 295940</p>
                                <p>12612 Riyadh</p>
                                <p>المملكة العربية السعودية</p>
                            </div>
                            <div className="mx-2 hidden md:flex justify-center">
                                <span><FaLocationDot /></span>
                            </div>
                        </div>
                        <div>
                            <div className="md:flex flex-wrap justify-end  mt-2 items-center">
                                <div>
                                    <p className="text-lg">+966 53 780 2802</p>
                                </div>
                                <div className="mx-2 flex justify-center">
                                    <FaPhone />
                                </div>
                            </div>
                            <div className="md:flex flex-wrap justify-end mt-2 items-center">
                                <div>
                                    <Link href="http://masa.sa" target="new">
                                        <p className="text-lg">http://masa.sa</p>
                                    </Link>
                                </div>
                                <div className="mx-2 flex justify-center">
                                    <FaEarthAmericas />
                                </div>
                            </div>
                            <div className="md:flex flex-wrap justify-end mt-2 items-center">
                                <div>
                                    <p className="text-lg">info@masa.sa</p>
                                </div>
                                <div className="mx-2 flex justify-center">
                                    <MdEmail />
                                </div>
                            </div>
                        </div>
                    </div>
                    <SocialMedia />
                </div>
            </div>
            <hr className="my-6 border-white sm:mx-auto lg:my-4" />
            <span className="block text-lg text-white text-center py-3">2025 ©<Link href="https://www.odoo.com/partners/masa-lshrk-l-rby-lmtkhss-llstshrt-wtqny-lm-lwmt-988848?country_id=185" className="hover:underline" target="new">جميع الحقوق محفوظة لشركة ماسا</Link></span>
        </div>
    </footer>
  )
}
