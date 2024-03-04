import Image from "next/image"

type StepsProps = {
    icon: string;
    title: string;
}
export default function Steps({icon, title}:StepsProps){
    return(
        <div className="bg-[#151926] flex flex-row w-[90%] items-center justify-start px-4 py-4 rounded-md border-[0.001em] border-gray-600/10 gap-4">
            <Image 
                src={icon}
                alt="Purchase Step Icon"
                width={50}
                height={50}
                className="w-6 h-6 "
            />
            <h3 className="font-bold text-sm">{title}</h3>
        </div>
    )
}