'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Menu as Bars, X } from "lucide-react"
import { useState } from 'react'

export default function Header(){
    const links = {
        informatives: [
            {href: '/', label: 'Home', classes:'bg-zinc-500 bg-opacity-10 hover:bg-opacity-50', icon:'/icons/home.png'},
            {href: '/contact', label: 'Contact', classes:'bg-gradient-to-r from-[#00C2FF]/[15%] to-[#006C7A]/[1%] hover:from-[#00C2FF]/[50%]', icon:'/icons/celphone.png'},
            {href: '/signin', label: 'Sign In', classes:'bg-gradient-to-r from-[#00D455]/[15%] hover:from-[#00D455]/[50%] to-[#006C7A]/[1%] md:ml-auto', icon:'/icons/avatar.png'},
        ],
        management: [
            {href: '/admin/members', label: 'Members'},
        ]
    }

    const [isNavOpen, setIsNavOpen] = useState(false);
    const toggleNav = () => setIsNavOpen(!isNavOpen);

    return(
        <header className="bg-blue-900 backdrop-blur-sm bg-opacity-[20%] w-full flex flex-row items-center justify-between py-3 md:px-[5%] gap-6 px-4 box-border sticky top-0 left-0 z-[99]">
            <nav className='flex flex-row items-center flex-wrap w-[33%] md:hidden md:pl-4'>
                <Bars color='white' className='bg-[#494949] p-1 w-10 h-10 rounded-md mx-auto' onClick={toggleNav} />
                { isNavOpen ?
                    <div className='bg-black bg-opacity-[30%] h-screen w-screen absolute z-999 top-0 left-0 backdrop-blur-sm ease-in-out d '> 
                        <div className='flex flex-col top-0 left-0 w-[50%] h-screen
                                        items-center relative ease-in-out duration-300
                                        z-10 py-10 px-2 backdrop-blur-sm
                                        bg-gradient-to-br from-[#707070]/[47%] to-[#515050]/[33%]'>

                            <X color="#ff0000" className='absolute top-4 right-4 border border-red-600 rounded-full' onClick={toggleNav}/>

                            <h2 className='text-blue-600 text-2xl font-bold mb-5'>Menu</h2>

                            <div className='flex flex-col items-center gap-4 w-full '>
                                {links.informatives.slice(0,2).map(({href, label, classes,icon},index) => (
                                    <Link href={href} 
                                        key={index} 
                                        className={`flex flex-row justify-center 
                                                    gap-1 text-white text-sm py-2 w-full 
                                                    border border-[#444444]/[41%] rounded-full
                                                    ${classes}`}
                                    >
                                        <Image 
                                            src={icon}
                                            alt='Icon'
                                            width={20}
                                            height={20}
                                            className='h-[18px] w-[18px]'
                                        />
                                        {label}
                                    </Link>
                                ))}
                                {links.management.map(({href, label},index) => (
                                    <Link href={href} 
                                        key={index} 
                                        className='flex flex-row justify-center 
                                                gap-1 text-white text-sm py-2 w-full 
                                                bg-blue-700 border border-blue-700
                                                rounded-full'>
                                        {label}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                : null
                }
            </nav>

            <div className='w-[33%] lg:w-[10%] flex flex-col items-center'>
                <Image 
                    src='/logo/gamestore1.png'
                    alt='Game Store Logo'
                    width={200}
                    height={100}
                    className='h-7 md:h-9 w-24 md:w-28 self-center'
                />
            </div>

            <nav className='hidden md:flex flex-row items-center w-full justify-start gap-4'>
                {links.informatives.map(({href, label, classes,icon},index) => (
                    <Link
                        href={href}
                        key={index}
                        className={`flex flex-row items-center justify-center 
                        gap-1 text-white text-md py-2 px-6
                        border border-[#444444]/[41%] rounded-full
                        ${classes}`}
                    >
                    <Image 
                        src={icon}
                        alt='Icon'
                        width={20}
                        height={20}
                        className='h-[18px] w-[18px]'
                    />
                     {label}
                    </Link>
                ))}
                <div className='hidden mr-48 group relative lg:flex flex-col items-center justify-center'>                
                    <Image 
                    src={'/icons/logged-in.svg'}
                    alt='Avatar'
                    width={50}
                    height={50}
                    className='h-10 w-10 hover:cursor-pointer hover:scale-105'
                    />
                    <div className='absolute -bottom-12 mx-auto flex-col items-center hidden group-hover:flex transition-all duration-300'>
                        <div className="w-0 h-0 border-x-[5px] border-b-[5px] border-b-gray-300/15 border-x-transparent"></div>
                        <div className='bg-gradient-to-br from-[#FFFDFD]/15 to-[#828282]/[12%] rounded-md p-2'>
                            <Link href='/admin/management' className='text-white text-md hover:text-[18px] py-2 px-6 hover:bg-gradient-to-r from-transparent via-blue-700/15 to-transparent transition-all duration-200'>Members</Link>
                        </div>
                    </div>
                </div>
            </nav>

            <div className='w-[33%] md:hidden flex flex-col items-center'>
            {links.informatives.slice(-1).map(({href, label, classes,icon},index) => (
                    <Link
                        href={href}
                        key={index}
                        className={`flex flex-row items-center justify-center 
                        gap-1 text-white text-md py-2 px-2 md:py-2 md:px-6
                        border border-[#444444]/[41%] rounded-md
                        ${classes} bg-blue-700 w-4/5`}
                    >
                        <Image 
                            src={icon}
                            alt='Icon'
                            width={20}
                            height={20}
                            className='h-[18px] w-[18px]'
                        />
                        <span className='hidden md:block'>
                            {label}
                        </span>
                    </Link>
            ))}
            </div>
        </header>
    )
}