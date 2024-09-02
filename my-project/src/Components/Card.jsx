
function Card({children}){
    return(
        <>
            <div className="border-y-sky-100 text-green-500 underline">
                <p>Hello World</p>
            </div>
            <div className="underline text-blue-900">
                {children}
            </div>
        </>
    )
}

export default Card