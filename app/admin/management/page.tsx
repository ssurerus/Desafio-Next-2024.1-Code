import { fetchFilteredMembers } from "@/actions/search/action";
import MemberBox from "@/components/admin/MemberBox";
import MemberCard from "@/components/admin/MemberBox/MemberCard";
import Pagination from "@/components/admin/Pagination";
import SearchWidget from "@/components/admin/SearchWidget";

export default async function Page({
    searchParams,
}:{
    searchParams: {
        query?:string;
        page?:string;
    }
}){
   
    const query = searchParams?.query || ''
    const currentPage = Number(searchParams?.page) || 1

    const {members, count, totalPages} = await fetchFilteredMembers(query, currentPage);

    return(
        <div className="w-full min-h-screen flex flex-col items-center py-20">
            <h2 className="text-3xl md:text-6xl text-blue-700 font-bold mb-4 md:mb-12">Members List</h2>
            <div className="w-full px-2 md:w-4/5 xl:w-3/5 flex flex-col gap-4 items-center overflow-hidden">
                <MemberBox members={members}/>

                <Pagination totalPages={totalPages} />
            </div>

            <SearchWidget />
        </div>
    )
}