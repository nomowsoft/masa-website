"use client";
"use client";
import 'aos/dist/aos.css';
import { useEffect } from "react";
import AOS from 'aos';
import Products from "./Home/products/products"
import Customer from "./Home/customer/customer"
import Image from 'next/image';



const l = [
  {
    id: 1,
    name: "محمد علي",
    function: "الرئيس",
    image: "/services/joseph-mcfall.png",
  },
  {
    id: 2,
    name: "محمد علي",
    function: "مدير مشاريع",
    image: "/services/joseph-mcfall.png",
  },
  {
    id: 3,
    name: "محمد علي",
    function: "استشاري",
    image: "/services/joseph-mcfall.png",
  },
  {
    id: 4,
    name: "محمد علي",
    function: "مدير",
    image: "/services/joseph-mcfall.png",
  },
];
export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <div className="bg-primary">
      <section className="bg-hero bg-cover bg-bottom">
        <div className="grid px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-10 lg:grid-cols-12">
          <div className="place-self-center lg:col-span-7" data-aos="fade-left">
            <h1 data-aos="fade-down" className="max-w-2xl mb-4 text-5xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-success">حلول رقمية مبتكرة</h1>
            <p data-aos="fade-down" className="max-w-4xl mb-6 text-success lg:mb-8 md:tex lg:text-3xl text-justify">
            شركة ماسا تكنولوجي هي وحدة الأعمال الرقمية للشركة العربية المتخصصة للاستشارات وتقنية المعلومات. تقدم خدمات تقنية متنوعة واستشارات وتوفر الموارد التقنية لتمكين العملاء من تحقيق أهدافهم في رحلة التحول الرقمي بطريقة مثالية تساعد متخذي القرار على معرفة العائد على الاستثمار (ROI). نفتخر بشراكتنا مع شركة أودوو منذ 10 سنوات في تقديم نموذج تحول رقمي مميز يتحدث عنه العملاء.
            </p>
            <div className="flex justify-center items-center">
              <div className="grid grid-cols-2 md:grid-cols-4">
                <div className="flex justify-center items-center">
                  <Image className="md:h-26" src="/banar/flutter-svgrepo-com.svg" alt="mockup" width={100} height={20} data-aos="fade-down" />
                </div>
                <div className="flex justify-center items-center">
                  <Image className="md:h-26" src="/banar/react-svgrepo-com.svg" alt="mockup" width={100} height={20} data-aos="fade-down" />
                </div>
                <div className="flex justify-center items-center">
                  <Image className="md:h-26" src="/banar/odoo_gold_partner_rgb.svg" alt="mockup" width={150} height={20} data-aos="fade-down" />
                </div>
                <div className="flex justify-center items-center">
                  <Image className="md:h-26" src="/banar/oracle.png" alt="mockup" width={150} height={20} data-aos="fade-down" />
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center mt-10">
              <a href="#" className="inline-flex items-center justify-center px-5 py-3 text-2xl animate-bounce text-center text-success border border-success rounded-lg hover:bg-success hover:text-primary focus:ring-4 focus:ring-gray-100">
                أبداء معنا الأن
              </a>
            </div>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex"  data-aos="fade-right">
            <Image src="/banar/banar.png" alt="mockup" width={1000} height={20} data-aos="fade-down" />
          </div>
        </div>
      </section>
      <section className="bg-info">
        <div className="px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
            <dl className="grid max-w-screen-lg gap-8 mx-auto text-success sm:grid-cols-3">
                <div className="flex flex-col items-center justify-center border border-success rounded-xl py-12">
                    <dt className="mb-2 text-3xl md:text-4xl font-extrabold">73M+</dt>
                    <dd className="text-2xl font-bold text-balck">عدد المشاريع</dd>
                </div>
                <div className="flex flex-col items-center justify-center border border-success rounded-xl py-12">
                    <dt className="mb-2 text-3xl md:text-4xl font-extrabold">1B+</dt>
                    <dd className="text-2xl font-bold text-balck">عدد الشهادات</dd>
                </div>
                <div className="flex flex-col items-center justify-center border border-success rounded-xl py-12">
                    <dt className="mb-2 text-3xl md:text-4xl font-extrabold">4M+</dt>
                    <dd className="text-2xl font-bold text-balck">عدد الفريق</dd>
                </div>
            </dl>
        </div>
      </section>
      <div className="my-16">
        <div className="my-10">
            <h1 className="text-success text-5xl text-center">هيئة الإدارة</h1>
        </div>
        <div className="grid xl:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-x-8 mx-5 max-w-screen-xl md:mx-auto">
          {l?.map((l) => (
            <div key={l.id} className="mb-5">
              <div className="flex justify-center items-center">
                <Image
                  src={l.image}
                  width={150}
                  height={500}
                  className="rounded-full"
                  alt="Picture"
                />
              </div>
              <p className="mt-2 mx-5 text-center text-2xl text-success">
                {l.name}
              </p>
              <p className="mx-5 text-center text-black text-xl mt-2">
                {l.function}
              </p>
            </div>
          ))}
        </div>
      </div>
      <Products />
      <Customer />
    </div>
  );
}
