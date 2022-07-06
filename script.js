let myLibrary = [];

function Book(author, title, length, read) {   // constructor function
   this.author = author;
   this.title = title;
   this.length = length;
   this.read = read; 
}

const Book1 = new Book("Stephen King", "IT", 456, false) //rewrite

function addBookToLibrary() {

}

console.log(Book1)