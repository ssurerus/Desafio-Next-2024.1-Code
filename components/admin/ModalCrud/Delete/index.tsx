import { deleteMember } from "@/actions/admin/action";
import { Member } from "@/types/data";
import { X as CloseX } from "lucide-react";

type ModalDeleteUserProps = {
    member: Member;
    onCloseModal: () => void;
  };

export default function ModalDeleteMember({member, onCloseModal}: ModalDeleteUserProps){
    const handleDelete = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
          console.log(`Excluir membro com ID ${member.id} e nome ${member.name}`);
          await deleteMember(Number(member.id));
    
          onCloseModal();
        } catch (error) {
          console.error("Erro ao excluir membro:", error);
        }
      };
    return(
        <div className="w-full lg:w-1/2 p-4 bg-slate-500/25 backdrop-blur-sm rounded-lg flex flex-col">
            <div className="hover:cursor-pointer hover:border-[1px] hover:border-[#FF0000] flex flex-row items-center rounded-full justify-center w-8 h-8 self-end">
                <CloseX color="red" className="" onClick={onCloseModal} />
            </div>
            <form onSubmit={handleDelete}className="flex flex-col gap-4 w-full">
                <div className="text-white font-bold text-lg md:text-xl w-full flex flex-col items-center text-center gap-4">
                    <h3>Are you sure you want to delete permanently</h3>
                    <input type="text" disabled name="name" value={`${member.name} - Id: ${member.id}`}  
                    className="bg-[#13151B] text-[#BDBDBD] px-[11px] md:px-[22px] py-[9px] md:py-[17px] rounded-[4px] border-[1px] border-[#6B7280]/50 text-[12px] md:text-[1rem] outline-none text-center w-3/4"/>
                    <h3>From the System?</h3>
                </div>
                <button type="submit" className="flex flex-row items-center justify-center 
                gap-1 text-white text-md py-2 px-6 md:mb-3
                border border-[#444444]/[41%] rounded-full 
                bg-gradient-to-r from-[#FF0000]/[35%] hover:from-[#FF0000]/[50%] hover:to-[#006C7A]/[15%] to-red-400/15">
                    Delete
                </button>
            </form>
        </div>
    )
}