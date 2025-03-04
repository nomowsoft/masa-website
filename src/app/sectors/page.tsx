import { SectorItem } from "@/components/sector/sectoritem";
import { sectors } from "@/utils/data";

const Sectors = async () => {
  return (
    <section className="lg:max-w-screen-3xl mx-auto bg-about3 bg-cover bg-no-repeat">
      <div className="bg-gray-200 pt-44 pb-20">
        <h1 className="text-success text-6xl mt-4 text-center h-20">القطاعات</h1>
        <div className="lg:max-w-screen-lg lg:mx-auto text-center text-success text-4xl pb-8">
          <p className="text-gray-600 pt-5 text-center text-2xl mt-4">
          تسعى ماسا إلى دعم مختلف القطاعات في المملكة العربية السعودية، بما في ذلك
          </p>
        </div>
      </div>
      <div className="flex flex-wrap gap-x-5 gap-y-5 py-10 items-center justify-center">
        {sectors.slice(0, 6).map(item => (
          <SectorItem sector={item} key={item.id} />
        ))}
      </div>
    </section>
  )
}

export default Sectors;
