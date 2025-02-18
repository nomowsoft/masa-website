import Image from "next/image";
import module from "./number.module.css";

export const Approach = () => {
    return (
        <section className="py-10  xl:py-44 px-5 md:px-20 bg-primary md:bg-about2 bg-no-repeat bg-left bg-contain">
            <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center">
                <div>
                    <h1 className={`${module.approach_address} text-5xl lg:text-8xl h-16 lg:h-32`}>منهجيتنا</h1>
                    <p className="text-gray-600 mt-3 text-justify text-lg md:text-2xl">
                        في ماسا للتقنية، نعتمد على منهجية تجمع بين الابتكار والكفاءة لضمان تقديم حلول تقنية متطورة تلبي احتياجات العملاء. نركز على تحسين العمليات، تعزيز الأداء، وتوفير تجربة سلسة من خلال أحدث التقنيات الرقمية.
                    </p>
                </div>
                <div className="flex justify-center mt-10 md:mt-0 md:justify-end items-center">
                    <Image src="/about/innovation-future Technology2.jpg" alt="..." width={500} height={20} className={`rounded-3xl h-96`} />
                </div>
            </div>
        </section>
    )
}
