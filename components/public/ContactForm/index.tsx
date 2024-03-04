import Link from "next/link";
import Image from "next/image";

export default function ContactForm(){
    const socials = [
        {href: 'https://www.whatsapp.com/', label: '+55 (32) 9 9999-88888', icon:'/icons/whatsapp.svg'},
        {href: 'email@hotmail.com', label: 'contact@gamestore.com', icon:'/icons/email.svg'},
        {href: 'https://www.facebook.com/', label: 'Facebook', icon:'/icons/facebook.svg'},
        {href: 'https://www.instagram.com/', label: 'Instagram', icon:'/icons/instagram.svg'},
    ]
    return(
        <div className="w-full lg:w-[60%] flex flex-col md:flex-row justify-center">
            <div className="bg-[#2563EB] text-white font-light py-4 md:py-6 px-2 rounded-tr-lg rounded-tl-lg md:rounded-tr-[0] md:rounded-l-lg  flex flex-col items-center gap-8  md:w-1/2 lg:w-[40%]">
                <h3 className="font-bold text-lg md:text-2xl md:pb-10">Contact Information</h3>
                <div className="flex flex-col gap-4 w-[80%]">
                    {socials.slice(0,2).map(({href, label,icon},index) => (
                        <Link key={index} href={href} className="flex flex-rol items-center gap-2 text-sm md:text-lg break-all">
                            <Image src={icon} alt={`${label} Logo`} width={28} height={28} className="w-7 h-7"/>
                            {label.toUpperCase()}
                        </Link>
                    ))}
                </div>
                
                <div className="flex flex-row gap-2 items-center md:self-start md:py-4">
                        <Image 
                            src={'/icons/placemarker.svg'}
                            alt="Location Icon"
                            width={78}
                            height={78}
                            className="w-16 h-16"
                        />
                        <p className="text-sm flex flex-col"><span className="md:flex md:flex-col"><span>Diagorou 4, Kermia Building, 6th floor,</span><span> Nicosia, Cyprus.</span></span><span>Reg. number: HE395043</span></p>
                </div>

                <div className="flex flex-col gap-4 w-[80%]">
                    {socials.slice(-2).map(({href, label,icon},index) => (
                        <Link key={index} href={href} className="flex flex-rol items-center gap-2 text-sm md:text-lg">
                            <Image src={icon} alt={`${label} Logo`} width={28} height={28} className="w-7 h-7"/>
                            {label.toUpperCase()}
                        </Link>
                    ))}
                </div>
            </div>

            <div className="bg-[#1F2328] flex flex-col gap-12 py-12 md:py-16 px-8 w-full md:w-[50%] lg:w-[60%] md:rounded-r-lg">
                <div className="flex flex-col gap-4 md:gap-8 py-10">
                    <input type="text" placeholder="FULL NAME"  
                    className="bg-[#13151B] text-[#BDBDBD] px-[11px] md:px-[22px] py-[9px] md:py-[17px] rounded-[4px] border-[1px] border-[#6B7280]/50 text-[12px] md:text-[1rem]"/>
                    <input type="email" placeholder="EMAIL ADRESS" className="bg-[#13151B] text-[#BDBDBD] px-[11px] md:px-[22px] py-[9px] md:py-[17px] rounded-[4px] border-[1px] border-[#6B7280]/50 text-[12px] md:text-[1rem]"/>
                    <textarea
                        placeholder="How we can help you? Leave your message here"
                        rows={5}
                        className="p-3 md:px-[22px] md:py-[17px] resize-none bg-[#13151B] text-[#BDBDBD] rounded-[4px] border-[1px] border-[#6B7280]/50 text-[12px] md:text-[1rem]"
                    />
                </div>
                <button className="bg-[#2563EB] text-white font-bold py-3 rounded-[4px] text-[10px] md:text-[1rem]">Send Message</button>
            </div>
        </div>
    )
}