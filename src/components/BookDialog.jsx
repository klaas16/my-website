import { useEffect, useRef } from "react";

function BookDialog({ book, onClose }) {
    const dialogRef = useRef(null);

    useEffect(() => {
        const dialog = dialogRef.current;
        if (!dialog) return;

        dialog.showModal();
        return () => dialog.close();
    }, [book]);

    if (!book) return null;

    return (
        <dialog
            ref={dialogRef}
            onClose={onClose}
            className="fixed inset-0 m-auto w-[min(90%,700px)] rounded-xl bg-surface p-8 text-snow backdrop:bg-black/60"
        >
            <button
                type="button"
                aria-label="Close dialog"
                onClick={onClose}
                className="absolute right-3 top-3 flex size-8 items-center justify-center rounded-full text-xl hover:bg-green-surface"
            >
                ×
            </button>

            <div className="flex flex-col gap-6 sm:flex-row">
                <div className="flex-1">
                    <h2 className="font-heading text-2xl text-green">
                        {book.title}
                    </h2>
                    <p className="mt-2 text-sm opacity-70">
                        {book.author} · {book.genre}
                    </p>
                    <p className="mt-4">{book.desc}</p>
                    <p className="mt-4">Rating: {book.rating}/5</p>
                </div>

                <img
                    src={book.image}
                    alt={`Cover of ${book.title}`}
                    className="w-full rounded-lg object-contain sm:w-48"
                />
            </div>
        </dialog>
    );
}

export default BookDialog;
