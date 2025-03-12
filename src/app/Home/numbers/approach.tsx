import Image from "next/image";
import module from "./number.module.css";

export const Approach = () => {
    return (
        <section className="py-10  xl:py-44 px-5 md:px-20 md:bg-about2 bg-no-repeat bg-left bg-contain">
            <div className="max-w-screen-xl mx-auto">
                <h1 className={`${module.approach_address} text-5xl lg:text-8xl h-16 lg:h-32`}>منهجيتنا</h1>
                <div className="flex flex-wrap justify-center items-center">
                    <div className="md:w-1/2">
                        <p className="text-gray-600 mt-3 text-justify text-lg md:text-xl md:ml-10">
                        نؤمن بأن تحقيق النجاح في المشاريع التقنية لا يعتمد فقط على الأدوات المستخدمة، بل على نهج متكامل يجمع بين الرؤية الواضحة، والتخطيط الدقيق، والتنفيذ الفعّال. نبدأ كل مشروع بفهم عميق لاحتياجات عملائنا، ثم نقوم بتصميم حلول مخصصة تضمن تلبية هذه الاحتياجات بأعلى مستويات الجودة. نركز على تبني أفضل الممارسات العالمية في تطوير البرمجيات، ونعتمد على تقنيات مرنة تتيح لنا تقديم حلول قابلة للتطوير والتكيف مع متغيرات السوق. كما أننا نؤمن بأن رحلة التحول الرقمي لا تنتهي عند التنفيذ، بل تمتد إلى مرحلة الدعم المستمر، لضمان تحقيق أقصى قيمة ممكنة من الحلول التي نقدمها.                    </p>
                    </div>
                    <div className="flex justify-center mt-10 md:mt-0 md:justify-end items-center md:w-1/2">
                        <Image src="/about/digital-screen-filled-with-data-information.png" alt="..." width={600} height={20} className={`rounded-3xl`} />
                    </div>
                </div>
            </div>
        </section>
    )
}
