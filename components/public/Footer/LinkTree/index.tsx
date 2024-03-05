import Link from "next/link";

type LinkTreeProps = {
    title: string;
    type: string;
}

export default function LinkTree({title, type}:LinkTreeProps){

    

    const links = {
        sitemap: [
            {href: '/home', label: 'Home'},
            {href: '/contact', label: 'Contact'},
            {href: '/signin', label: 'Sign In'},
        ],
        informations: [
            {href: '/privacy-policy', label: 'Privacy Policy'},
            {href: '/refund-policy', label: 'Refund Policy'},
            {href: '/terms-and-conditions', label: 'Terms and Conditions'},
        ]
    }
    let treetype = links.sitemap;
    if(type === 'informations'){treetype = links.informations}

    return(
        <div className="flex flex-col items-center md:items-start text-white gap-4">
            <h2 className="text-xl md:text-sm lg:text-2xl font-bold">
                {title.toUpperCase()}
            </h2>

            <div className="flex flex-col items-center md:items-start gap-6 md:gap-4 text-sm lg:text-xl"> 
                {treetype.map(({href, label},index) => (
                    <Link key={index} href={href} className="">
                        {label.toUpperCase()}
                    </Link>
                ))}
            </div>
        </div>
    )
}