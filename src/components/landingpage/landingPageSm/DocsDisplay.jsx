import EachDoc from "./EachDoc";

const DocsDisplay = () => {
    const docInfo = [{title: "Quick Start on GUI", summary: "A quick start guide for using the graphical query builder"},
        {title: "Quick Start on API", summary: "A quick start guide on API query syntax"}]
    return (
        <div className={"w-screen h-screen bg-black text-white flex flex-col justify-center"} id={"docs"}>
            {docInfo.map(each => <EachDoc info={each} className={"w-full"}></EachDoc>)}
        </div>
    )
}

export default DocsDisplay;