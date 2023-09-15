import { HiHome, HiMagnifyingGlass, HiStar, HiPlayCircle, HiTv } from "react-icons/hi2"
import { HiPlus, HiDotsVertical } from "react-icons/hi"
import logo from "../assets/images/logo.png"
import defaultUserPicture from "../assets/default-user-picture.png"
import HeaderItem from "./HeaderItem"
import { useState } from "react"

const Header = () => {
    const [toggleExpansion, setToggleExpansion] = useState(false)
    const menu = [
        {
            name: "HOME",
            icon: HiHome
        },
        {
            name: "SEARCH",
            icon: HiMagnifyingGlass
        },
        {
            name: "WATCH LIST",
            icon: HiPlus
        },
        {
            name: "ORIGINAL",
            icon: HiStar
        },
        {
            name: "MOVIES",
            icon: HiPlayCircle
        },
        {
            name: "SERIES",
            icon: HiTv
        }
    ]
    return (
        <div className="z-10 flex justify-between items-center">
            <div className="flex items-center gap-8">
                <img className="py-4 w-[120px] md:w-[160px] object-cover select-none" src={logo} alt="Logo" />
                <div className="hidden md:flex items-center gap-10">
                    {menu.map((item) => (
                        <HeaderItem key={item.name} name={item.name} icon={item.icon}/>
                    ))}
                </div>
                <div className="flex md:hidden items-center gap-4">
                    {menu.map((item, index) => index < 3 && (
                        <HeaderItem key={item.name} name="" icon={item.icon}/>
                    ))}
                    <div className="relative" onClick={() => setToggleExpansion(!toggleExpansion)}>
                        <HeaderItem name="" icon={HiDotsVertical}/>
                        {toggleExpansion && <div className="z-10 absolute top-8 py-4 px-5 bg-[#121212] flex flex-col gap-2 border-gray-700 border-[1px]">
                            {menu.map((item, index) => index >= 3 && (
                                <HeaderItem key={item.name} name={item.name} icon={item.icon}/>
                            ))}
                        </div>}
                    </div>
                </div>
            </div>
            <div className="mx-6 flex justify-end items-center gap-2">
                <h3 className="text-sm font-semibold cursor-pointer">GUEST</h3>
                <img className="basis-16 overflow-hidden cursor-pointer select-none" src={defaultUserPicture} alt="User Picture" />
            </div>
        </div>
    )
}

export default Header