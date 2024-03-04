'use client'
import { editMember } from "@/actions/admin/action";
import { Member } from "@/types/data";
import { X as CloseX } from "lucide-react";
import { useState } from "react";

type ModalCreateUserProps = {
    member: Member;
    disable: boolean,
    onCloseModal: () => void;
};

export default function ModalEditMember({member, onCloseModal, disable}: ModalCreateUserProps){
    const handleCreate = async (event: React.FormEvent) => {
            event.preventDefault();
            try {
                const formData = new FormData(event.currentTarget as HTMLFormElement);
                editMember(Number(member.id),formData);
                onCloseModal();
            } catch (error) {
                console.error("Erro ao criar membro:", error);
            }
        };

        const [name, setName] = useState(member.name);
        const [email, setEmail] = useState(member.email);
        const [cargo, setCargo] = useState(member.cargo);

    return(
        <div className="w-full lg:w-1/2 py-10 px-8 backdrop-blur-sm bg-slate-500/20 rounded-lg flex flex-col ">
            <div className="hover:cursor-pointer hover:border-[1px] hover:border-[#FF0000] flex flex-row items-center rounded-full justify-center w-8 h-8 self-end">
                <CloseX color="red" className="" onClick={onCloseModal} />
            </div>
                      
            <form onSubmit={handleCreate} className="flex flex-col gap-10 w-full items-center">
                <h3 className="text-white text-2xl">{disable ? 'About' : 'Edit'} the Member</h3>
                <div className="flex flex-col gap-4 w-full">
                    <input type="text" name="name" placeholder="NOME" disabled={disable}
                    value={name} onChange={(e) => setName(e.target.value)}
                    className="bg-[#13151B] text-[#BDBDBD] px-[11px] md:px-[22px] py-[9px] md:py-[17px] rounded-[4px] border-[1px] border-[#6B7280]/50 text-[12px] md:text-[1rem] outline-none"/>
                    <input type="email" name="email" placeholder="EMAIL" disabled={disable}
                    value={email} onChange={(e) => setEmail(e.target.value)}
                    className="bg-[#13151B] text-[#BDBDBD] px-[11px] md:px-[22px] py-[9px] md:py-[17px] rounded-[4px] border-[1px] border-[#6B7280]/50 text-[12px] md:text-[1rem] outline-none"/>
                    <input type="text" placeholder="CARGO" name="cargo" disabled={disable}
                    value={cargo}
                    onChange={(e) => setCargo(e.target.value)}
                    className="bg-[#13151B] text-[#BDBDBD] px-[11px] md:px-[22px] py-[9px] md:py-[17px] rounded-[4px] border-[1px] border-[#6B7280]/50 text-[12px] md:text-[1rem] outline-none"/>
                </div>
                {!disable ? 
                    <button type="submit" className="flex flex-row items-center justify-center 
                    gap-1 text-white text-md py-2 px-6 mb-12 md:mb-3
                    border border-[#444444]/[41%] rounded-full 
                    bg-gradient-to-r  from-[#EBFF0A]/[25%] hover:from-[#EBFF0A]/[45%] hover:to-[#F1FD5D]/[7%] to-[#F1FD5D]/[10%] w-full">
                        Update
                    </button>
                : null}

            </form>
        </div>
    )

}