
function Card({children}){
    return(
        <div className="container mx-auto box-border h-32 w-32 px-4 m-56 border-4">
            <div className="border-y-sky-100 text-green-500 underline">
                <p>Hello World</p>
            </div>
            <div className="underline text-blue-900">
                {children}
            </div>
        </div>
    )
}

export default Card