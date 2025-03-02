import Image from "next/image";
import module from "./number.module.css";

const manage_team = [
    { "id": 1, name: "م.عبدالله الشمراخ", function: "نائب المدير التنفيذي", image: "/partner/9.png" },
    { "id": 2, name: "م.ابراهيم الزبيدي", function: "المدير التنفيذي", image: "/partner/11.png" },
    { "id": 3, name: "د.سامي ابراهيم", function: "مدير ادارة المشاريع وتطوير الاعمال", image: "/partner/11.png" },
]

const Managment = () => {
    return (
        <section className="py-10 xl:py-44 px-5 md:px-20 md:bg-about bg-no-repeat bg-right bg-contain">
            <div className="max-w-screen-xl mx-auto grid grid-cols-1">
                <div>
                    <h1 className={`${module.approach_address2} lg:text-center text-5xl lg:text-8xl h-16 lg:h-32`}>إدارتنا</h1>
                    <p className="text-gray-600 mt-3 text-justify text-lg md:text-xl max-w-screen-md mx-auto">
                    وراء كل إنجاز في ماسا، يقف فريق قيادة يضع الابتكار في صميم كل قرار. نحن نؤمن بأن التكنولوجيا قادرة على إحداث تغيير جذري في طريقة عمل الشركات، ولهذا نحرص على توجيه رؤيتنا الاستراتيجية نحو تقديم حلول تقنية تحدث فرقًا حقيقيًا. إدارتنا تجمع بين الخبرة العميقة في عالم التقنية، والرؤية المستقبلية التي تساعدنا على البقاء في طليعة الابتكار. نحن لا نبحث فقط عن النجاح، بل عن خلق تأثير إيجابي مستدام في عالم الأعمال الرقمي.                    </p>
                    <div className="max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 mt-5" data-aos="fade-up">
                        {manage_team?.map((team) => (
                            <div key={team.id} className="bg-white shadow-xl mt-6 rounded-2xl py-2 mx-5 md:mx-0">
                                <div className="flex justify-center items-center">
                                    <Image src={team.image} alt="..." width={150} height={20} className="border border-success  rounded-full" />
                                </div>
                                <div className="text-center mt-3 mb-3">
                                    <h1 className="text-success">
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