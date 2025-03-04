import Image from "next/image";
import { Sector } from "@/utils/types";

interface SectorItemProps {
    sector: Sector
}

export const SectorItem = ({sector}:SectorItemProps) => {
  return (
    <div className="md:w-1/2 lg:w-1/4  p-4">
      <div className="text-success p-4 text-right w-full transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:rounded-xl " key={sector.id}>
        <div className="flex justify-center">
          <div className="bg-white rounded-md flex justify-center items-center p-2 mt-2">
            <Image src={sector.image} alt="" height={100} width={100} />
          </div>
        </div>
        <div className="mt-4 font-extrabold text-xl text-center">
          <h1>
            {sector.title}
          </h1>
          <div className="flex justify-center">
            <Image src="/service/line.png" alt="" height={10} width={100} className="mt-4" />
          </div>
        </div>
      </div>
    </div>
  )
}
