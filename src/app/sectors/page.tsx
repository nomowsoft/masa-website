import { SectorItem } from "@/components/sector/sectoritem";
import { sectors } from "@/utils/data";

const Sectors = async () => {
  return (
    <section className="max-w-screen-3xl mx-auto md:bg-about3 bg-cover bg-no-repeat">
      <div className="bg-gray-200 pt-32 md:pt-44 pb-10 md:pb-20 px-4">
        <h1 className="text-success text-4xl md:text-5xl lg:text-6xl mt-4 text-center lg:max-w-screen-xl mx-auto leading-relaxed">
          القطاعات
        </h1>
        <div className="max-w-screen-lg mx-auto text-center text-success text-2xl md:text-3xl lg:text-4xl pb-8">
          <p className="text-gray-600 pt-5 text-center text-lg md:text-xl lg:text-2xl mt-12">
            بصفتنا شريكًا ذهبيًا لـ <span className="font-bold text-success">Odoo</span>، نمتلك خبرة واسعة في تنفيذ الحلول الرقمية المتكاملة لمختلف القطاعات. نحن نساعد الشركات على تحقيق التحول الرقمي، وتحسين كفاءة العمليات، وزيادة الإنتاجية من خلال حلول <span className="font-bold text-success">Odoo</span> المخصصة لكل قطاع.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap gap-x-5 gap-y-5 py-10 px-4 items-center justify-center">
        {sectors.slice(0, 6).map((item) => (
          <SectorItem sector={item} key={item.id} />
        ))}
      </div>
    </section>
  );
};

export default Sectors;