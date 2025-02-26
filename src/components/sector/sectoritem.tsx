import Image from "next/image";
import Link from "next/link";
import { Sector } from "@/utils/types";

interface SectorItemProps {
    sector: Sector
}

export const SectorItem = ({sector}:SectorItemProps) => {
  return (
    <div className="group relative md:w-1/2 lg:w-1/4  p-4 overflow-hidden">
      <Link href={`/sectors/${sector.id}`}>
        <Image src={sector.image} alt="" width={500} height={100} className="rounded-xl border border-success" />
        <h1 className="text-success text-3xl mt-2 line-clamp-1 text-center h-20">{sector.title}</h1>
        <div className="bg-white bg-opacity-90 p-4 text-success text-lg
              opacity-0 translate-y-4 hover:opacity-100 hover:translate-y-0 duration-300 ease-in-out 
              rounded-xl text-justify overflow-hidden absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center">
          <p className="line-clamp-5">
            {sector.body}
          </p>
        </div>
      </Link>
    </div>
  )
}
