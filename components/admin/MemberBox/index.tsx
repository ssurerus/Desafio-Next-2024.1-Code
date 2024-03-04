'use client'
import { Membro } from "@prisma/client"
import MemberCard from "./MemberCard"
import { useState } from "react";
import ModalCreateMember from "../ModalCrud/Create";
import ModalDeleteMember from "../ModalCrud/Delete";
import { Member, ModalType } from "@/types/data";
import ModalEditMember from "../ModalCrud/Update";

type MemberBoxProps = {
    members: Membro[],
}

export default function  MemberBox({members}:MemberBoxProps){
    const [isModalOpen, setIsModalOpen] = useState(false);
    const toggleModal = () => setIsModalOpen(!isModalOpen);

    const [modalType, setModalType] = useState(ModalType.None);
    const [selectedMember, setSelectedMember] = useState<Member | null>(null);

        const openModal = (type: ModalType, member?: Member) => {
            setModalType(type);
            setSelectedMember(member || null);
        };
    
        const closeModal = () => {
        setModalType(ModalType.None);
        setSelectedMember(null);
        };
    return(
        <>            
        <button onClick={() => openModal(ModalType.CreateMember)} className="flex flex-row items-center justify-center 
            gap-1 text-white text-md py-2 px-6 mb-12 md:mb-3
            border border-[#444444]/[41%] rounded-full 
            bg-gradient-to-r from-[#00D455]/[15%] hover:from-[#00D455]/[50%] to-[#006C7A]/[1%]">
                Create New Member
        </button>
        <div className="w-full flex flex-col gap-4">
        {members.map((member:Membro,index) => (
                <MemberCard key={index} member={member} onOpenModal={openModal}/>
        ))}
        {modalType !== ModalType.None && (
            <div className="fixed bg-black/50 w-screen h-screen top-0 left-0 flex flex-col items-center justify-center">

                {modalType === ModalType.CreateMember && <ModalCreateMember onCloseModal={closeModal}/>}
                {modalType === ModalType.DeleteMember && selectedMember && <ModalDeleteMember member={selectedMember} onCloseModal={closeModal}/>}
                {modalType === ModalType.UpdateMember && selectedMember && <ModalEditMember member={selectedMember} onCloseModal={closeModal} disable={false}/>}
                {modalType === ModalType.AboutMember && selectedMember && <ModalEditMember member={selectedMember} onCloseModal={closeModal} disable={true}/>}
            </div>
        )}
        </div>
        </>

    )
}