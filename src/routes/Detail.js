/* useParams: url 값을 반환 */
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './Detail.module.css';

export default function Detail(){
    const { id } = useParams(); // { id } = useParams().id
    const [movies, setMovies] = useState([]);

    async function getMovies(){
        const json = await(await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
        setMovies(json.data.movie);
    }
    console.log(movies);
    
    useEffect(()=>{
        getMovies();
    }, [])
    


    return(
        <div className={styles.wrap}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <img src={movies.medium_cover_image}/>
                    <h1>{movies.title}</h1>
                    <p>{movies.year}</p>
                </div>
            </div>
        </div>
    );
}