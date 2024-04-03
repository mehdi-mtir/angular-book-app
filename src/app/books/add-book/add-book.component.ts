import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BookService } from '../services/book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {

  constructor(private bookService : BookService, private router : Router){}

  addBook(f : NgForm){
    this.bookService.addBook(
      f.value.title,
      f.value.author,
      f.value.price,
      f.value.cover
    );
    this.router.navigate(['/books']);
  }

}
