// 20
import Amit from "./Netflix.module.css"
export const SeriesCard = ({ data }) => {
    const { id, img_url, name, rating, description, cast, genre, watch_url } = data;

    const btn_style = {
        padding: "1.2rem 2.4rem",
        border: "none",
        fontSize: "1.6rem",
        // backgroundColor: "var(--btn-hover-bg-color) ",
        backgroundColor: `${rating >= 8.5 ? "#7dcea0" : "#f7dc6f"}`,
        color: "var(--bg-color)"
    }

    const ratingClass = rating >= 8.5 ? Amit.super_hit : Amit.average;
    return (
        <li className={Amit.card}>
            <div>
                <img
                    src={img_url}
                    alt={name}
                    width="40%"
                    height="40%"
                />
            </div>
            <div className={Amit["card-content"]}>
                <h2>Name: {name} </h2>
                <h3>Rating: <span className={`${Amit.rating} ${ratingClass}`} >{rating}</span> </h3>
                <p>Summary: {description} </p>
                <p>Genre: {genre} </p>
                <p>Caste: {cast} </p>
                <a href={watch_url} target="_blank">
                    <button style={btn_style}>Watch Now</button>
                </a>
            </div>
        </li>
    )
}

