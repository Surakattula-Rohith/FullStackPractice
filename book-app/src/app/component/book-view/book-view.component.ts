import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Book } from 'src/app/model/book';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-book-view',
  templateUrl: './book-view.component.html',
  styleUrls: ['./book-view.component.css']
})
export class BookViewComponent {
  book: Book; // Declare a variable of type Book to hold the form data

  bookList: Array<Book>;
  errorMsg = "Please enter valid input.";

  constructor(private formBuilder: FormBuilder, private bookService: BookService) {
    this.book = new Book(); // Initialize the Book object
    this.bookList = [];
  }

  ngOnInit(): void {
    this.getBooksFromServer();
  }

  getBooksFromServer() {
    this.bookService.getBooks().subscribe(response => {
      this.bookList = response;
    });
  }

  newBook() {
    this.bookService.addBook(this.book).subscribe(response => {
      this.getBooksFromServer();
      this.book = new Book(); // Reset the Book object after successful submission
    }, error => {
      console.log(this.errorMsg);
    });
  }

}
