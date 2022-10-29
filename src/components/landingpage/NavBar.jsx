const NavBar = () => {
    const buttonStyle = "m-4 border-b-2 border-b-black hover:border-b-white px-3 font-cinzel text-lg";
    return(
        <div className={"text-amber-50 h-20 flex flex-col justify-center fixed bg-black"}>
            <div className={"w-screen flex justify-between"}>
                <div className={"text-4xl font-cinzel ml-6 flex flex-col"}>
                    <div>
                        <span>Thror</span><span className={"text-green-400"}>Map</span>
                    </div>
                    <span className={"text-sm ml-16"}>Just Ask</span>
                </div>
                <div>
                    <button className={buttonStyle}>Home</button>
                    <button className={buttonStyle}>About Us</button>
                    <button className={buttonStyle}>Docs</button>
                    <button className={buttonStyle}>Dashboard</button>
                    <button className={buttonStyle}>Contact</button>
                </div>
            </div>
        </div>
    )
}

export default NavBar;