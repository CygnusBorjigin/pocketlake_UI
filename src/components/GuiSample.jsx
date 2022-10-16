import AttributeSelector from "./AttributeSelector";

const GuiSample = () => {
    return(
        <div className={"h-screen w-screen bg-gray-200"}>
            <h1 className={"text-center pt-4 font-cinzel text-3xl"}>ThrorMap Graphical User Interface Demo</h1>
            <div className={"border-t-3 bottom-black w-screen flex"}>
                <AttributeSelector/>
                <div className={"bg-amber-400 w-1/2"}>

                </div>
            </div>
        </div>
    )
}

export default GuiSample;