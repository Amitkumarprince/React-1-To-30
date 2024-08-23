// 20
import Amit from "./Netflix.module.css"
import styled from "styled-components"

export const SeriesCard = ({ data }) => {
    const { id, img_url, name, rating, description, cast, genre, watch_url } = data;

    const Button = styled.button`
        padding: 1.2rem 2.4rem;
        border: none;
        font-size: 1.6rem;
        background-color: ${(props) => props.amit >= 8.5 ? "#7dcea0" : "#f7dc6f"};
        color: var(--bg-color);
        fontWeight: bold;
        cursor: pointer;
    `

    const Rating = styled.h3`
    font-size: 1.6rem;
    color: #7dcea0;
    tex-transform: capitalize;
    `

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
                {/* <h3>Rating: <span className={`${Amit.rating} ${ratingClass}`} >{rating}</span> </h3> */}
                <Rating>
                    Rating: <span className={`${Amit.rating} ${ratingClass}`} >{rating}</span>
                </Rating>
                <p>Summary: {description} </p>
                <p>Genre: {genre} </p>
                <p>Caste: {cast} </p>
                <a href={watch_url} target="_blank">
                    {/* <Button rating={rating}>Watch Now</Button> */}
                    <Button amit={rating}>Watch Now</Button>
                </a>
            </div>
        </li>
    )
}

