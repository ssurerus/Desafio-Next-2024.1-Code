import Link from "next/link"
import Image from "next/image"
import Steps from "./Steps";

export default function PurchaseSteps() {
    const steps = [
        {title:'Choose your Product', icon:'/icons/selectproduct.svg'},
        {title:'Secure Payment', icon:'/icons/paymentmethod.svg'},
        {title:'Fast Delivery', icon:'/icons/fastdelivery.svg'},
        {title:'Enjoy the Best!', icon:'/icons/enjoythebest.svg'},
    ]
  return (
    <div className="flex flex-col text-white px-4 my-12 items-center w-full md:w-[80%] lg:w-[70%] md:gap-10">
        <div className="flex flex-col text-center md:text-start gap-1 md:self-start">
            <h2 className="flex flex-col font-bold text-2xl/[24px]"><span>We Like To Keep It</span><span>Fast And Easy</span></h2>
            <p className="text-sm/[16px] md:flex md:flex-col"><span>Buying anything, devices and hardwares has never been this easy.</span><span>Just select your desired product, make a payment and enjoy!</span></p>
        </div>
        <div className="flex flex-col md:flex-row items-center md:items-start md:justify-center w-full ">
            <div className="md:order-2 w-full md:w-[60%] md:mt-[-2rem] lg:mt-[-5rem]">
                <Image 
                    src={'/home/purchase/completed-order.png'}
                    alt="Completed Order"
                    width={1920}
                    height={1080}
                    className="w-full md:w-full lg:w-[80%]"
                />
            </div>
            <div className="flex flex-col items-center w-full gap-2 md:gap-6 md:w-[50%] lg:w-[40%] md:items-start ">
                {steps.map(({title,icon}, index) => (
                    <Steps key={index} title={title} icon={icon}/>
                ))}
            </div>
        </div>
    </div>
  );
}