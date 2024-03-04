'use client'
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Page(){
    const socials = [
        {href:'htttps://discord.com', label:'Discord Icon', icon:'/icons/discord.svg'},
        {href:'htttps://gmail.com', label:'Gmail Icon', icon:'/icons/google.svg'},
        {href:'https://steam.com', label:'Steam Icon', icon:'/icons/steam.svg'},
        {href:'https://facebook.com', label:'Facebook Icon', icon:'/icons/facebook.svg'},
        {href:'https://twitch.com', label:'Twitch Icon', icon:'/icons/twitch.svg'},
        
    ]
    const router = useRouter();

    const getToLink = () => {
        router.push('/admin/management');
    }

    return(
        <div className="w-full md:items-center justify-center flex flex-col min-h-screen px-4">
            <div className="flex flex-col items-center gap-4 md:gap-8">
                <div className="flex flex-col items-center gap-6">
                    <Image
                    src="/icons/crowicon.svg"
                    alt="GameStoro Icon"
                    width={100}
                    height={100}
                    className="w-20 h-20"
                    />
                    <div className="flex flex-col items-center gap-1 text-center">
                        <h3 className="text-white md:text-3xl font-bold">SIGN IN TO YOUR ACCOUNT</h3>
                        <h4 className="text-[#787878] font-bold">Don&apos;t have an account? <Link href={''} className="text-white hover:text-blue-700 whitespace-nowrap">Create one here.</Link></h4>
                    </div>
                </div>

                <div className="flex flex-row gap-2 w-full">
                    {socials.map(({href, label, icon}, index) => (
                        <Link key={index} href={href} className="bg-[#272A30] md:px-8 py-2 rounded-md w-1/5 flex items-center justify-center"><Image src={icon} alt={label} width={80} height={80} className="w-4 h-4"/></Link>
                    ))}
                </div>
                <div className="flex items-center justify-between w-full">
                    <span className="w-1/5 border-b border-[#1f2328] lg:w-1/4"></span>
                    <div className="text-sm text-center capitalize text-muted-foreground text-[#A1A1AA]">Or login with email</div>
                    <span className="w-1/5 border-b border-[#1f2328] lg:w-1/4"></span>
                </div>
                <div className="flex flex-col w-full gap-2">
                    <input type="email" placeholder="EMAIL ADRESS" className="bg-[#13151B] text-[#BDBDBD] px-[11px] md:px-[22px] py-[9px] md:py-[17px] rounded-[4px] border-[1px] border-[#6B7280]/50 text-[12px] md:text-[1rem]"/>
                    <button onClick={getToLink} className="bg-[#2563EB] text-white font-bold py-3 rounded-[4px] text-[12px] md:text-[1rem]">Sign In</button>
                </div>
            </div>
        </div>
    )
}