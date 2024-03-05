import Image from 'next/image'
import LinkTree from './LinkTree'
import SocialMedias from './SocialMedias'

export default function Footer(){
    return(
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center bg-gradient-to-br from-[#929292]/[13%] to-[#575757]/[5%] py-12 gap-8 px-4">
            <div className='w-full md:w-[25%] '>
                <Image src={'/logo/gamestore1.png'} alt='GameStore Logo' width={180} height={56}
                    className='w-[180px] h-[56px] lg:w-[250px] lg:h-[80px] mx-auto'
                />
            </div>
            <div className='w-full md:w-[20%] flex flex-col items-center'>
                <LinkTree title='Map' type='sitemap'/>
            </div>
            <div className='w-full md:w-[25%] flex flex-col items-center'>
                <LinkTree title='Informations' type='informations' />
            </div>
            <div className='w-full md:w-[30%] '>
                <SocialMedias title="Our Social Medias"/>
            </div>
        </div>
    )
}