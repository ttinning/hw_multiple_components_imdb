const Film = ({title, url}) => {
    return(
        <>
            <li><a href={url}>{title}</a></li>
        </>
    )
}

export default Film;