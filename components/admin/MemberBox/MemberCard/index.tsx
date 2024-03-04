'use client';
import Image from 'next/image';

import { Member, ModalType } from "@/types/data";
import { useState } from 'react';

type MemberCardProps = {
    member: Member;
    onOpenModal: (type: ModalType, member?: Member) => void;
  };

export default function MemberCard({member, onOpenModal} : MemberCardProps){
    const [isAccordionOpen, setIsAccordionOpen] = useState(false);
    const toggleAccordion = () => setIsAccordionOpen(!isAccordionOpen);

    return(
        <div className="flex flex-col lg:flex-row items-center bg-gradient-to-br from-[#FFFFFF]/[7%] to-[#D9D9D9]/[1%] text-white w-full px-2 lg:pl-[3.18rem] lg:pr-4 py-5 rounded-lg text-center">
                <div className='flex flex-row items-center w-full justify-between lg:w-[40%] gap-1'>
                <Image 
                src={'/members/member_avatar.png'}
                alt='Member Avatar'
                width={120}
                height={120}
                className='rounded-full w-16 lg:w-24 h-16 lg:h-24'
                />
                <div className='flex flex-col lg:mx-auto '>
                    <span className='lg:text-lg text-[#6F6F6F]'>Nome</span>
                    <span className='text-xs lg:text-sm'>{member.name}</span>
                </div>
                <div onClick={toggleAccordion} className={`${isAccordionOpen ? 'rotate-180': 'rotate-0'} bg-blue-700 rounded-full p-2 lg:hidden transition-all duration-300`}>
                    <Image
                        src={'/icons/accord-arrow.svg'}
                        alt='Arrow Icon'
                        width={40}
                        height={40}
                        className='w-4 h-4'
                    />
                </div>
            </div>
            <div className={`${isAccordionOpen ? 'block': 'hidden'} lg:flex flex flex-col lg:flex-row w-full lg:w-[60%] items-center py-6 lg:py-0 gap-4 lg:justify-between transition-all duration-300`}>
                <div className='flex flex-col lg:ml-6'>
                        <span className='lg:text-lg text-[#6F6F6F]'>Cargo</span>
                        <span className='lg:text-sm'>{member.cargo}</span>
                </div>
                <div className='flex flex-col text-wrap'>
                    <span className='lg:text-lg text-[#6F6F6F]'>Email</span>
                    <span className='text-sm lg:text-sm '>{member.email}</span>
                </div>
                <div className='flex flex-row flex-wrap lg:flex-col gap-2 justify-center justify-self-end pr-0'>
                    <button onClick={() => onOpenModal(ModalType.AboutMember, member)} className='box-border outline-none text-sm py-2 px-6 lg:py-3 lg:px-8 rounded-[6px] bg-gradient-to-r from-[#00D455]/[25%] hover:from-[#00D455]/[45%] hover:to-[#5DFD63]/[7%] to-[#5DFD63]/[3%] border-[1px] border-[#444444]/[41%]'>Visualize</button>
                    <button onClick={() => onOpenModal(ModalType.UpdateMember, member)} className='box-border outline-none text-sm py-2 px-6 lg:py-3 lg:px-8 rounded-[6px] bg-gradient-to-r from-[#EBFF0A]/[25%] hover:from-[#EBFF0A]/[45%] hover:to-[#F1FD5D]/[7%] to-[#F1FD5D]/[3%] border-[1px] border-[#444444]/[41%]'>Edit</button>
                    <button onClick={() => onOpenModal(ModalType.DeleteMember, member)} className='box-border outline-none text-sm py-2 px-6 lg:py-3 lg:px-8 rounded-[6px] bg-gradient-to-r from-[#D40000]/[25%] hover:from-[#D40000]/[55%] hover:to-[#AF0000]/[9%] to-[#AF0000]/[3%] border-[1px] border-[#444444]/[41%]'>Delete</button>
                </div>
            </div>
        </div>
    )
}