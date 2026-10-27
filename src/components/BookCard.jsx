function BookCard({ book, onClick }) {
    return (
        <button
            type="button"
            onClick={onClick}
            className="flex flex-col items-start gap-3 rounded-xl bg-surface p-4 text-left transition-transform hover:scale-[1.02] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green"
        >
            <img
                src={book.image}
                alt={`Cover of ${book.title}`}
                className="h-64 w-full rounded-lg object-contain"
            />
            <span className="font-heading text-xl text-green">{book.title}</span>
            <span className="text-sm opacity-70">
                {book.author} · {book.genre}
            </span>
            <span className="text-sm">{book.desc}</span>
        </button>
    );
}

export default BookCard;
