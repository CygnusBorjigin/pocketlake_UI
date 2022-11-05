import EachDoc from "./EachDoc";

const DocsDisplay = () => {
    const docInfo = [{title: "Quick Start on GUI", summary: "A quick start guide for using the graphical query builder"},
        {title: "Quick Start on API", summary: "A quick start guide on API query syntax"}]
    return (
        <div className={"w-screen h-screen text-white flex flex-col justify-center"} id={"docs"}>
            <div className={"h-1/2 flex justify-center mt-[300px]"}>
                    {docInfo.map(each => <EachDoc info={each}></EachDoc>)}
            </div>
        </div>
    )
}

export default DocsDisplay;