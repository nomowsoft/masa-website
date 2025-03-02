import { BiCheckCircle } from "react-icons/bi";


const ServicesContactUs = () => {
  return (
    <section>
      <div className="pt-44 pb-12 bg-gray-200">
        <div className="max-w-screen-2xl mx-auto text-success pb-8 flex justify-center items-center gap-4">
          <div className="lg:w-1/2" data-aos="fade-left">
            <h1 className="text-4xl">خدماتنا التقنية</h1>
            <h1 className="text-4xl mt-2">حلول مبتكرة لمستقبل أفضل</h1>
            <p className="mt-8 text-xl text-justify text-gray-600">
              في ماسا، نقدم لك أحدث الحلول التقنية اللي ترفع مستوى أعمالك وتسهّل عليك كل شيء! سواء كنت تحتاج تطوير أنظمة، تحسين عمليات، أو حتى دعم فني، إحنا هنا نخدمك بأعلى معايير الجودة والاحترافية.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg text-right lg:w-1/2" data-aos="fade-right">
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
                  className="p-3 border border-success rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <input 
                  type="text" 
                  placeholder="اسم الشركة" 
                  className="p-3 border border-success rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <input 
                  type="text" 
                  placeholder="عدد الموظفين السعوديين" 
                  className="p-3 border border-success rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <select 
                  className="w-full px-3 border border-success rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="">المسمى الوظيفي</option>
                  <option value="مدير">مدير</option>
                  <option value="موظف">موظف</option>
                  <option value="مهندس">مهندس</option>
                </select>
                <div className="flex items-center border border-success rounded-md overflow-hidden">
                  <span className="bg-gray-200 px-3 py-3 text-gray-600">+967</span>
                  <input 
                    type="tel" 
                    placeholder="رقم الهاتف" 
                    className="w-full p-3 focus:outline-none"
                  />
                </div>
                <input 
                  type="email" 
                  placeholder="البريد الإلكتروني" 
                  className="w-full p-3 border border-success rounded-md hover:bg-success transition focus:outline-none focus:ring-2 focus:ring-success"
                />
              </div>
              <p className="text-xs text-gray-500">
                بتقديمك لهذا النموذج، فإنك توافق على <a href="#" className="text-success underline">سياسة الخصوصية</a> الخاصة بنا.
              </p>
              <button 
                type="submit" 
                className="w-50 border border-success text-success py-2 px-2 rounded-md text-lg font-semibold hover:bg-success hover:text-white transition">
                احصل على عرض السعر
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 pt-12 pb-32 bg-about3 bg-contain bg-no-repeat">
        <div className="max-w-screen-2xl mx-auto mt-8" data-aos="fade-up">
          <h1 className="text-success text-5xl">
            أكتشف الحلول المتكاملة  مع ماسا 
          </h1>
        </div>
        <div className="flex flex-wrap gap-5 mt-16 justify-center items-center" data-aos="fade-up">
          <div className="bg-white text-success p-4 rounded-xl shadow-lg text-right w-full md:w-1/4 transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <BiCheckCircle className="text-4xl mb-4" />
            <h1 className="font-bold text-lg">تحليل وإعداد وثائق المتطلبات (BRD)</h1>
            <p className="text-gray-600 mt-4 line-clamp-1">
              تحليل وإعداد وثائق المتطلبات (BRD) لتحديد وتوثيق متطلبات النظام والتطبيقات البرمجية.
            </p>
          </div>
          <div className="bg-white text-success p-4 rounded-xl shadow-lg text-right w-full md:w-1/4 transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <BiCheckCircle className="text-4xl mb-4" />
            <h1>
            تحليل البيانات وذكاء الأعمال (BI)
            </h1>
            <p className="text-gray-600 mt-4 line-clamp-1">
              تحليل البيانات وذكاء الأعمال (BI) لتحليل البيانات واستخراج القيمة منها.
            </p>
          </div>
          <div className="bg-white text-success p-4 rounded-xl shadow-lg text-right w-full md:w-1/4 transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <BiCheckCircle className="text-4xl mb-4" />
            <h1>
            قياس النضج الرقمي
            </h1>
            <p className="text-gray-600 mt-4 line-clamp-1">
              قياس النضج الرقمي للمؤسسات وتقديم التوصيات لتحسين الأداء.
            </p>
          </div>
          <div className="bg-white text-success p-4 rounded-xl shadow-lg text-right w-full md:w-1/4 transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <BiCheckCircle className="text-4xl mb-4" />
            <h1>
            تطبيقات الجوال Google Flutter
            </h1>
            <p className="text-gray-600 mt-4 line-clamp-1">
              تطبيقات الجوال Google Flutter لتطوير تطبيقات الجوال بسرعة وكفاءة.
            </p>
          </div>
          <div className="bg-white text-success p-4 rounded-xl shadow-lg text-right w-full md:w-1/4 transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <BiCheckCircle className="text-4xl mb-4" />
            <h1>
            تطوير أنظمة إدارة موارد المؤسسة (Odoo ERP)
            </h1>
            <p className="text-gray-600 mt-4 line-clamp-1">
              تطوير أنظمة إدارة موارد المؤسسة (Odoo ERP) لتحسين العمليات التشغيلية.
            </p>
          </div>
          <div className="bg-white text-success p-4 rounded-xl shadow-lg text-right w-full md:w-1/4 transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <BiCheckCircle className="text-4xl mb-4" />
            <h1>
            تطوير المنصات المنصات والبوابات الالكترونية
            </h1>
            <p className="text-gray-600 mt-4 line-clamp-1">
              تطوير المنصات المنصات والبوابات الالكترونية لتحسين تجربة المستخدم.
            </p>
          </div>
          <div className="bg-white text-success p-4 rounded-xl shadow-lg text-right w-full md:w-1/4 transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <BiCheckCircle className="text-4xl mb-4" />
            <h1>
            تطوير المنصات المنصات والبوابات الالكترونية
            </h1>
            <p className="text-gray-600 mt-4 line-clamp-1">
              تطوير المنصات المنصات والبوابات الالكترونية لتحسين تجربة المستخدم.
            </p>
          </div>
          <div className="bg-white text-success p-4 rounded-xl shadow-lg text-right w-full md:w-1/4 transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <BiCheckCircle className="text-4xl mb-4" />
            <h1>
            خدمات تكنولوجيات الـ AI
            </h1>
            <p className="text-gray-600 mt-4 line-clamp-1">
              خدمات تكنولوجيات الـ AI لتطوير حلول تقنية متقدمة متطورة.
            </p>
          </div>
          <div className="bg-white text-success p-4 rounded-xl shadow-lg text-right w-full md:w-1/4 transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <BiCheckCircle className="text-4xl mb-4" />
            <h1>
            الربط والتكامل APIs
            </h1>
            <p className="text-gray-600 mt-4 line-clamp-1">
              الربط والتكامل APIs لربط الأنظمة وتبادل البيانات بينها.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesContactUs;
