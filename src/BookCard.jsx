
function BookCard ({title, desc, image, onClick}) {

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
                <div className={'desc'}>
                    <p>{desc}</p>
                </div>

            </div>
        </>
    )
}
export default BookCard;
