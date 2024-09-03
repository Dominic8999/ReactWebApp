import { useState } from "react";

export default function Alert(){

    const [isClicked, setClicked] = useState(false)

    function handleClick(){
        setClicked(true)
    }

    let content;
    if (isClicked){
        content = <p> Are you sure?</p>
    }
        return(
        <>
            {content}
            <button>Delete</button>
        </>
    )
}