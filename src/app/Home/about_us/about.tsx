import module from "./about.module.css"
import { FaUsers, FaProjectDiagram, FaAward } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="py-4 lg:py-44 md:bg-about bg-no-repeat bg-right bg-contain mx-0 bg-gray-200 ">
      <div className="container mx-auto grid lg:grid-cols-12 gap-8 px-4 lg:px-12">
        <div className="lg:col-span-5 flex flex-col items-center justify-center gap-8">
          <div className="flex gap-9 flex-wrap w-2/2 text-center justify-center">
            <div className="bg-white shadow-lg rounded-2xl p-6 w-44" data-aos="fade-up">
              <FaProjectDiagram className="text-7xl text-success mx-auto" />
              <h2 className="text-3xl font-bold mt-4">+50</h2>
              <p className="text-gray-600 text-xl">المشاريع</p>
            </div>
            <div className="bg-white shadow-lg rounded-2xl p-6 w-44" data-aos="fade-up" data-aos-delay="200">
              <FaUsers className="text-7xl text-success mx-auto" />
              <h2 className="text-3xl font-bold mt-4">+45</h2>
              <p className="text-gray-600 text-xl">الفريق</p>
            </div>
            <div className="bg-white shadow-lg rounded-2xl p-6 w-44" data-aos="fade-up" data-aos-delay="200">
              <FaUsers className="text-7xl text-success mx-auto" />
              <h2 className="text-3xl font-bold mt-4">+1000</h2>
              <p className="text-gray-600 text-xl">المستخدمين</p>
            </div>
            <div className="bg-white shadow-lg rounded-2xl p-6 w-44" data-aos="fade-up" data-aos-delay="100">
              <FaAward className="text-7xl text-success mx-auto" />
              <h2 className="text-3xl font-bold mt-4">+10</h2>
              <p className="text-gray-600 text-xl">الشهادات</p>
            </div>
          </div>
        </div>
        <div className="lg:col-span-6 place-self-center">
          <h1 data-aos="fade-down" className={`${module.address_about} h-20 text-5xl font-extrabold tracking-tight leading-none md:text-6xl xl:text-7xl`}>
            حلول رقمية مبتكرة
          </h1>
          <p data-aos="fade-down" className="max-w-4xl mt-6 text-gray-600 lg:text-xl text-justify">
          في ماسا، الابتكار ليس خيارًا، بل هو جزء من هويتنا. نحن نعمل على تطوير حلول تقنية متقدمة تتماشى مع احتياجات السوق وتوقعات عملائنا. من البرمجيات المصممة خصيصًا لدعم العمليات التجارية، إلى استراتيجيات التحول الرقمي التي تعيد تعريف طريقة عمل المؤسسات، نقدم حلولًا شاملة تعزز الإنتاجية، وتوفر تجربة سلسة للعملاء، وتضمن أداءً متفوقًا في بيئة أعمال تتسم بالتغير المستمر. كما أننا ندرك أهمية الأمان الرقمي في عالم مترابط، لذا نحرص على تقديم حلول متكاملة تحمي بيانات الشركات وتضمن بيئة تشغيل آمنة ومستقرة.          </p>
        </div>
      </div>
    </section>
  )
}

export default About