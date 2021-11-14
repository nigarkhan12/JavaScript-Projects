console.log('This is indexES6 file');
 class Book{
   constructor(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
  }
 }

 class Display{
  add(book){
    let tableBody = document.getElementById('tableBody');
    let uiString = `
                  <tr>
                    <td>${book.name}</td>
                    <td>${book.author}</td>
                    <td>${book.type}</td>
                  </tr>`;
    tableBody.innerHTML += uiString;
  }
  clear(){
    let libraryForm = document.getElementById('libraryForm');
    libraryForm.reset();
    }
    validate(book){
    if(book.name.length <2 || book.author.length <2){
      return false; 
    }
    else{
      return true; 
    }
  }
  show(type, displayMessage){
    let message = document.getElementById('message');
    message.innerHTML += `
        <div class="alert alert-${type} alert-dismissible fade show" role="alert">
          <strong>Message:</strong>${displayMessage}
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>` ;
    setTimeout(function(){
      message.innerHTML = '';
    }, 2000); 
  }
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