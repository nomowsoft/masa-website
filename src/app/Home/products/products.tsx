"use client";
import Image from "next/image";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const l = [
  {
    id: 1,
    name: "محمد علي",
    function: "مهندس برمجيات",
    image: "/services/joseph-mcfall.png",
  },
  {
    id: 2,
    name: "محمد علي",
    function: "مهندس برمجيات",
    image: "/services/joseph-mcfall.png",
  },
  {
    id: 3,
    name: "محمد علي",
    function: "مهندس برمجيات",
    image: "/services/joseph-mcfall.png",
  },
  {
    id: 4,
    name: "محمد علي",
    function: "مهندس برمجيات",
    image: "/services/joseph-mcfall.png",
  },
];

const Products = () => {


  return (
    <section className="bg-info">
      <div className="pt-10 lg:pb-10">
        <div className="text-center text-success" data-aos="fade-up">
          <h1 className="text-xl md:text-2xl xl:text-5xl my-8" data-aos="zoom-in">فريقنا</h1>
        </div>
        <div className="grid xl:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-x-8 mx-5 max-w-screen-xl md:mx-auto">
          {l?.map((l) => (
            <div key={l.id} className="mb-5" data-aos="fade-up">
              <div className="flex justify-center items-center">
                <Image
                  src={l.image}
                  width={150}
                  height={500}
                  className="rounded-full"
                  alt="Picture"
                />
              </div>
              <p className="mt-2 mx-5 text-center text-xl text-success">
                {l.name}
              </p>
              <p className="mx-5 text-center text-black mt-2">
                {l.function}
              </p>
              <div className="flex justify-center items-center mt-4">
                <div className="mx-1">
                  <FaFacebook className="container size-8 text-blue-500" />
                </div>
                <div className="mx-1">
                  <FaGithub className="container size-8 text-gray-600" />
                </div>
                <div className="mx-1">
                  <FaXTwitter className="container size-8" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    // <section className="bg-info">
    //   <div className="pt-10 lg:pb-10">
    //     <div className="text-center text-success">
    //       <h1 className="text-xl md:text-2xl xl:text-4xl" data-aos="zoom-in">بصمتنا في تحقيق طموحك في التحول الرقمي</h1>
    //     </div>
    //     <div className="grid xl:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-x-8 gap-y-4 mx-5 md:mx-16 py-8">
    //       <div className="text-center text-xl text-success" data-aos="fade-up">
    //         <div className="flex justify-center">
    //           <Image src="/product/real_state.png" width={80} height={20} alt="..." />
    //         </div>
    //         <h1>نظام إدارة المؤسسات العقاري</h1>
    //         <h1>Real state ERP</h1>
    //       </div>
    //       <div className="text-center text-xl text-success" data-aos="fade-up">
    //         <div className="flex justify-center">
    //           <Image src="/product/construction.png" width={80} height={20} alt="..." />
    //         </div>
    //         <h1>نظام إدارة موارد المؤسسات للمقاولات</h1>
    //         <h1>Construction ERP</h1>
    //       </div>
    //       <div className="text-center text-xl text-success" data-aos="fade-up">
    //         <div className="flex justify-center">
    //           <Image src="/product/client_service.png" width={80} height={20} alt="..." />
    //         </div>
    //         <h1>نظام إدارة المؤسسات لخدمات الصيانة الميدانية</h1>
    //         <h1>(خدمة العملاء)</h1>
    //       </div>
    //       <div className="text-center text-xl text-success" data-aos="fade-up">
    //         <div className="flex justify-center">
    //           <Image src="/product/systems.png" width={80} height={20} alt="..." />
    //         </div>
    //         <h1>نظام الموارد البشرية </h1>
    //         <h1>(المتوافق مع أنظمة العمل  السعودي)</h1>
    //       </div>
    //       <div className="text-center text-xl text-success" data-aos="fade-up">
    //         <div className="flex justify-center">
    //           <Image src="/product/self-servicess.png" width={80} height={20} alt="..." />
    //         </div>
    //         <h1>بوابة الخدمة الذاتية للموظفين</h1>
    //       </div>
    //       <div className="text-center text-xl text-success" data-aos="fade-up">
    //         <div className="flex justify-center">
    //           <Image src="/product/vendors.png" width={80} height={20} alt="..." />
    //         </div>
    //         <h1>بوابة الموردين والعملاء</h1>
    //       </div>
    //       <div className="text-center text-xl text-success" data-aos="fade-up">
    //         <div className="flex justify-center">
    //           <Image src="/product/election_system.png" width={80} height={20} alt="..." />
    //         </div>
    //         <h1>نظام العضوية وإنتخابات المجالس</h1>
    //       </div>
    //       <div className="text-center text-xl text-success" data-aos="fade-up">
    //         <div className="flex justify-center">
    //           <Image src="/product/self-services-app.png" width={80} height={20} alt="..." />
    //         </div>
    //         <h1>تطبيق جوال الخدمة الذاتية للموظفين</h1>
    //       </div>
    //       <div className="text-center text-xl text-success" data-aos="fade-up">
    //         <div className="flex justify-center">
    //           <Image src="/product/assign.png" width={80} height={20} alt="..." />
    //         </div>
    //         <h1>تطبيق جوال تحضير ومتابعة الموظفين الميدانيين</h1>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
};

export default Products;
