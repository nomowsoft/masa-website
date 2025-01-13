"use client";
import Image from "next/image";

const Hero = () => {

  return (
    <section className="bg- bg-customer bg-cover bg-bottom lg:pb-16 xl:pb-24">
      <div className="py-6 px-4 mx-auto max-w-screen-xl text-center lg:py-6 lg:px-12">
          <h1 className="mb-4 text-2xl md:text-4xl font-extrabold tracking-tight leading-none text-success" data-aos="zoom-in">حلول رقمية مبتكرة</h1>
          <div className="text-success mx-5 md:mx-20">
            <h1 className="xl:text-2xl" data-aos="fade-down">
            شركة ماسا تكنولوجي هي وحدة الاعمال الرقمية للشركة العربية المتخصصة للاستشارت وتقنية المعلومات .تقدم الخدمات التقنية المختلفة والاستشارات وتوفير الموارد التقنية  لتمكين العملاء من تحقيق اهدافهم في رحلة التحول الرقمي بطريقة مثالية تساعد متخذي القرار على معرفة العائد على الاستثمار (ORI )
            نفتخر بشراكتنا مع شركة اودوو منذ 10 سنوات في تقديم نموذج تحول رقمي مميز يتحدث عنه العملاء
            </h1>
          </div>
          <div className="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg">
              <div className="flex flex-wrap justify-center items-center xl:mt-6 text-success sm:justify-center">
                  <div className="flex items-center mx-2" data-aos="fade-up">
                    <span className="text-3xl hidden md:block text-secondary">Flutter</span>
                    <Image src="/banar/flutter-svgrepo-com.svg" width={60} height={20} alt="..." />
                  </div>
                  <div className="flex items-center mx-2" data-aos="fade-up">
                    <span className="text-3xl hidden md:block text-warning">ReactJs</span>
                    <Image src="/banar/react-svgrepo-com.svg" width={80} height={20} alt="..." />
                  </div>
                  <div className="flex items-center mx-2" data-aos="fade-up">
                    <Image src="/banar/odoo_gold_partner_rgb.svg" width={190} height={20} alt="..." />
                  </div>
                  <div className="flex items-center mx-2" data-aos="fade-up">
                    <Image src="/banar/oracle.png" width={150} height={20} alt="..." />
                  </div>
              </div>
          </div> 
      </div>
    </section>
  )
}

export default Hero