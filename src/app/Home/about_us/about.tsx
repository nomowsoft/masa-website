import module from "./about.module.css"
import { FaUsers, FaProjectDiagram, FaAward } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="py-44 bg-about bg-no-repeat bg-right bg-contain mx-0">
      <div className="container mx-auto grid lg:grid-cols-12 gap-8 px-4 lg:px-12">
        <div className="lg:col-span-5 flex flex-col items-center justify-center gap-8">
          <div className="flex gap-9 flex-wrap w-2/2 text-center justify-center">
            <div className="bg-white shadow-lg rounded-2xl p-6 w-44" data-aos="fade-up" data-aos-delay="100">
              <FaAward className="text-7xl text-success mx-auto" />
              <h2 className="text-3xl font-bold mt-4">+10</h2>
              <p className="text-gray-600 text-xl">عدد الشهادات</p>
            </div>
            <div className="bg-white shadow-lg rounded-2xl p-6 w-44" data-aos="fade-up">
              <FaProjectDiagram className="text-7xl text-success mx-auto" />
              <h2 className="text-3xl font-bold mt-4">+50</h2>
              <p className="text-gray-600 text-xl">عدد المشاريع</p>
            </div>
            <div className="bg-white shadow-lg rounded-2xl p-6 w-44" data-aos="fade-up" data-aos-delay="200">
              <FaUsers className="text-7xl text-success mx-auto" />
              <h2 className="text-3xl font-bold mt-4">+500</h2>
              <p className="text-gray-600 text-xl">عدد الفريق</p>
            </div>
          </div>
        </div>
        <div className="lg:col-span-6 place-self-center">
          <h1 data-aos="fade-down" className={`${module.address_about} h-20 text-5xl font-extrabold tracking-tight leading-none md:text-6xl xl:text-7xl`}>
            حلول رقمية مبتكرة
          </h1>
          <p data-aos="fade-down" className="max-w-4xl mt-6 text-success lg:text-2xl text-justify">
            شركة ماسا تكنولوجي هي وحدة الأعمال الرقمية للشركة العربية المتخصصة للاستشارات وتقنية المعلومات. تقدم خدمات تقنية متنوعة واستشارات وتوفر الموارد التقنية لتمكين العملاء من تحقيق أهدافهم في رحلة التحول الرقمي بطريقة مثالية تساعد متخذي القرار على معرفة العائد على الاستثمار (ROI). نفتخر بشراكتنا مع شركة أودوو منذ 10 سنوات في تقديم نموذج تحول رقمي مميز يتحدث عنه العملاء.        </p>
        </div>
      </div>
    </section>
  )
}

export default About