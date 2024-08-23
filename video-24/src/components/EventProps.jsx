import "./Ev.css"

export const EventProps = () => {
    
    const HandleWelcomeUser = (user) => {
        alert(`Hey, ${user}`)
    }
    const handleHover = () => {
        alert(`Hey Thanks for hovering me`);
    }

    return (
        <>
            <WelcomeUser
                // onClick={() => HandleWelcomeUser("Amit")}
                onButtonClick={() => HandleWelcomeUser("Amit")}
                onMouseEnter={handleHover}
            />
        </>
    )
}

// const WelcomeUser =(props)=>{
//     const handleGreeting =()=>{
//         console.log(`Hey User, welcome`);
//         props.onClick();
//     }
//     return(
//         <>
//         <button onClick={props.onClick}>Click</button>
//         <button onMouseEnter={props.onMouseEnter}>Hover me</button>
//         <button onClick={handleGreeting}>Greeting</button>
//         </>
//     )
// }

const WelcomeUser =(props)=>{
    // const {onClick, onMouseEnter} = props;
    const {onButtonClick, onMouseEnter} = props;

    const handleGreeting =()=>{
        console.log(`Hey User, welcome`);
        onButtonClick()
    }
    return(
        <>
        {/* yaha same hi hona chiyea (onClick) */}
        <button onClick={onButtonClick}>Click</button>
        <button onMouseEnter={onMouseEnter}>Hover me</button>
        <button onClick={handleGreeting}>Greeting</button>
        </>
    )
}