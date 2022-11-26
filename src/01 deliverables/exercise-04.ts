console.log("************** DELIVERABLE 04 *********************");

const books: Book[] = [
    { title: "Harry Potter y la piedra filosofal", isRead: true },
    { title: "Canción de hielo y fuego", isRead: false },
    { title: "Devastación", isRead: true },
];

function isBookRead(books: Book[], titleToSearch: String) {
    return books.find((book: Book) => book.title === titleToSearch)?.isRead || false
}

console.log('OBJECT:', books);
console.log('Is "Devastación" book read?', isBookRead(books, "Devastación"));
console.log('Is "Canción de hielo y fuego" book read?', isBookRead(books, "Canción de hielo y fuego"));
console.log('Is "Los Pilares de la Tierra" book read?', isBookRead(books, "Los Pilares de la Tierra"));

interface Book {
    title: string;
    isRead: boolean;
}