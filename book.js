let myLibrary=[]

function Book(title,author,pages,read){
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.read=read;
}

function addBookToLibrary(){
    inputTitle=prompt("Enter the title of the book");
    inputAuthor=prompt("Enter the author of the book");
    inputPages=prompt("Enter the pages of the book");
    inputRead=prompt("Enter the read status of the book","Read/Not read yet");
    let myBook = new Book(inputTitle,inputAuthor,inputPages,inputRead);
    myLibrary.push(myBook);
    displayBook();
    console.log(myLibrary);
}

function displayBook(){

    for(let i=myLibrary.length-1;i<myLibrary.length;i++){
        let bookTable = document.createElement('table');
        for (const key in myLibrary[i]) {
            console.log(key);
            let tableRow = document.createElement('tr');
            let rowData = document.createElement('td');
            rowData.textContent=myLibrary[i][key];
            tableRow.appendChild(rowData);
            bookTable.appendChild(tableRow);
        }
        for(let j=0;j<2;j++){
            tableRow = document.createElement('tr');
            rowData = document.createElement('td');
            if(j==0){
                rowData.innerHTML="<button class='changeStatus'>Change Status</button";
            }
            else{
                rowData.innerHTML="<button class='deleteBook'>Delete Book</button>"
            }
            tableRow.appendChild(rowData);
            bookTable.appendChild(tableRow);
        };
        bookContainer.appendChild(bookTable);
    }
}

const bookContainer = document.querySelector(".displayBooks");

let inputTitle;
let inputAuthor;
let inputPages;
let inputRead;


const addBtn = document.querySelector('#newBook');
addBtn.onclick= () => addBookToLibrary();
