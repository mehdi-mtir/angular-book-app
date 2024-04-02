import { Component } from '@angular/core';

@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.css']
})
export class ListBooksComponent {
  books = [
    {id : 1, title : "The slight edge", author : "Jeff Olsen", price : 20},
    {id : 2, title : "The power of habits", author : "Charles Duhigg", price : 25},
    {id : 3, title : "Atomic habits", author : "James clear", price : 30}
  ];

}
