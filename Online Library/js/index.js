console.log("This is Index.js");

/*
 *Todos 
 * 1. Store all the data to the localStorage
 * 2. Give another column as an option to delete the book
 * 3. Add a scroll bar to the view
 */

// Constructor
function Book(name, author, type) {
  this.name = name;
  this.author = author;
  this.type = type;
}

// Display Constructor
function Display() {

}
// Add methods to display prototype
Display.prototype.add = function(book){
  let tableBody = document.getElementById('tableBody');
  let uiString = `
                <tr>
                  <td>${book.name}</td>
                  <td>${book.author}</td>
                  <td>${book.type}</td>
                </tr>`;
  tableBody.innerHTML += uiString;
}
Display.prototype.clear = function(){
let libraryForm = document.getElementById('libraryForm');
libraryForm.reset();
}

// Implement the validate function
Display.prototype.validate = function(book){
  if(book.name.length <2 || book.author.length <2){
    return false; 
  }
  else{
    return true; 
  }
}

// Implement the show function
Display.prototype.show = function(type, displayMessage){
  let message = document.getElementById('message');
  let boldText;
    if (type==='success') {
      boldText = 'Success';
    }
    else{
      boldText = 'Error';
    }
  message.innerHTML += `
      <div class="alert alert-${type} alert-dismissible fade show" role="alert">
        <strong>${boldText}:</strong>${displayMessage}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>` ;
  setTimeout(function(){
    message.innerHTML = '';
  }, 5000); 
}



// Add submit event listener to form libraryForm
let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e) {
  console.log(`You've submitted Library Form`);
  let name = document.getElementById('bookName').value;
  let author = document.getElementById('author').value;
  let type;
  let fiction = document.getElementById('fiction');
  let programming = document.getElementById('programming');
  let networking = document.getElementById('networking');
  if (fiction.checked) {
    type = fiction.value;
  }
  else if (programming.checked) {
    type = programming.value;
  }
  else if (networking.checked) {
    type = networking.value;
  }
  let book = new Book(name, author, type);

  let display = new Display();
  if(display.validate(book)){
    display.add(book);
    display.clear();
    display.show('success', ' Your book has been successfully added!');
  }
  else{
    // Show errror to the user
    display.show('danger', ' Sorry you cannot add this book');
  }
  
  
  e.preventDefault();
}