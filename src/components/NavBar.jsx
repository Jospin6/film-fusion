import search from "../assets/search.png";

export function NavBar () {
    return <div className="w-full h-[80px] flex justify-between border-b-[1px] border-[#3B3B3B] px-[50px]">
        <div className="text-white leading-[80px] text-[25px]">filmFusion</div>
        <div className="h-[80px] flex items-center justify-center">
            <img src={search} alt="Search" />
        </div>
    </div>
}