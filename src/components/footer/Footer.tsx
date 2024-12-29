import { FaFacebook, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { FiHome } from "react-icons/fi";

// import { TiSocialLinkedinCircular } from "react-icons/ti";

import Link from 'next/link'
import module from './footer.module.css'

const navigation = [
  { name: 'ماذا  قالو عنا', href: '#', current: true },
  { name: 'من نحن', href: '#', current: false },
  { name: 'الخدمات', href: '#', current: false },
  { name: 'المنتجات', href: '#', current: false },
  { name: 'الباقات', href: '#', current: false },
  { name: 'لماذا ماسا', href: '#', current: false },
  { name: 'العملاء', href: '#', current: false },
]


export default function Footer() {
  return (
    <footer className={module.footer}>
        <div>
          <div className="mx-auto w-full py-20">
            <div className="flex flex-wrap text-right lg:text-right">
              <div className="w-full lg:w-6/12 px-4">
                <div className="flex flex-wrap items-top">
                  <div className="w-full lg:w-5/12 lg:mr-20">
                      <h1 className="mb-6 text-3xl font-semibold text-gray-900 uppercase dark:text-white">روابط مفيدة</h1>
                      <ul className="text-gray-500 dark:text-gray-400 font-medium">
                        {navigation.map((item) => (
                          <li key={item.name} className="mb-4 text-xl">
                            <Link
                              href={item.href}
                              aria-current={item.current ? 'page' : undefined}
                              className={`rounded-md px-3 py-2 text-9sm font-medium ${
                                item.current ? ' text-white' : 'text-gray-300 '
                                }`
                              }
                            >
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                  </div>
                  <div className="w-full mx-2 lg:w-5/12">
                      <h1 className="mb-8 text-3xl font-semibold text-gray-900 uppercase dark:text-white">من نحن</h1>
                      <div className="mt-6">
                        <p className="text-white text-xl">
                        شركة سعودية تعمل منذ اكثر من 10 سنوات في حلول تقنية المعلومات. نتميز ببناء شراكة قوية مع عملائنا للوصول الى افضل الحلول التقنية من خلال الخبرات العالية والمتنوعة لفريق العمل 
                        </p>
                      </div>
                      <div className="mt-8 flex">
                        <div className="mx-2">
                          <FaFacebook fontSize={40} className="rounded-full text-white" />
                        </div>
                        <div className="bg-white rounded-full px-2 py-2 mx-2">
                          <FaLinkedinIn fontSize={25} className={module.icon} />
                        </div>
                        <div className="bg-white rounded-full px-2 py-2 mx-2">
                          <FaXTwitter fontSize={25} className={module.icon} />
                        </div>
                        <div className="bg-white rounded-full px-2 py-2 mx-2">
                          <FiHome fontSize={25} className={module.icon} />
                        </div>
                      </div>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-4/12 lg:mx-32 px-6 mt-4">
                  <h2 className="mb-6 text-3xl font-semibold text-gray-900 uppercase dark:text-white">إشترك الأن</h2>
                  <p className="text-white text-xl">
                    <span>لاتفوت تحديثاتنا المستقبلية! إشترك اليوم</span>
                  </p>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    required
                    placeholder="بريدك هنا"
                    autoComplete="email"
                    className="min-w-0 flex-auto rounded-full mt-10 bg-white px-3.5 py-4 text-base text-customBlue-50 outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-customBlue-50 placeholder:text-xl focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-customBlue-50 sm:text-sm/6 w-80"
                  />
              </div>
            </div>
          </div>
          <div className="mx-auto w-full">
            <div className="flex flex-wrap text-center">
              <div className="w-full px-4 py-6 bg-primary dark:bg-primary">
                <span className="text-xl text-white text-center">
                  <span>
                  جميع الحقوق محفوظ لشركة ماسا
                  </span>
                  <span className="mx-2">
                    2024
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
    </footer>
  )
}
