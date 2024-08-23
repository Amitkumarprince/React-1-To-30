export const SeriesCard = ({data}) => {
    const {id, img_url, name, rating, description, cast, genre, watch_url} = data;
return (
        <li key={id}>
            <div>
                <img
                    src={img_url}
                    alt={name}
                    width="40%"
                    height="40%"
                />
            </div>
            <div>
                <h2>Name: {name} </h2>
                <h3>Rating: {rating} </h3>
                <p>Summary: {description} </p>
                <p>Genre: {genre} </p>
                <p>Caste: {cast} </p>
                <a href={watch_url} target="_blank">
                    <button>Watch Now</button>
                </a>
            </div>
        </li>
    )
}