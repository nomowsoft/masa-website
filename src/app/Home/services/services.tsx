"use client";
import Image from "next/image";

const l = [
  {
    id: 1,
    description: "تحليل وإعداد وثائق المتطلبات (BRD)",
    image: "/services/brd-Ico.png",
  },
  {
    id: 2,
    description: "تحليل البيانات وذكاء الأعمال (BI)",
    image: "/services/BI-Ico.png",
  },
  { id: 3, description: "قياس النضج الرقمي", image: "/services/Qiyas-Ico.png" },
  {
    id: 4,
    description: "تطبيقات الجوال Google Flutter",
    image: "/services/application.png",
  },
  {
    id: 5,
    description: "تطوير أنظمة إدارة موارد المؤسسة (Odoo ERP)",
    image: "/services/ERP-Ico.png",
  },
  {
    id: 6,
    description: "تطوير المنصات المنصات والبوابات الالكترونية",
    image: "/services/portals&Platform.png",
  },
  { id: 7, description: "خدمات تكنولوجيات الـ AI", image: "/services/AI-Ico.png" },
  { id: 8, description: "الربط والتكامل APIs", image: "/services/API-Ico.png" },
];

const Services = () => {

  return (
    <section
      className="md:bg-service md:bg-no-repeat md:bg-bottom"
    >
      <div className="pt-10">
        <div className="text-center text-success pb-4">
          <h1 className="text-2xl md:text-4xl" data-aos="zoom-in">خدماتنا</h1>
        </div>
        <div className="text-center text-success mx-auto max-w-screen-xl">
          <div className="mx-50 md:mx-20">
            <h1 className="md:text-2xl pb-4" data-aos="zoom-in">
            عام 2015م، انطلقنا في رحلة التحول الرقمي لعملائنا اعتمادًا على منصة Odoo. نهتم بكل التفاصيل التي تساعد العملاء في تحقيق أهدافهم من خلال الحصول على أنظمة ملائمة لمختلف الأنشطة وضمان استمرارية الأعمال عبر التميز في خدمة ما بعد البيع.
            </h1>
          </div>
        </div>
        <div className="grid xl:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-8 mx-20" data-aos="fade-up">
          {l?.map((l) => (
            <div key={l.id}>
              <div className="flex justify-center items-center">
                <Image
                  src={l.image}
                  width={150}
                  height={500}
                  alt="Picture"
                />
              </div>
              <p className="mt-2 mb-10 mx-5 text-center text-xl text-success">
                {l.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
