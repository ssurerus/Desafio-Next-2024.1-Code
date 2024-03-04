'use client'
import { useState } from "react";
import Image from 'next/image';
import { X as CloseX} from "lucide-react";
import { useSearchParams, useRouter  } from "next/navigation";


export default function SearchWidget(){
    const searchParams = useSearchParams();
    const router = useRouter()

    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const toggleSearch = () => setIsSearchOpen(!isSearchOpen);
    const [searchTerm, setSearchTerm] = useState<string | ''>(searchParams.get('query') || '');

    const handleSearch = (query: string) => {
        if(!query) {
            return
        }

        const params = new URLSearchParams()
        params.set('query', query)
        router.push(`/admin/management?${params.toString()}`)
    }
    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        handleSearch(searchTerm)
    }
    return(
        <div className="relative z-[80]">
            <div onClick={toggleSearch} className="flex flex-col items-center justify-center p-2 fixed bottom-4 right-4 rounded-full bg-blue-700 hover:cursor-pointer hover:bg-blue-700/50">
                <Image 
                    src={'/icons/search-icon.svg'}
                    alt="Search Icon"
                    width={40}
                    height={40}
                    className="w-8 md:w-10 md:h-10 h-8"
                />
            </div>

            <form onSubmit={handleSubmit} className={`bg-[#1F2328]/[70%] backdrop-blur-sm ${isSearchOpen ? 'flex': 'hidden' } fixed py-8 px-6 md:py-4 md:px-6 right-0 bottom-0 md:right-16 md:bottom-16 w-full md:w-1/4 flex-col items-center gap-4 rounded-md`}>
                    <CloseX onClick={toggleSearch} className="self-end md:hidden border-[1px] border-[#FF0000] rounded-full" color="red"/>
                    <span className="text-white font-bold">SEARCH FOR A MEMBER</span>

                    <div className="flex flex-row justify-stretch w-full">
                        <input type="text" placeholder="Search by name"  
                        className="bg-[#13151B] text-[#BDBDBD] px-[11px] md:px-[22px] py-[9px] md:py-[17px] w-full rounded-l-[4px] border-[1px] border-[#6B7280]/50 text-[12px] md:text-[1rem] outline-none focus:border-blue-700"
                        onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        
                        <button type='submit' className="bg-blue-700 rounded-r-[4px] px-3 flex flex-col">
                            <Image src={'/icons/paperplane.svg'} width={50} height={50} alt="" className="w-6 md:w-9 my-auto" />
                        </button>
                    </div>
            </form>
        </div>
    )
}