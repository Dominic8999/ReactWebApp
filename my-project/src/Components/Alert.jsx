import { useState } from "react";

export default function Alert(){

    const [content, setContent] = useState(null)

    function handleClick(){
        setContent(
        <div className="
        block
        border border-red-500 border-5" >
            <h2>Are you sure?</h2>
            <button onClick={() => handleProceed()}>Proceed</button>
        </div>)
    }

    function handleProceed(){
        setContent(null)
    }
        return(
        <>
            {content}
            <button onClick={() => handleClick()}>Delete</button>
        </>
    )
}