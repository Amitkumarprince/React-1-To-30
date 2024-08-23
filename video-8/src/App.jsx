export const App = () => {
  return (
    <>
      <NetflixSeries />
    </>
  )
}

// This is a Component
const NetflixSeries = () => {
  const name = "Queen Of Tears";
  const rating = "8.2";
  const sumamry = "Baek Hyun-woo and Hong Hae-in navigate a tense relationship, both at home and at work. But upon deciding his future, Hyun-woo pays a visit to his family.";

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
        {/* <h3>Rating: {rating} </h3> */}
        {/* <h3>Rating: {6 + 3.2} </h3> */}
        <h3>Rating: {6 / 3} </h3>
        <p>Sumamry: {sumamry} </p>
        <p>Genre: {returnGenre()} </p>
      </div>
    </div>
  )
}

