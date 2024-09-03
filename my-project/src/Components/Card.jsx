
function Card({children}){
    return(
        <div className="
        container shadow-xl
        box-border border-4 border-cyan-600 border-double 
        size-52 mx-auto my-10 ">
            <div className="
            flex justify-between mx-4
            text-blue-500">
                <p>Hello </p>
                {children}
            </div>
        </div>
    )
}

export default Card