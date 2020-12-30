let myLibrary=[]

function Book(title,author,pages,read){
    this.title="Title: "+title;
    this.author="Author: "+author;
    this.pages="Pages: "+pages;
    this.read="Status: "+read;
}

function addBookToLibrary(){
    inputTitle=prompt("Enter the title of the book");
    inputAuthor=prompt("Enter the author of the book");
    inputPages=prompt("Enter the pages of the book");
    inputRead=prompt("Enter the read status of the book","Read/Not read yet");
    let myBook = new Book(inputTitle,inputAuthor,inputPages,inputRead);
    myLibrary.push(myBook);
    createBook();
    console.log(myLibrary);
}

function createBook(){
    clearScreen();
    for(let i=0;i<myLibrary.length;i++){
        let bookTable = document.createElement('table');
        bookTable.setAttribute('class','bookTable')

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
            rowData.setAttribute('data-index', i);
            if(j==0){
                rowData.innerHTML="<button onclick = 'toggleStatus(this.parentNode.dataset.index)' class='changeStatus'>Change Status</button";
            }
            else{
                rowData.innerHTML="<button class='deleteBook' onclick = 'delBook(this.parentNode.dataset.index)'>Delete Book</button>";
            }
            tableRow.appendChild(rowData);
            bookTable.appendChild(tableRow);
        };

        bookContainer.appendChild(bookTable);
        console.log(rowData);
        console.log(bookContainer.childElementCount );
    }
}

function clearScreen(){
    while(document.querySelector('.bookTable')){
        bookContainer.removeChild(document.querySelector('.bookTable'));
    }
}

function toggleStatus(indexNum){
    clearScreen();
    console.log(myLibrary[indexNum]);
    let readData = myLibrary[indexNum].read.toLowerCase();
    if(readData.indexOf("no")==-1){
        myLibrary[indexNum].read="Status: Not Read Yet";
    }
    else{
        myLibrary[indexNum].read="Status: Read";
    }
    createBook();
}

function delBook(indexNum) {
    myLibrary.splice(indexNum,1);
    console.log(myLibrary);
    createBook();
}


const bookContainer = document.querySelector(".displayBooks");
const addBtn = document.querySelector('#newBook');
let inputTitle;
let inputAuthor;
let inputPages;
let inputRead;

addBtn.onclick= () => addBookToLibrary();


