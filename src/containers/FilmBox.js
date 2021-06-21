import { useState } from "react";
import FilmList from "../components/FilmList";
import FilmForm from "./FilmForm";

const FilmBox = () => {

    const addFilm = submittedFilm => {
        submittedFilm.id = Date.now();
        const updatedFilms = [...films, submittedFilm];
        setFilms(updatedFilms)
    }

    const [films, setFilms] = useState(
        [
            {
                id: 1,
                title: "Fast & Furious 9",
                url: "https://www.imdb.com/title/tt5433138/?ref_=rlm"
            },
            {
                id: 2,
                title: "Supernova",
                url: "https://www.imdb.com/title/tt11169050/?ref_=rlm"
            }
        ]
    )

    return(
        <>
        <h1>Film Releases</h1>
        <FilmList films={films}/>
        <FilmForm onFilmSubmit={(film) => {addFilm(film)}}/>
        </>
    )
}

export default FilmBox