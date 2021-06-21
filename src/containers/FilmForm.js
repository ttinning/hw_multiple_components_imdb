import { everyLimit } from "async";
import { useState } from "react";
import Film from "../components/Film";

const FilmForm = ({onFilmSubmit}) => {
    
    const [title, setTitle] = useState("");
    const [url, setUrl] = useState("");

    const handleTitleChange = (evt) => {
        setTitle(evt.target.value);
    };

    const handleUrlChange = (evt) => {
        setUrl(evt.target.value);
    };

    const handleFormSubmit = (evt) => {
        evt.preventDefault();
        const titleToSubmit = title.trim();
        const urlToSubmit = url.trim();
        if (!titleToSubmit || !urlToSubmit){
            return
        };
        onFilmSubmit({
            title: titleToSubmit,
            url: urlToSubmit
        });

        setTitle("");
        setUrl("");
    }

    return(
        <form className="film-form" onSubmit={handleFormSubmit}>
            <input type="text" placeholder="Film Title" value={title} onChange={handleTitleChange}></input>
            <input type="url" placeholder="Enter Website" value={url} onChange={handleUrlChange}></input>
            <input type="submit" value="Post"></input>
        </form>
    )
}

export default FilmForm;