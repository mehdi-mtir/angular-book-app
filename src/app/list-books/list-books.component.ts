import { Component } from '@angular/core';
import { Book } from '../model/book';

@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.css']
})
export class ListBooksComponent {
  books = [
    new Book(1, "The slight edge", "Jeff Olsen", 20, "https://prodimage.images-bn.com/pimages/9781626340466_p0_v1_s1200x630.jpg"),
    new Book(2, "The power of habits", "Charles Duhigg", 25, "https://images.epagine.fr/249/9781847946249_1_75.jpg"),
    new Book(3, "Atomic habits", "James clear", 30, "https://images.epagine.fr/831/9781847941831_1_75.jpg")
  ];
  bookToShow? : Book;

  showDetails(book? : Book){
    this.bookToShow = book;
  }

}
