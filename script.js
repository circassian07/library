let myLibrary = [];

const addBtn = document.getElementById("add_btn")
const submitBtn = document.getElementById("sbt_btn")
const formDiv = document.getElementById("form")
const mainContainer = document.getElementById("main")



function Book(author, title, pages, read) {   // constructor function
   this.author = author;
   this.title = title;
   this.pages = pages;
   this.read = read; 
}

const displayForm = addBtn.addEventListener("click", (e) => {
   if (formDiv.style.display === "none") {
      formDiv.style.display = "block"
   } else{
      formDiv.style.display = "none"
   }
})

const addCard = submitBtn.addEventListener("click", (e) => {
   mainContainer.innerHTML += `<div class="card"></div>`;

      // input variables
      let inputAuthor = document.getElementById('author').value
      let inputTitle = document.getElementById('title').value
      let inputPages = parseInt(document.getElementById('pages').value)
      let inputStatus = document.getElementsByName('status').value

      let newBook = new Book(inputAuthor,inputTitle,inputPages,inputStatus)
      
      myLibrary.push(newBook)

      console.log(myLibrary)
   })

function addBookToLibrary() {

}

