import { useState } from "react";
import BookCard from "../components/BookCard.jsx";
import BookDialog from "../components/BookDialog.jsx";
import Greeting from "../components/Greeting.jsx";
import books from "../data/books.js";

function BooksExample() {
    const [selectedBook, setSelectedBook] = useState(null);

    return (
        <main className="min-h-screen bg-background p-6 text-snow sm:p-10">
            <Greeting />
            <p className="mt-6 max-w-2xl text-snow/80">
                Here, I am going to write a bit about the books I read recently.
                Let me know if you have some recommendations!
            </p>

            <section
                aria-label="Books I've read"
                className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
                {books.map((book) => (
                    <BookCard
                        key={book.id}
                        book={book}
                        onClick={() => setSelectedBook(book)}
                    />
                ))}
            </section>

            <BookDialog
                book={selectedBook}
                onClose={() => setSelectedBook(null)}
            />
        </main>
    );
}

export default BooksExample;
