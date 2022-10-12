/* 영화 정보들을 UI에 뿌려주는 컴포넌트 */
import { Link } from 'react-router-dom';

export default function Movie(props){


    return(
        <div key={ props.movie.id }>
            <img src={props.movie.medium_cover_image} alt={props.movie.title} />
            <h2><Link to={`/movie/${props.movie.id}`}>{ props.movie.title }</Link></h2>
            <p>{ props.movie.summary }</p>
            <ul>
                {
                    props.movie.genres.map((g)=>(<li key={g}> {g} </li>))
                }
            </ul>
        </div>
    );
}