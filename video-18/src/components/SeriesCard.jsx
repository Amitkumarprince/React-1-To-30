// 18
// export const SeriesCard = ({data}) => {
//     const {id, img_url, name, rating, description, cast, genre, watch_url} = data;
// return (
//         <li className="card">
//             <div>
//                 <img
//                     src={img_url}
//                     alt={name}
//                     width="40%"
//                     height="40%"
//                 />
//             </div>
//             <div>
//                 <h2>Name: {name} </h2>
//                 <h3 style={{margin: "1.2rem"}}>Rating: {rating} </h3>
//                 <p style={{margin: "1.2rem"}}>Summary: {description} </p>
//                 <p style={{margin: "1.2rem"}}>Genre: {genre} </p>
//                 <p style={{margin: "1.2rem"}}>Caste: {cast} </p>
//                 <a href={watch_url} target="_blank">
//                     <button>Watch Now</button>
//                 </a>
//             </div>
//         </li>
//     )
// }


// export const SeriesCard = ({ data }) => {
//     const { id, img_url, name, rating, description, cast, genre, watch_url } = data;
//     return (
//         <li className="card">
//             <div>
//                 <img
//                     src={img_url}
//                     alt={name}
//                     width="40%"
//                     height="40%"
//                 />
//             </div>
//             <div className="card-content">
//                 <h2>Name: {name} </h2>
//                 <h3>Rating: {rating} </h3>
//                 <p>Summary: {description} </p>
//                 <p>Genre: {genre} </p>
//                 <p>Caste: {cast} </p>
//                 <a href={watch_url} target="_blank">
//                     <button style={{
//                         padding: "1.2rem 2.4rem",
//                         border: "none",
//                         fontSize: "1.6rem",
//                         backgroundColor: "var(--btn-hover-bg-color) ",
//                         color: "var(--bg-color)"
//                     }}>Watch Now</button>
//                 </a>
//             </div>
//         </li>
//     )
// }


// export const SeriesCard = ({ data }) => {
//     const { id, img_url, name, rating, description, cast, genre, watch_url } = data;

//     const btn_style = {
//         padding: "1.2rem 2.4rem",
//         border: "none",
//         fontSize: "1.6rem",
//         backgroundColor: "var(--btn-hover-bg-color) ",
//         color: "var(--bg-color)"
//     }

//     return (
//         <li className="card">
//             <div>
//                 <img
//                     src={img_url}
//                     alt={name}
//                     width="40%"
//                     height="40%"
//                 />
//             </div>
//             <div className="card-content">
//                 <h2>Name: {name} </h2>
//                 <h3>Rating: {rating} </h3>
//                 <p>Summary: {description} </p>
//                 <p>Genre: {genre} </p>
//                 <p>Caste: {cast} </p>
//                 <a href={watch_url} target="_blank">
//                     <button style={btn_style}>Watch Now</button>
//                 </a>
//             </div>
//         </li>
//     )
// }

