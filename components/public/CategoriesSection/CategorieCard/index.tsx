import Link from "next/link"
import Image from "next/image"
type CategorieCardProps = {
    href: string;
    img: string;
    label: string;
}
export default function CategorieCard({href, img, label}:CategorieCardProps){

    return(
        <Link href={href} className="relative w-50 rounded-sm group">
            <Image src={img} alt="Categorie Logo" width={200} height={200} className=""/>
            <span className="absolute bottom-0 right-0 left-0 text-center font-500 text-white bg-gradient-to-t
             from-purple-900/[50%] to-blue-900/[0%] py-1 rounded-sm md:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {label}
            </span>
        </Link>
    )
}