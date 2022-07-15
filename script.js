let myLibrary = [];

const addBtn = document.getElementById("add_btn")
const submitBtn = document.getElementById("sbt_btn")
const formDiv = document.getElementById("form")
const mainContainer = document.getElementById("main")


   // constructor function
function Book(author, title, pages, read) {   
   this.author = author;
   this.title = title;
   this.pages = pages;
   this.read = read; 

   
}

   // calls up a form to add new objects
const displayForm = addBtn.addEventListener("click", (e) => {
   if (formDiv.style.display === "none") {
      formDiv.style.display = "block"
   } else {
      formDiv.style.display = "none"
   }
})

   // on Submit button click takes input and sends it to the constructor
const addCard = submitBtn.addEventListener("click", (e) => {
   // prevents page from refreshing on btn click
   e.preventDefault();
      // input variables
      let inputAuthor = document.getElementById('author').value
      let inputTitle = document.getElementById('title').value
      let inputPages = parseInt(document.getElementById('pages').value)
      let inputStatus = radioValue();
      // creates new objects using the contstructor
      let newBook = new Book(inputAuthor,inputTitle,inputPages,inputStatus)
      // adds the new object to array
      myLibrary.push(newBook)
      console.log(myLibrary)

      addBookToLibrary()
      
      document.getElementById("myForm").reset();
   })


   // populates the grid with objects from the array
function addBookToLibrary() {
   mainContainer.innerHTML = " ";

   for (let i=0;i<myLibrary.length; i++) {
      mainContainer.innerHTML += 
         `<div class="card" id="card${i}">
            <p>Author: ${myLibrary[i].author}</p>
            <p>Title: ${myLibrary[i].title}</p>
            <p>Pages: ${myLibrary[i].pages}</p>
            <p>Read: ${myLibrary[i].read}</p>
            <button type="button" class="dlt_btn" id="del${i}" onclick="deleteCard(${i})"">Delete</button>
         </div>`;     
      }
}


   // accepts the card number from the respective delete button and deletes the object from the array
function deleteCard(i) {
   console.log('click');
   myLibrary.splice(i, 1);
   addBookToLibrary();
} 

function radioValue () {
   let readStatus = document.getElementsByName('status')
   for (i=0;i<readStatus.length;i++) {
      if(readStatus[i].checked) {
         return readStatus[i].value;
      }
   }
}


      