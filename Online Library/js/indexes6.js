console.log('This is indexES6 file');

// Function to delete specific Book
function deleteBook(index) {
  let books = localStorage.getItem("books");
  let display = new Display();
  if (books == null) {
    booksObj = [];
  }
  else {
    booksObj = JSON.parse(books);
  }
  booksObj.splice(index, 1);
  localStorage.setItem("books", JSON.stringify(booksObj));
  display.showBooks();
}

class Book {
  constructor(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
  }
}

class Display {
  showBooks() {
    let books = localStorage.getItem("books");
    let booksObj;
    if (books == null) {
      booksObj = [];
    }
    else {
      booksObj = JSON.parse(books);
    }

    let html = '';
    booksObj.forEach(function (element, index) {
      html += `
                  <tr>
                    <td>${element.name}</td>
                     <td>${element.author}</td>
                     <td>${element.type}</td>
                     <td><button id="${index}" onclick="deleteBook(this.id)"></button></td>
                   </tr>`;
    });
    let bookElm = document.getElementById("tableBody");
    if (booksObj.length != 0) {
      bookElm.innerHTML = html;
    }
  }
  clear() {
    let libraryForm = document.getElementById('libraryForm');
    libraryForm.reset();
  }
  validate(book) {
    if (book.name.length < 2 || book.author.length < 2) {
      return false;
    }
    else {
      return true;
    }
  }
  show(type, displayMessage) {
    let message = document.getElementById('message');
    let boldText;
    if (type === 'success') {
      boldText = 'Success';
    }
    else {
      boldText = 'Error';
    }
    message.innerHTML += `
        <div class="alert alert-${type} alert-dismissible fade show" role = "alert">
          <strong>${boldText}:</strong>${displayMessage}
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div> ` ;
    setTimeout(function () {
      message.innerHTML = '';
    }, 5000);
  }
}
let display = new Display();
display.showBooks();
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
  if (display.validate(book)) {
    let Obj = {
      name: name,
      author: author,
      type: type
    }
    let books = localStorage.getItem("books");
    // alert(books);
    let notesObj;
    if (books == null) {
      notesObj = [];
    }
    else {
      notesObj = JSON.parse(books);
    }
    notesObj.push(Obj);
    localStorage.setItem("books", JSON.stringify(notesObj));
    // display.add(book);
    display.showBooks();
    display.clear();
    display.show('success', ' Your book has been successfully added!');
  }
  else {
    // Show errror to the user
    display.show('danger', ' Sorry you cannot add this book');
  }


  e.preventDefault();
}