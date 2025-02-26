import Image from "next/image";
import Link from "next/link";

interface SingleSectorPageProps {
    params: Promise<{ id: string }>;
}
  
const SectorItem = async ({ params }: SingleSectorPageProps) => {
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${(await params).id}`
    );
    console.log(response, "sfdf");
    if (!response.ok) {
        throw new Error("Failed to fetch article");
    }
    return (
        <section className="max-w-screen-3xl mx-auto bg-about3 bg-cover bg-no-repeat">
            <div className="bg-gray-200 pt-44 pb-20">
                <div className="flex justify-center md:justify-start items-center max-w-screen-2xl mx-auto">
                    <Link href="/sectors" className="text-center border border-success rounded-full text-success py-2 px-4 text-2xl hover:bg-success hover:text-white">
                        <span className="ml-2">
                            &#8702;	
                        </span>
                        <span>القطاعات</span>
                    </Link>
                </div>
                <h1 className="text-success text-6xl mt-4 text-center h-20">القطاع الخيري</h1>
                <div className="max-w-screen-lg mx-auto text-center text-success text-4xl pb-8">
                    <p className="text-gray-600 pt-5 text-center text-3xl mt-4">
                        القطاع الخيري السعودي قطاع غير ربحي  
                    </p>
                </div>
            </div>
            <div className="grid grid-cols-12 max-w-screen-xl mx-auto py-20">
                <div className="col-span-12 lg:col-span-5 px-5">
                    <h1 className="text-success text-3xl font-extrabold">تفاصيل القطاع</h1>
                    <hr className="mt-4 w-80 border border-success"/>
                    <h1 className="text-success text-2xl font-extrabold mt-2">الوصف:</h1>
                    <p className="text-gray-600 mt-4 text-justify">
                        بالإضافة إلى ذلك، تقدم MASA خدمات استشارية متخصصة في تقنية المعلومات، تتضمن تطوير البرمجيات، وإدارة البيانات، وحلول البنية التحتية، وأمن المعلومات. تهدف هذه الخدمات إلى دعم المؤسسات التعليمية في تحقيق التحول الرقمي وتعزيز كفاءتها التشغيلية. بالإضافة إلى ذلك، تقدم MASA خدمات استشارية متخصصة في تقنية المعلومات، تتضمن تطوير البرمجيات، وإدارة البيانات، وحلول البنية التحتية، وأمن المعلومات. تهدف هذه الخدمات إلى دعم المؤسسات التعليمية في تحقيق التحول الرقمي وتعزيز كفاءتها التشغيلية.
                    </p>
                    <hr className="mt-4 w-80 border border-success"/>
                    <h1 className="text-success text-2xl font-extrabold mt-2">الخدمات:</h1>
                    <ul className="text-gray-600 mt-4 text-justify list-disc mx-4">
                        <li>الخدمة الأولى</li>
                        <li>الخدمة الأولى</li>
                        <li>الخدمة الأولى</li>
                        <li>الخدمة الأولى</li>
                        <li>الخدمة الأولى</li>
                    </ul>
                    <hr className="mt-4 w-80 border border-success"/>
                    <h1 className="text-success text-2xl font-extrabold mt-2">الباقات:</h1>
                    <ul className="text-gray-600 mt-4 text-justify list-disc mx-4">
                        <li>باقة الإنطلاقة</li>
                        <li>باقة النمو</li>
                        <li>باقة النخبة</li>
                    </ul>
                    <div className="mt-10">
                        <Link href="#" rel="stylesheet" className="bg-success text-white px-4 py-2 rounded-xl">
                            رابط الديمو
                        </Link>
                        <Link href="#" rel="stylesheet" className="bg-success text-white px-4 py-2 rounded-xl mx-4">
                            أطلب الأن
                        </Link>
                    </div>
                </div>
                <div className="col-span-12 lg:col-span-7 px-5 mt-5">
                    <div className="flex justify-center items-center">
                        <Image src="/sectors/repot.webp" alt="" width={1000} height={100} className="rounded-lg border border-success" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectorItem