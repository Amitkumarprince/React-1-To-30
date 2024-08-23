import { useState } from "react";

export const State = () => {

    const [count, setCount] = useState(0);
    console.log("parent components rendered")
    // console.log(count)
    const handleButtonClick = () => {
        setCount(() => count + 1)
    }
    return (
        <>
            <div>
                <h1>{count} </h1>
                <button onClick={handleButtonClick}>Increment</button>
            </div>
            <ChildComponent count={count} />
        </>
    )
}

function ChildComponent({count}) {
    console.log("child components rendered")
    return (
        <div>
            <h2>Child Component - {count} </h2>
        </div>
    );
}

// export function Sibling() {
//     console.log("Sibling components rendered")
//     return (
//         <div>
//             <h2>Siblings</h2>
//         </div>
//     );
// }