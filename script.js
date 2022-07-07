let myLibrary = [];

const addBtn = document.getElementById("add_btn")
const formDiv = document.getElementById("form")

function Book(author, title, length, read) {   // constructor function
   this.author = author;
   this.title = title;
   this.length = length;
   this.read = read; 
}

const Book1 = new Book("Stephen King", "IT", 456, false) //rewrite

function addBookToLibrary() {

}

const displayForm = addBtn.addEventListener("click", (e) => {
   if (formDiv.style.display === "none") {
      formDiv.style.display = "block"
   } else {
      formDiv.style.display = "none"
   }
   

      
})

console.log(Book1)