import ProductCard from "./ProductCard";

export default function BestSellers(){


    const products = [
        {title:'Teclado Gamer', price: 150, img: '/home/products/keyboard.png', 
         desc: 'The best keyboard for gaming, with RGB lights and mechanical keys',benefits: ['RGB Lights','Mechanical Keys','Ergonomic Design']},
        {title:'Mouse Gamer', price: 100, img: '/home/products/mice.png', desc: 'The best mouse for gaming, with RGB lights and mechanical keys',benefits: ['RGB Lights','Mechanical Keys','Ergonomic Design']},
        {title:'HeadPhones', price: 200, img: '/home/products/headset.png', desc: 'The best headphones for gaming, with RGB lights and mechanical keys',benefits: ['RGB Lights','Wireless Conection','Ergonomic Design']},
         

    ]
    return(
        <div className="flex flex-col my-12 items-center gap-8 ">
            <h2 className="text-white text-2xl font-bold">Weekly Best Sellers</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 items-center justify-center gap-12 box-content px-2">
                {products.map(({title,price,img,desc,benefits},index) => (
                    <ProductCard key={index} title={title} price={price} desc={desc} image={img} benefits={benefits}/>
                ))}
            </div>
        </div>
    )
}