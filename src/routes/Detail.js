/* useParams: url 값을 반환 */
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './Detail.module.css';

export default function Detail(){
    const { id } = useParams(); //{ id } = useParams().id
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState([]);

    async function getMovies(){
        const json = await(
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setLoading(false);
        setMovie(json.data.movie);
    };
    useEffect(()=>{
        getMovies();
    } ,[]);

    console.log(movie);



    return(
        <div className={styles.wrap}>
            {loading ? <div className={styles.loading}>Loading ...</div> : 
            <div className={styles.container}>
                <img src={movie.medium_cover_image}></img>
                <h1>{ movie.title }</h1>
                <ul>
                    genres :
                    {
                        movie.genres.map((g)=>(<li key={g}> {g} </li>))
                    }
                </ul>
            </div>
            }
        </div>
    );
}