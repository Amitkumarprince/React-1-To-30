import { useState } from "react";

export const State = () => {
    // let value = 0;
    // const handleButtonClick =()=>{
    //     value ++;
    //     console.log(value)
    // }

    // console.log(useState())
    // let array = useState()
    // console.log(array)

    const [count, setCount] = useState(0);
    // console.log(count)
    const handleButtonClick = () => {
        setCount(() => count + 1)
    }
    return (
        <>
            <h1>{count} </h1>
            <button onClick={handleButtonClick}>Increment</button>
        </>
    )
}