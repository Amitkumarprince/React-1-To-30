// This is a Component
// const NetflixSeries = () => {
// export const NetflixSeries = () => {
const NetflixSeries = () => {
    const name = "Queen Of Tears";
    const rating = "8.2";
    const summary = "Baek Hyun-woo and Hong Hae-in navigate a tense relationship, both at home and at work. But upon deciding his future, Hyun-woo pays a visit to his family.";
    let age = 16;

    
    const canWatch = () => {
        if (age >= 18) return "Watch Now"
        return "Not Available";
    }

    const returnGenre = () => {
        const genre = "RomCom";
        return genre;
    }


    return (
        <div>
            <div>
                <img src="1.webp" alt="" width="40%" height="40%" />
            </div>
            <div>
                <h2>Name: {name} </h2>
                <h3>Rating: {6 / 3} </h3>
                <p>Summary: {summary} </p>
                <p>Genre: {returnGenre()} </p>
                <button> {canWatch()} </button>
            </div>
        </div>
    )
}

export default NetflixSeries;


export const Header = () => {
    return <p>copyright @thapatechnical</p>
};

export const Footer = () => {
    return <p>copyright @thapatechnical</p>
};