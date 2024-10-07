
let books = [
    { title: "1984", author: "George Orwell", year: 1949, pages: 328 },
    { title: "Brave New World", author: "Aldous Huxley", year: 1932, pages: 268 },
    { title: "Fahrenheit 451", author: "Ray Bradbury", year: 1953, pages: 256 }
];


let newBookTitle = prompt("what book do you want to add?");


if (newBookTitle) {
    let newBook = {
        title: newBookTitle,
        author: null, 
        year: null,   
        pages: null   
    };

    books.push(newBook);

    console.log(books);
}
