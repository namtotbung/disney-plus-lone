const HeaderItem = ({ name, icon : Icon }) => {
    return (
        <div className="text-base font-semibold flex items-center gap-3 cursor-pointer hover:underline underline-offset-8">
            <Icon/>
            <h2>{name}</h2>
        </div>
    )
}

export default HeaderItem