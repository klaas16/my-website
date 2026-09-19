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
        },
        {
            title: "Steppenwolf",
            desc: "Ein Mann auf der Suche nach sich selbst.",
            image: "/bookCover/steppenwolf.png",
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
                    desc={book.desc}
                    image={book.image}
                />
                ))
            }
        </div>

        {book && (
            <dialog className="book-dialog" ref={dialogRef}>
                <h2>
                    {book.title}
                </h2>
                <p>
                    {book.desc}
                </p>
                <button onClick={() => {
                    dialogRef.current.close()
                    setBook(null)
                    }}>
                    Close
                </button>
            </dialog>
        )}

        {/*<Counter /> */}

    </>
  );
}

export default App;
