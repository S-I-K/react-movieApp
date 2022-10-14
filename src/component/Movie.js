/* 영화 정보들을 UI에 뿌려주는 컴포넌트 */
import { Link } from 'react-router-dom';
import styles from './Movie.module.css';

export default function Movie(props){


    return(
        <div className={styles.movie} key={ props.movie.id }>
            <img src={props.movie.medium_cover_image} alt={props.movie.title} />
            <div className={styles.movieText}>
                <h2><Link to={`/movie/${props.movie.id}`}>{ props.movie.title }</Link></h2>
                <p>summary: { props.movie.summary.length > 235 ? `${props.movie.summary.slice(0, 235)} ...` : props.movie.summary }</p>
                <ul>
                    genres:
                    {
                        props.movie.genres.map((g)=>(<li key={g}> {g} </li>))
                    }
                </ul>
            </div>
        </div>
    );
}