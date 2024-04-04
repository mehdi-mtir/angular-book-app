import { Injectable } from '@angular/core';
import { Book } from '../model/book';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  /*private books = [
    new Book(1, "The slight edge", "Jeff Olsen", 20, "https://prodimage.images-bn.com/pimages/9781626340466_p0_v1_s1200x630.jpg"),
    new Book(2, "The power of habits", "Charles Duhigg", 25, "https://images.epagine.fr/249/9781847946249_1_75.jpg"),
    new Book(3, "Atomic habits", "James clear", 30, "https://images.epagine.fr/831/9781847941831_1_75.jpg")
  ];*/
  private books : Book[] = [];
  private baseUrl = "http://localhost:3000/books";


  booksUpdated = new Subject<Book[]>();

  constructor(private http : HttpClient) { }

  //*************** Lecture des données ***********/
  //Version avec données stockées en local
  /*getBooks(){
    return [...this.books];
  }*/

  //Version 1 avec accès à une API distante
  getBooks(){
    this.http.get<Book[]>(this.baseUrl).subscribe(
      {
        next : books => {
          this.books = books;
          this.booksUpdated.next(this.books);
        }
      }
    )
  }

  //version2 avec accès à une API distante
  getBooks2() : Observable<Book[]>{
    return this.http.get<Book[]>(this.baseUrl);
  }

  getBookById(id : number){
    return this.books.find(book => book.id === id);
  }

  addBook(title : string, author : string, price : number, cover : string){
    const book = new Book(
      this.books[this.books.length - 1].id + 1,
      title,
      author,
      price,
      cover
    )
    this.books = [book, ...this.books ]
  }

  editBook(id : number, title : string, author : string, price : number, cover : string){
    const book = new Book(id, title, author, price, cover);
    this.books = this.books.map(
      b => (b.id === id)?book:b
    )
  }

  deleteBook(id : number){
    this.books = this.books.filter(b=>b.id !== id);
    this.booksUpdated.next(this.books);
    console.log(this.books);
  }

  

  
}
