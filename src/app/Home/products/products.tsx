"use client";
import Image from "next/image";

const Products = () => {


  return (
    <section className="bg-service bg-no-repeat bg-bottom">
      <div className="pt-44 pb-44">
        <div className="text-center text-success -mt-24">
          <h1 className="text-4xl" data-aos="zoom-in">بصمتنا في تحقيق طموحك في التحول الرقمي</h1>
        </div>
        <div className="grid xl:grid-cols-3 md:grid-cols-3 grid-cols-2 gap-8 mx-20 py-20" data-aos="fade-up">
          <div className="text-center text-xl text-success">
            <div className="flex justify-center">
              <Image src="/product/skyline.png" width={100} height={20} alt="..." />
            </div>
            <h1>نظام إدارة المؤسسات العقاري</h1>
            <h1>Real state ERP</h1>
          </div>
          <div className="text-center text-xl text-success">
            <div className="flex justify-center">
              <Image src="/product/hook.png" width={100} height={20} alt="..." />
            </div>
            <h1>نظام إدارة موارد المؤسسات للمقاولات</h1>
            <h1>Construction ERP</h1>
          </div>
          <div className="text-center text-xl text-success">
            <div className="flex justify-center">
              <Image src="/product/call-center-service.png" width={100} height={20} alt="..." />
            </div>
            <h1>نظام إدارة المؤسسات لخدمات الصيانة الميدانية</h1>
            <h1>(خدمة العملاء)</h1>
          </div>
          <div className="text-center text-xl text-success">
            <div className="flex justify-center">
              <Image src="/product/hr.png" width={100} height={20} alt="..." />
            </div>
            <h1>نظام الموارد البشرية </h1>
            <h1>(المتوافق مع أنظمة العمل  السعودي)</h1>
          </div>
          <div className="text-center text-xl text-success">
            <div className="flex justify-center">
              <Image src="/product/self-services.png" width={100} height={20} alt="..." />
            </div>
            <h1>بوابة الخدمة الذاتية للموظفين</h1>
          </div>
          <div className="text-center text-xl text-success">
            <div className="flex justify-center">
              <Image src="/product/vendor.png" width={100} height={20} alt="..." />
            </div>
            <h1>بوابة الموردين والعملاء</h1>
          </div>
          <div className="text-center text-xl text-success">
            <div className="flex justify-center">
              <Image src="/product/electoral.png" width={100} height={20} alt="..." />
            </div>
            <h1>نظام العضوية وإنتخابات المجالس</h1>
          </div>
          <div className="text-center text-xl text-success">
            <div className="flex justify-center">
              <Image src="/product/self-service.png" width={100} height={20} alt="..." />
            </div>
            <h1>تطبيق جوال الخدمة الذاتية للموظفين</h1>
          </div>
          <div className="text-center text-xl text-success">
            <div className="flex justify-center">
              <Image src="/product/assign.png" width={100} height={20} alt="..." />
            </div>
            <h1>تطبيق جوال تحضير ومتابعة الموظفين الميدانيين</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
