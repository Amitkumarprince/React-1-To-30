import "./Ev.css";
export const EventHandling = () => {
    // function handleButtonClick() {
    //     alert("Hey I am onClick Event")
    // }

    // const handleButtonClick = () => {
    //     console.log("hey I am onClick")
    // }

    const handleButtonClick = (event) => {
        console.log(event)
        console.log(event.target)
        console.log(event.type)
        alert("Hey I am onClick Event");
    };

    const handleWelcomeUser = (user) => {
        console.log(`Hey ${user}, Welcome`);
    }

    return (
        <>
            {/* function comoponents with named functions */}

            {/* Remember how we haven't called this function, if you call this function here then it will run without even clicking. you just neeed to pass referenced and not call here. */}
            <button onClick={handleButtonClick}>click me</button>
            <br />
            {/* In React, event handlers receive the event object as an argument by default.
             However, when you use an arrow function directly in the onClick attribute without 
             passing the event explicitly, React doesn't pass the event object to your handler 
             function. This is because the arrow function creates a new function and calls 
             your handler without passing any arguments. */}
            {/* <button onClick={() => handleButtonClick()}>click me 2</button> */}
            <button onClick={(event) => handleButtonClick(event)}>click me 2</button>
            <br />
            {/* Inline Event handlers */}
            <button onClick={(event) => console.log(event)}>click me 2</button>
            <br />
            <button onClick={() => alert("Hey I am inline event function")}>
                Inline Arrow Function
            </button>
            {/* passing Arguments to Event Handlers */}
            {/* <button onClick={handleWelcomeUser("Amit")}>click me</button> */}
            <button onClick={() => handleWelcomeUser("Amit")}>click me</button>
            <button onClick={() => handleWelcomeUser("Ram")}>click me</button>
        </>
    )
}