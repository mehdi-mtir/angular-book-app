import { Component, OnDestroy, OnInit } from '@angular/core';
import { Book } from '../model/book';
import { BookService } from '../services/book.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.css'],
})
export class ListBooksComponent implements OnInit {
  filtredBooks : Book[] = [];
  bookToShow? : Book;
  subscription? : Subscription

  constructor(private bookService : BookService){}

  /*ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  ngOnInit(): void {
    this.subscription = this.bookService.booksUpdated.subscribe(books=>this.filtredBooks = books);
    this.bookService.getBooks();
  }*/

  getBooks(){
    this.bookService.getBooks2().subscribe(
      books => {
        console.log(books);
        this.filtredBooks = books;
      }
    )
  }

  ngOnInit(): void {
    this.getBooks()
  }

  showDetails(book? : Book){
    this.bookToShow = book;
  }

  filterListBook(keyword : string){
    this.filtredBooks = this.filtredBooks.filter(
      (book)=>book.title.toLowerCase().includes(keyword)
    );
  }

  deleteBook(id : string){
    if(confirm("Êtes-vous sûre de vouloir supprimer le livre?"))
      this.bookService.deleteBook(id).subscribe(
        ()=>this.getBooks()
    )
  }

}
