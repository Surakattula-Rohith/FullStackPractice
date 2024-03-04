import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../model/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  constructor(private http : HttpClient) { }

  // Service to get the books in the table
  getBooks():Observable<any> {
    return this.http.get('http://localhost:3000/books');
  }

  // Adding the book to the Server
  addBook(book : Book){
    return this.http.post('http://localhost:3000/books', book);
  }
}

