import { DotsHorizontalIcon, SearchIcon } from "@heroicons/react/outline";
import { BadgeCheckIcon } from "@heroicons/react/solid";

export default function Trending () {
    return(
        <div className="hidden lg:flex flex-col ml-7 mt-4">
            <div className="flex space-x-3 bg-white bg-opacity-10
            w-[300px] h-[44px] p-3 rounded-3xl">
                <SearchIcon className="w-6 text-gray-600" />
                <input className="bg-transparent focus:outline-none placeholder:text-gray-600" placeholder="Search Twitter"/>
            </div>
            <div className="w-[300px] h-[500px] bg-white bg-opacity-10 rounded-3xl mt-3">
                <h1 className="font-bold etxt-xl p-3">What's happening?</h1>
                <div className="relative p-3">
                    <DotsHorizontalIcon className="absolute right-4 w-5 text-gray-600"/>
                    <p className="text-xs text-gray-500">Trending in US</p>
                    <h1 className="text-[15px] font-bold">China</h1>
                    <p className="text-xs text-gray-500">340K Tweets</p>
                </div>
                <div className="relative p-3">
                    <DotsHorizontalIcon className="absolute right-4 w-5 text-gray-600"/>
                    <p className="text-xs text-gray-500">Trending in US</p>
                    <h1 className="text-[15px] font-bold">China</h1>
                    <p className="text-xs text-gray-500">340K Tweets</p>
                </div>
                <div className="relative p-3">
                    <DotsHorizontalIcon className="absolute right-4 w-5 text-gray-600"/>
                    <p className="text-xs text-gray-500">Trending in US</p>
                    <h1 className="text-[15px] font-bold">China</h1>
                    <p className="text-xs text-gray-500">340K Tweets</p>
                </div>
                <div className="relative p-3">
                    <DotsHorizontalIcon className="absolute right-4 w-5 text-gray-600"/>
                    <p className="text-xs text-gray-500">Trending in US</p>
                    <h1 className="text-[15px] font-bold">China</h1>
                    <p className="text-xs text-gray-500">340K Tweets</p>
                </div>
                <div className="relative p-3">
                    <DotsHorizontalIcon className="absolute right-4 w-5 text-gray-600"/>
                    <p className="text-xs text-gray-500">Trending in US</p>
                    <h1 className="text-[15px] font-bold">China</h1>
                    <p className="text-xs text-gray-500">340K Tweets</p>
                </div>
            </div>
            <div className="w-[300px] h-[300px] bg-white bg-opacity-10 rounded-3xl mt-3">
                <h1 className="font-bold etxt-xl p-3">Who to follow?</h1>
                <div className="flex justify-between p-3">
                    <div className="flex space-x-3">
                    <img src="/assets/bragg.png" className="w-11 h-11 rounded-full object-cover"/>
                    <div>
                    <div className="flex space-x-1">
                        <h1 className="font-bold">David Bragg</h1>
                        <BadgeCheckIcon className="w-[18px] text-blue-400"/>
                    </div>
                    <h1 className="text-[12px] text-gray-500 mt-1">@davidbragg</h1>
                    </div>
                    </div>
                    <button className="bg-white text-black text-sm w-20 h-8 rounded-3xl font-bold">Follow</button>
                </div>
                <div className="flex justify-between p-3">
                    <div className="flex space-x-3">
                    <img src="/assets/kylie.png" className="w-11 h-11 rounded-full object-cover"/>
                    <div>
                    <div className="flex space-x-1">
                        <h1 className="font-bold">Kylie Jenner</h1>
                        <BadgeCheckIcon className="w-[18px] text-blue-400"/>
                    </div>
                    <h1 className="text-[12px] text-gray-500 mt-1">@kylie</h1>
                    </div>
                    </div>
                    <button className="bg-white text-black text-sm w-20 h-8 rounded-3xl font-bold">Follow</button>
                </div>
                <div className="flex justify-between p-3">
                    <div className="flex space-x-3">
                    <img src="/assets/pfp.png" className="w-11 h-11 rounded-full object-cover"/>
                    <div>
                    <div className="flex space-x-1">
                        <h1 className="font-bold">Elon Musk</h1>
                        <BadgeCheckIcon className="w-[18px] text-blue-400"/>
                    </div>
                    <h1 className="text-[12px] text-gray-500 mt-1">@elonmusk</h1>
                    </div>
                    </div>
                    <button className="bg-white text-black text-sm w-20 h-8 rounded-3xl font-bold">Follow</button>
                </div>
            </div>
        </div>
    )
}