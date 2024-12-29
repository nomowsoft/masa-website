"use client";
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import { EffectCoverflow } from 'swiper/modules';


const l = [
  {"id": 1, "name": 'محمد ابراهيم', "image": '/partner.png'},
  {"id": 2, "name": 'محمد ابراهيم', "image": '/partner.png'},
  {"id": 3, "name": 'محمد ابراهيم', "image": '/partner.png'},
  {"id": 4, "name": 'محمد ابراهيم', "image": '/partner.png'},
  {"id": 5, "name": 'محمد ابراهيم', "image": '/partner.png'},
  {"id": 6, "name": 'محمد ابراهيم', "image": '/partner.png'}
]
const CustomerExperiences = () => {
  return (
    <section className="mt-20 bg-cover bg-center items-center relative h-96 my-60 ">
      <div className="md:mx-10 sm:mx-5 customer_experiences pb-80 bt-32">
        <div className="py-32 mx-auto text-center w-full">
          <h1 className="text-4xl text-primary">أهم عملائنا الذين يضعون ثقتهم فينا</h1>
        </div>
      </div>
      <div className="-top-96 relative">
        <Swiper
          modules={[EffectCoverflow]}
          effect="coverflow"
          centeredSlides={true}
          slidesPerView={1}
          loop={true}
          spaceBetween={5}
          coverflowEffect={{
            rotate: 0,
            stretch: 50,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          breakpoints={{
            768: {
              slidesPerView: 2.5,
            },
            1024: {
              slidesPerView: 2,
            },
          }}
        >
          {l?.map((l) => ( 
                <SwiperSlide key={l.id} className="w-full bg-white border border-gray-200 rounded-3xl shadow  p-20 swiper-partner mt-12">
                  <Image
                        className="rounded-full absolute -top-12"
                        src="/partnerimage.svg"
                        width={80}
                        height={80}
                        alt="Picture"
                  />
                  <p className="text-primary">
                  يشرح محمد قائلاً: « لقد غيرت منصة Odoo المستندة إلى السحابة قواعد اللعبة بالنسبة لنا ». « لقد سمح لنا بتخزين البيانات الهامة بشكل آمن في السحابة، مما أدى إلى تعزيز كفاءتنا التشغيلية والتطبيق العملي. في السابق، كان استرداد المعلومات أو إدارة المهام مثل المبيعات والتسعير وإدارة البائعين وجهات الاتصال يتطلب بحثًا مكثفًا. »
                  </p>
                  <div>
                    <hr className="text-primary text-5xl border-1 border-primary mt-20"/>
                  </div>
                  <div className="flex flex-row flex-wrap mt-8 items-center gap-4">
                    <div>
                      <Image
                        className="rounded-full"
                        src={l.image}
                        width={80}
                        height={80}
                        alt="Picture"
                      />
                    </div>
                    <div>
                      <span className="text-primary text-xl">
                        {l.name}
                      </span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
          
        </Swiper>
      </div>
    </section>
  )
}

export default CustomerExperiences