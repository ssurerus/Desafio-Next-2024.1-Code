import Link from "next/link"
import Image from "next/image"

type ProductCardProps = {
    title: string;
    desc: string;
    benefits: string[];
    price: number;
    image: string;
}

export default function ProductCard({title, desc, price, image, benefits}:ProductCardProps){
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      
        // These options are needed to round to whole numbers if that's what you want.
        //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
        //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
      });


    return(
        <div className="flex flex-row relative bg-black/90 bg-gradient-to-br from-[#4ff9ff]/[16%] to-[#5324B8]/[16%] h-52 xs:h-48 w-full md:w-[350px] p-2 rounded-xl border-[1px] border-gray-500/30 
                        transition-all duration-300 hover:shadow-cyan-700/50 hover:shadow-lg hover:scale-105 hover:cursor-pointer">
            <div className="w-90 flex flex-col h-full justify-between ">
                <div className="flex flex-col">                
                    <span className="text-white text-md">{title}</span>
                    <span className="text-[#39F8F8] text-sm z-10 w-[80%] pb-2">{desc}</span>
                    <ul className="list-disc pl-4">
                        {benefits.map((benefit,index) => (
                            <li key={index} className="text-[#39F8F8] text-xs">{benefit}</li>
                        ))}
                    </ul>
                </div>

                <div className="flex flex-row gap-2 items-end">
                    <div className="border-[0.01em] border-gray-300/[5%] rounded-full p-[6px] bg-gradient-to-br 
                                  from-[#06060B] to-transparent hover:scale-110 transition-all duration-300 hover:shadow-cyan-500/50 hover:shadow-md">
                        <Image 
                            src={'/home/products/add-to-card.svg'}
                            alt="Add to Cart"
                            width={50}
                            height={50}
                            className="w-6 h-6"
                        />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[#6EFFFF] text-[14px]/[12px] font-normal">from {formatter.format(price)}</span>
                        <span className="text-white text-[24px]/[24px] font-thin">{formatter.format(price)}</span>
                    </div>
                </div>
            </div>
            <Image 
                src={image}
                alt="Product Image"
                width={300}
                height={400}
                className="w-[120px] xs:flex xs:w-[150px] xs:h-[230px] absolute bottom-0 top-0 my-auto  right-[-1rem] md:right-[-3rem] object-cover z-1"
            />
        </div>
    )
}