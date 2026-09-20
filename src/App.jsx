import './App.css'
import {useState, useRef, useEffect} from "react";
import Greeting from './Greeting.jsx'
import BookCard from './BookCard.jsx'
{/* import Counter from './Counter.jsx' */}

function App() {

    const [book, setBook] = useState(null);
    const dialogRef = useRef(null);

    useEffect(() => {
        if (book) {
            dialogRef.current.showModal()
        }
    }, [book])

    const books = [
        {
            title: "Brave New World",
            desc: "Die Menschen leben in einer scheinbar utopischen Welt.",
            image: "/bookCover/bravenewworld.png",
            author: "Aldous Huxley",
            genre: "Novel"
        },
        {
            title: "Steppenwolf",
            desc: "Ein Mann auf der Suche nach sich selbst.",
            image: "/bookCover/steppenwolf.png",
            author: "Herman Hesse",
            genre: "Novel"
        }
    ]

  return (
    <>
      <Greeting />

      <p>
        Here, I am going to write a bit about the books I read recently. Let me know if you have some Recommendations :D
      </p>

        <div className="gallery">
            {books.map(book => (
                <BookCard
                    onClick={() => setBook(book)}
                    key={book.title}
                    title={book.title}
                    image={book.image}
                />
                ))
            }
        </div>

        {book && (
            <dialog className="book-dialog" ref={dialogRef}>
                <div className="book-dialog-content">
                    <div className="book-dialog-text">
                        <h2 className="book-dialog-title">
                            {book.title}
                        </h2>
                        <p className="book-dialog-meta">
                            {book.author} - {book.genre}
                        </p>
                        <p className="book-dialog-desc">
                            {book.desc}
                        </p>
                    </div>
                    <div className="book-dialog-side">
                        <div className="rating">
                            <p>Rating: 4/5</p>
                        </div>
                        <div className="illustration">
                            <img className="illustration-img" src={book.image} alt={book.title} />
                        </div>
                    </div>
                </div>
                <div>
                    <button className="book-dialog-close-button" aria-label="Close" onClick={() => {
                        dialogRef.current.close()
                        setBook(null)
                    }}>
                        ×
                    </button>
                </div>
            </dialog>
        )}

        {/*<Counter /> */}

    </>
  );
}

export default App;
