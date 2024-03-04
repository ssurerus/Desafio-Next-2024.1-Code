import CategorieCard from "./CategorieCard"

 export default function CategoriesSection(){
    const categorieLinks = [
        {href: '/#', label: 'Keyboards', img: '/categories/keyboards.png'},
        {href: '/#', label: 'Mices', img: '/categories/mices.png'},
        {href: '/#', label: 'HeadPhones', img: '/categories/headphones.png'},
        {href: '/#', label: 'MotherBoards', img: '/categories/motherboards.png'},
        {href: '/#', label: 'Processors', img: '/categories/processors.png'},
        {href: '/#', label: 'Memory Cards', img: '/categories/memorys.png'},
    ]
    return(
        <div className="w-full flex flex-col items-center my-12 gap-12">
            <div className="text-white font-bold text-center">
                <h1 className="flex flex-col text-2xl/[1.5rem] md:text-[3.375rem]/[2.75rem]"><span>The <span className="text-blue-700">All-In-One</span></span><span>Store for Gamers</span></h1>
                <h4 className="text-[10px] md:text-[1rem]">Fair Prices ⸱ Hundreds of options ⸱ High Quality Products</h4>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 px-12 ">
                {categorieLinks.map(({href, label, img},index) => (
                    <CategorieCard href={href} label={label} img={img} key={index}/>
                ))}
            </div>
        </div>
    )
 }