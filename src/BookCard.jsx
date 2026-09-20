
function BookCard ({title, desc, image, author, genre, onClick}) {

    return (
        <>
            <div className='book' onClick={onClick}>
                <img src={image}
                     alt={title}
                     width="200"
                />
                <div className={'title'}>
                    <p>{title}</p>
                </div>
                <div className={'autor-genre'}>
                    <p>{author}, {genre}</p>
                </div>
                <div className={'desc'}>
                    <p>{desc}</p>
                </div>

            </div>
        </>
    )
}
export default BookCard;
