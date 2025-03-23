import Image from "next/image";
import module from "./number.module.css";

export const Approach = () => {
    return (
        <section className="py-10 xl:py-44 px-5 md:px-20 md:bg-about2 bg-no-repeat bg-left bg-contain">
            <div className="max-w-screen-xl mx-auto">
                <div className="flex flex-wrap justify-center items-center">
                    <div className="w-full md:w-1/2 px-4">
                        <h1 className={`${module.approach_address} text-4xl md:text-5xl lg:text-6xl h-16 lg:h-20`}>
                            مرونة الابتكار
                        </h1>
                        <p className="text-gray-600 mt-3 text-justify text-base md:text-lg lg:text-2xl md:ml-10">
                             نستخدم منهجية مرنة تتيح لنا تقديم حلول مخصصة بسرعة وفعالية تعرف بـ Agile Methodology. 
                            هذه المنهجية تعتمد على التفاعل المستمر مع العميل، مما يسمح بتطوير الحلول بشكل تدريجي وتعديلها بما يتناسب مع التحديات المتغيرة. 
                            مع كل خطوة نأخذها، نضمن أن النظام يعمل بأعلى كفاءة، مما يساعدك على تحقيق أهدافك التجارية في أقصر وقت ممكن وبأقل التكاليف.
                        </p>
                    </div>
                    <div className="w-full md:w-1/2 flex justify-center mt-10 md:mt-0 md:justify-end items-center">
                        <Image
                            src="/about/digital-screen-filled-with-data-information.png"
                            alt="..."
                            width={600}
                            height={400}
                            className="rounded-3xl"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};