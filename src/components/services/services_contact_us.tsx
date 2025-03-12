import { service } from "@/utils/data";
import Image from "next/image";

const ServicesContactUs = () => {
  return (
    <section>
      <div className="bg-gray-100 pt-44 pb-12 bg-about3 bg-contain bg-no-repeat">
        <div data-aos="fade-down" className="max-w-screen-md mx-auto text-center">
          <h1 className="text-4xl text-success">خدماتنا التقنية</h1>
          <h1 className="text-4xl mt-2 text-success">حلول مبتكرة لمستقبل أفضل</h1>
          <p className="mt-8 text-xl text-justify lg:text-center text-gray-600">
            في ماسا، نقدم لك أحدث الحلول التقنية اللي ترفع مستوى أعمالك وتسهّل عليك كل شيء! سواء كنت تحتاج تطوير أنظمة، تحسين عمليات، أو حتى دعم فني، إحنا هنا نخدمك بأعلى معايير الجودة والاحترافية.
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8 mt-12 mx-10">
          {service?.map((item) => (
            <div className="text-success p-4 text-right w-full md:w-1/5 transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:rounded-xl " key={item.id}>
              <div className="flex justify-center">
                <div className="bg-white rounded-md flex justify-center items-center p-2 mt-2">
                  <Image src={item.image} alt="" height={100} width={100} />
                </div>
              </div>
              <div className="mt-4 font-extrabold text-xl text-center">
                <h1>
                  {item.title}
                </h1>
                <div className="flex justify-center">
                  <Image src="/service/line.png" alt="" height={10} width={100} className="mt-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="pt-12 pb-12 md:bg-about bg-no-repeat bg-right bg-contain">
        <div className="max-w-screen-2xl md:mx-auto mx-10 text-success pb-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg text-right mt-10 md:mt0 max-w-screen-lg mx-auto" data-aos="fade-up">
            <h2 className="text-2xl font-bold text-success mb-2">
              تواصل مع فريق الخبراء في ماسا الآن
            </h2>
            <p className="text-gray-500 text-sm mb-6">
              استكمل البيانات المطلوبة لنتواصل معك خلال الـ 24 ساعة القادمة
            </p>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="الاسم الكامل"
                  className="p-3 border border-success rounded-md focus:outline-none focus:ring-2 focus:ring-success"
                />
                <input
                  type="text"
                  placeholder="اسم الشركة"
                  className="p-3 border border-success rounded-md focus:outline-none focus:ring-2 focus:ring-success"
                />
                <select
                  className="w-full px-3 border border-success rounded-md focus:outline-none focus:ring-2 focus:ring-success"
                >
                  <option value="">المسمى الوظيفي</option>
                  <option value="مدير">مدير</option>
                  <option value="موظف">موظف</option>
                  <option value="مهندس">مهندس</option>
                </select>
                <div className="flex items-center border border-success rounded-md overflow-hidden">
                  <input
                    type="tel"
                    placeholder="رقم الهاتف"
                    className="w-full p-3 focus:outline-none "
                  />
                  <span className="bg-gray-200 px-3 py-3 text-gray-600">966+</span>
                </div>
              </div>
              <input
                type="email"
                placeholder="البريد الإلكتروني"
                className="w-full p-3 border border-success rounded-md  transition focus:outline-none focus:ring-2 focus:ring-success"
              />
              <p className="text-xs text-gray-500">
                بتقديمك لهذا النموذج، فإنك توافق على <a href="#" className="text-success underline">سياسة الخصوصية</a> الخاصة بنا.
              </p>
              <button
                type="submit"
                className="w-50 border border-success text-success py-2 px-2 rounded-md text-lg font-semibold hover:bg-success hover:text-white transition">
                ارسال
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesContactUs;
