import { Injectable } from '@angular/core';
import { Book } from '../model/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private books = [
    new Book(1, "The slight edge", "Jeff Olsen", 20, "https://prodimage.images-bn.com/pimages/9781626340466_p0_v1_s1200x630.jpg"),
    new Book(2, "The power of habits", "Charles Duhigg", 25, "https://images.epagine.fr/249/9781847946249_1_75.jpg"),
    new Book(3, "Atomic habits", "James clear", 30, "https://images.epagine.fr/831/9781847941831_1_75.jpg")
  ];

  constructor() { }

  getBooks(){
    return [...this.books];
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

  getBookById(id : number){
    return this.books.find(book => book.id === id);
  }

  
}
