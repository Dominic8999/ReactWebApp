
function Card({children}){
    return(
        <div className="
        container shadow-xl
        box-border border-4 border-cyan-600 border-double 
        size-72 mx-auto my-10 ">
            <div className="
            flex flex-col m-2
            text-blue-500">
                {children}
            </div>
        </div>
    )
}

export default Card