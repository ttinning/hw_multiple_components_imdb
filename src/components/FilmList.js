import Film from "./Film";

const FilmList = ({films}) => {
    const filmNodes = films.map(film => {
        return(
            <Film url={film.url} title={film.title} key={film.id}></Film>
        );
    });

    return(
        <>
            <ul>{filmNodes}</ul>
        </>
    );
};
export default FilmList