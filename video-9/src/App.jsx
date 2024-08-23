export const App = () => {
  return (
    <>
      <NetflixSeries />
      <NetflixSeries />
    </>
  )
}

// This is a Component
const NetflixSeries = () => {
  const name = "Queen Of Tears";
  const rating = "8.2";
  const summary = "Baek Hyun-woo and Hong Hae-in navigate a tense relationship, both at home and at work. But upon deciding his future, Hyun-woo pays a visit to his family.";
  let age = 26;

  /////////3/////////////
  // let canWatch = "Not Available";
  // if(age >= 18) canWatch = "Watch Now"

  /////////4////////////
  const canWatch = ()=>{
    if(age >= 18) return "Watch Now"
    return "Not Available";
  }

  const returnGenre = () => {
    const genre = "RomCom";
    return genre;
  }

  
    //////////2////////////
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
          {/* <button> {age >= 18 ? "Watch NOw" : "Not Available" } </button>  */}
          {/* //////////3//////////// */}
          {/* <button> {canWatch} </button> */}
          {/* //////////4////////// */}
          <button> {canWatch()} </button>
        </div>
      </div>
    )
  }
  



