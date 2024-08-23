import { Children } from "react"

export const Profile = () => {
    return (
        <>
            <h1>Profile card challenge</h1>
            <ProfileCard
                name="Alice"
                age={30}
                greeting={
                    <div>
                        <strong>Hi Alice, have a wonderful day!</strong>
                    </div>
                }
            >
                <p>Hobbies: Reading, Hicking</p>
                <button>Contact</button>
            </ProfileCard>

            <ProfileCard
                name="Amit"
                age={26}
                greeting={
                    <div>
                        <strong>Hi Amit, have a wonderful day!</strong>
                    </div>
                }
            >
                <p>Hobbies: Reading, Hicking</p>
                <button>Contact</button>
            </ProfileCard>
        </>
    )
}

// ////////////  first   /////////////////
// const ProfileCard = (props) => {
//     return(
//         <>
//         <h2>Name: {props.name} </h2>
//         <p>Age: {props.age} </p>
//         <p>{props.greeting} </p>
//         <div>{props.Children} </div>
//         </>
//     )
// }

// ////////////  Second   /////////////////
const ProfileCard = (props) => {
    const {name, age, greeting, Children} = props;
    return(
        <>
        <h2>Name: {name} </h2>
        <p>Age: {age} </p>
        <p>{greeting} </p>
        <div>{Children} </div>
        </>
    )
}


// ////////////  Third   /////////////////
// const ProfileCard = ({name, age, greeting, Children}) => {
//     return(
//         <>
//         <h2>Name: {name} </h2>
//         <p>Age: {age} </p>
//         <p>{greeting} </p>
//         <div>{Children} </div>
//         </>
//     )
// }
