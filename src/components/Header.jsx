import { HiHome, HiMagnifyingGlass, HiStar, HiPlayCircle, HiTv } from "react-icons/hi2"
import { HiPlus, HiDotsVertical } from "react-icons/hi"
import logo from "../assets/logo.png"
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
        <div className="flex justify-between items-center">
            <div className="flex items-center gap-8">
                <img className="w-[80px] md:w-[115px] object-cover select-none" src={logo} alt="Logo" />
                <div className="hidden md:flex items-center gap-8">
                    {menu.map((item) => (
                        <HeaderItem key={item.name} name={item.name} icon={item.icon}/>
                    ))}
                </div>
                <div className="flex md:hidden items-center gap-8">
                    {menu.map((item, index) => index<3 && (
                        <HeaderItem key={item.name} name="" icon={item.icon}/>
                    ))}
                    <div className="relative" onClick={() => setToggleExpansion(!toggleExpansion)}>
                        <HeaderItem name="" icon={HiDotsVertical}/>
                        {toggleExpansion && <div className="absolute top-6 py-4 px-5 bg-[#121212] flex flex-col gap-2 border-gray-700 border-[1px]">
                            {menu.map((item, index) => index>=3 && (
                                <HeaderItem key={item.name} name={item.name} icon={item.icon}/>
                            ))}
                        </div>}
                    </div>
                </div>
            </div>
            <img className="basis-14 overflow-hidden select-none" src={defaultUserPicture} alt="User Picture" />
        </div>
    )
}

export default Header