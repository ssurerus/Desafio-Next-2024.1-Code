import Link from "next/link";
import Image from "next/image";

type LinkTreeProps = {
    title: string;
}

export default function SocialMedias({title}:LinkTreeProps){
    const socials = [
        {href: 'https://www.youtube.com/', label: 'Youtube', icon:'/icons/youtube.svg'},
        {href: 'https://www.whatsapp.com/', label: '+55 (32) 9 9999-88888', icon:'/icons/whatsapp.svg'},
        {href: 'https://www.instagram.com/', label: 'Instagram', icon:'/icons/instagram.svg'},
        {href: 'https://www.facebook.com/', label: 'Facebook', icon:'/icons/facebook.svg'},
    ]
    return(
        <div className="flex flex-col items-center md:items-start text-white gap-4">
            <h2 className="text-xl md:text-sm lg:text-2xl font-bold">
                {title.toUpperCase()}
            </h2>
            <div className="flex flex-col items-start gap-6 md:gap-4 font-thin"> 
                {socials.map(({href, label,icon},index) => (
                    <Link key={index} href={href} className="flex flex-rol items-center text-sm lg:text-xl">
                        <Image src={icon} alt={`${label} Logo`} width={28} height={28} className="w-7 h-7"/>
                        {label.toUpperCase()}
                    </Link>
                ))}
            </div>
        </div>
    )
}