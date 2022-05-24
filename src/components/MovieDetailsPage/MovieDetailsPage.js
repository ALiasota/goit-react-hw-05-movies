import { useState, useEffect } from "react";
import { movieById } from '../../services/films-api';
import { useParams, useNavigate, Link } from 'react-router-dom';
import styles from './MovieDetailsPage.module.css'
export default function MovieDetailsPage() {
    const { movieId } = useParams();
    let navigate = useNavigate();
  function handleClick() {
    navigate(-1);
  };
    // console.log(history);
    const [movie, setMovie] = useState(null);
    useEffect(() => {
        movieById(movieId).then(setMovie);
    }, [movieId]);
    if (movie) {
        const { poster_path, genres, original_title, overview, release_date, vote_average } = movie;
        const picturePath = `https://image.tmdb.org/t/p/w500${poster_path}`;
    return (   
   
        <>
            <button  className={styles.back} onClick={handleClick}>Go back</button>
            {/* <Link
                className={styles.back}
                to="/">Go back</Link> */}
            <div className={styles.filmCont}>
                <div className={styles.thumb}>
                    <img className={styles.picture} src={picturePath}  alt={original_title} />
                </div>
                <div>
                    <h1>{original_title} ({release_date.split('-')[0]})</h1>
                <p>User Score: {vote_average * 10}%</p>
                <h3>Overview</h3>
                <p>{ overview}</p>
                <h3>Genres</h3>
                <p>{genres.map(({ name }) => <span key={name}>{name } </span> )}</p>
                </div>
                
            </div>
            <div className={styles.additional}>
                <p>Additional information</p>
                <ul>
                    <li>
                        <Link to="/">Cast</Link>
                    </li>
                    <li>
                        <Link to="/">Reviews</Link>
                    </li>
                </ul>
            </div>
          
        </>
    
  );
    }
   
}