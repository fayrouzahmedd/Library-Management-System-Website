const bookList = [];

function addBook() {
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const year = document.getElementById("year").value;

    bookList.push({ title, author, year });
    displayBooks();
}

function displayBooks() {
    const bookTable = document.getElementById("book-list");
    bookTable.innerHTML = "";

    for (const book of bookList) {
        bookTable.innerHTML += `
      <tr>
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.year}</td>
      </tr>
    `;
    }
}
