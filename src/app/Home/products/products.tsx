"use client";
import Image from "next/image";

const Products = () => {


  return (
    <section className="bg-info">
      <div className="pt-10 lg:pb-10">
        <div className="text-center text-success">
          <h1 className="text-4xl" data-aos="zoom-in">بصمتنا في تحقيق طموحك في التحول الرقمي</h1>
        </div>
        <div className="grid xl:grid-cols-3 md:grid-cols-3 grid-cols-2 gap-8 mx-20 py-20" data-aos="fade-up">
          <div className="text-center text-xl text-success">
            <div className="flex justify-center">
              <Image src="/product/real_state.png" width={100} height={20} alt="..." />
            </div>
            <h1>نظام إدارة المؤسسات العقاري</h1>
            <h1>Real state ERP</h1>
          </div>
          <div className="text-center text-xl text-success">
            <div className="flex justify-center">
              <Image src="/product/construction.png" width={100} height={20} alt="..." />
            </div>
            <h1>نظام إدارة موارد المؤسسات للمقاولات</h1>
            <h1>Construction ERP</h1>
          </div>
          <div className="text-center text-xl text-success">
            <div className="flex justify-center">
              <Image src="/product/client_service.png" width={100} height={20} alt="..." />
            </div>
            <h1>نظام إدارة المؤسسات لخدمات الصيانة الميدانية</h1>
            <h1>(خدمة العملاء)</h1>
          </div>
          <div className="text-center text-xl text-success">
            <div className="flex justify-center">
              <Image src="/product/systems.png" width={100} height={20} alt="..." />
            </div>
            <h1>نظام الموارد البشرية </h1>
            <h1>(المتوافق مع أنظمة العمل  السعودي)</h1>
          </div>
          <div className="text-center text-xl text-success">
            <div className="flex justify-center">
              <Image src="/product/self-servicess.png" width={100} height={20} alt="..." />
            </div>
            <h1>بوابة الخدمة الذاتية للموظفين</h1>
          </div>
          <div className="text-center text-xl text-success">
            <div className="flex justify-center">
              <Image src="/product/vendors.png" width={100} height={20} alt="..." />
            </div>
            <h1>بوابة الموردين والعملاء</h1>
          </div>
          <div className="text-center text-xl text-success">
            <div className="flex justify-center">
              <Image src="/product/election_system.png" width={100} height={20} alt="..." />
            </div>
            <h1>نظام العضوية وإنتخابات المجالس</h1>
          </div>
          <div className="text-center text-xl text-success">
            <div className="flex justify-center">
              <Image src="/product/self-services-app.png" width={100} height={20} alt="..." />
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
