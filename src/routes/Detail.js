/* useParams: url 값을 반환 */
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function Detail(){
    const { id } = useParams(); // { id } = useParams().id
    console.log(id);

    async function getMovies(){
        const json = await(await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
        console.log(json);
    }
    useEffect(()=>{
        getMovies();
    }, [])



    return(
        <h1>Details</h1>
    );
}