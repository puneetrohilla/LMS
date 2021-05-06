// .................. Book Constructor .....................////////////

function Book(name, author, type) {
  this.name = name;
  this.author = author;
  this.type = type;
}

// ............................ Display Constructor ............................

function Display() {}

libraryForm = document.querySelector("#libraryForm");
libraryForm = document.addEventListener("submit", (e) => {
  // console.log("library Form submitted");
  name = document.getElementById("name").value;
  author = document.getElementById("author").value;
  let fiction = document.getElementById("fiction");
  let computerprogramming = document.getElementById("computerprogramming");
  let cooking = document.getElementById("cooking");
  let type;
  if (fiction.checked) {
    type = fiction.value;
  } else if (computerprogramming.checked) {
    type = computerprogramming.value;
  } else if (cooking.checked) {
    type = cooking.value;
  }
  e.preventDefault();
  let book = new Book(name, author, type);
  // console.log(book);

//   ................................. Validate ...................................... 

  let display = new Display();
  if (display.validate(book)) {
    display.add(book);
    display.clear();
    display.show("success", "Your Book has been recorded");
  } 
  else
   {
    display.show("danger", "You can't Add this Book ..");
  }
});

// .................. Prototype.ADD ................................ .......................................

Display.prototype.add = function (book) {
  tbody = document.getElementById("tbody");
  let uiString = `
    <tbody>
    <tr>
      <td>${book.name}</td>
      <td>${book.author}</td>
      <td>${book.type}</td>
    </tr>
  
  </tbody> `;
  tbody.innerHTML += uiString;
};

// .............................. Prototype clear .................................... ....................

Display.prototype.clear = function () {
  let libraryForm = document.getElementById("libraryForm");
  libraryForm.reset();
};

// ........................ Prototype Show ....................... ................................

Display.prototype.show = function (type, displayMessage) {
  let message = document.querySelector("#message");
  let boldText;

  if (type === "success") {
    boldText = "Success !!";
  } 
  else {
    boldText = "Sorry !!";
  }
  message.innerHTML = ` <div class="alert alert-${type} alert-dismissible fade show" role="alert">
  <strong>${boldText}</strong> ${displayMessage}
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`;
  setTimeout(() => {
    message.innerHTML = "";
  }, 3000);
};

// ..................... Prototype Validate .................. ................................

Display.prototype.validate = function (book) {
  if ((book.name.length < 2) && (book.author.length < 2)) {
    return false;
  } else {
    return true;
  }
};
