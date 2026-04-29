const Functions = () => {
    const clickingFunction = (elem) => {
        console.log("asdad");
        return(<h1>ss{elem.clientX}</h1>) 
    }
    return (
        <>
            <div>
                <button type="button" onClick={(elem) => {
                    clickingFunction(elem)
                }}>Click Me</button>
            </div>
        </>
    )
}
export default Functions;