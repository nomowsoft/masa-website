"use client";
import Image from 'next/image'

const l = [
  {"id": 1, "image": '/c1.png'},
  {"id": 2, "image": '/c2.png'},
  {"id": 3, "image": '/c3.png'},
  {"id": 4, "image": '/c4.png'},
  {"id": 5, "image": '/c5.png'},
  {"id": 6, "image": '/c6.png'}
]
const ImportantClients = () => {
  return (
    <section className="important_clients">
      <div className="py-12 mx-auto text-center w-full">
        <h1 className="text-4xl text-primary">أهم عملائنا الذين يضعون ثقتهم فينا</h1>
      </div>
      <div className="mx-20 grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-1">
        {l?.map((l) => ( 
            <div key={l.id} className="flex justify-center">
              <Image
                src={l.image}
                width={150}
                height={150}
                alt="Picture"
              />
            </div>
        ))}
      </div>
    </section>
  )
}

export default ImportantClients