import Image from "next/image";
import module from "./number.module.css";

const manage_team = [
    { "id": 1, name: "محمد علي", description: "شركة ماسا تكنولوجي هي وحدة الأعمال الرقمية للشركة العربية المتخصصة للاستشارات وتقنية المعلومات.", function: "مهندس برمجيات", image: "/partner/partner.webp" },
    { "id": 2, name: "محمد علي", description: "شركة ماسا تكنولوجي هي وحدة الأعمال الرقمية للشركة العربية المتخصصة للاستشارات وتقنية المعلومات.", function: "مهندس برمجيات", image: "/partner/partner.webp" },
    { "id": 3, name: "محمد علي", description: "شركة ماسا تكنولوجي هي وحدة الأعمال الرقمية للشركة العربية المتخصصة للاستشارات وتقنية المعلومات.", function: "مهندس برمجيات", image: "/partner/partner.webp" },
    { "id": 4, name: "محمد علي", description: "شركة ماسا تكنولوجي هي وحدة الأعمال الرقمية للشركة العربية المتخصصة للاستشارات وتقنية المعلومات.", function: "مهندس برمجيات", image: "/partner/partner.webp" },
    { "id": 5, name: "محمد علي", description: "شركة ماسا تكنولوجي هي وحدة الأعمال الرقمية للشركة العربية المتخصصة للاستشارات وتقنية المعلومات.", function: "مهندس برمجيات", image: "/partner/partner.webp" },
    { "id": 6, name: "محمد علي", description: "شركة ماسا تكنولوجي هي وحدة الأعمال الرقمية للشركة العربية المتخصصة للاستشارات وتقنية المعلومات.", function: "مهندس برمجيات", image: "/partner/partner.webp" },
    { "id": 7, name: "محمد علي", description: "شركة ماسا تكنولوجي هي وحدة الأعمال الرقمية للشركة العربية المتخصصة للاستشارات وتقنية المعلومات.", function: "مهندس برمجيات", image: "/partner/partner.webp" },
    { "id": 8, name: "محمد علي", description: "شركة ماسا تكنولوجي هي وحدة الأعمال الرقمية للشركة العربية المتخصصة للاستشارات وتقنية المعلومات.", function: "مهندس برمجيات", image: "/partner/partner.webp" },
]

const Managment = () => {
    return (
        <section className="py-10 xl:py-44 px-5 md:px-20 md:bg-about bg-no-repeat bg-right bg-contain">
            <div className="max-w-screen-xl mx-auto grid grid-cols-1">
                <div>
                    <h1 className={`${module.approach_address2} lg:text-center text-5xl lg:text-8xl h-16 lg:h-32`}>إدارتنا</h1>
                    <p className="text-gray-600 mt-3 text-justify text-lg md:text-2xl max-w-screen-md mx-auto">
                        يتميز فريق الإدارة لدينا بخبرة واسعة في مجالات التقنية وريادة الأعمال، مما يمكننا من تقديم حلول مبتكرة تلبي متطلبات السوق المتغيرة. نسعى دائمًا إلى تطوير بيئة عمل متكاملة تعزز من نجاح شركائنا وعملائنا.              </p>
                    <div className="max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 mt-5" data-aos="fade-up">
                        {manage_team.slice(0, 3)?.map((team) => (
                            <div key={team.id} className="bg-white shadow-xl mt-6 rounded-2xl py-2 mx-5 md:mx-0">
                                <div className="flex justify-center items-center">
                                    <Image src={team.image} alt="..." width={100} height={20} className="border border-success  rounded-full" />
                                </div>
                                <div className="text-center mt-3 mb-3">
                                    <h1 className="text-success text-xl">
                                        {team.name}
                                    </h1>
                                    <h1 className="mt-1">
                                        {team.function}
                                    </h1>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Managment