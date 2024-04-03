import { Component, OnInit } from '@angular/core';
import { Book } from '../model/book';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.css'],
})
export class ListBooksComponent implements OnInit {
  filtredBooks : Book[] = [];
  bookToShow? : Book;

  constructor(private bookService : BookService){}

  ngOnInit(): void {
    this.filtredBooks = this.bookService.getBooks()
  }
  

  showDetails(book? : Book){
    this.bookToShow = book;
  }

  filterListBook(keyword : string){
    this.filtredBooks = this.bookService.getBooks().filter(
      (book)=>book.title.toLowerCase().includes(keyword)
    );
  }

}
