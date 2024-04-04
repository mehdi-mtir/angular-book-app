import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../services/book.service';
import { Book } from '../model/book';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
  book? : Book;
  id? : string;

  constructor (
    private activatedRoute : ActivatedRoute, 
    private bookService : BookService,
    private router : Router){}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params => {
        this.id = params['id'];
        this.bookService.getBookById(this.id || "").subscribe(
          book => this.book = book
        )
      }
    );
  }

  editBook(f : NgForm){
    this.bookService.editBook(this.id!, f.value.title, f.value.author, f.value.price, f.value.cover)
      .subscribe(
        book=>this.router.navigate(['/books'])
      );
    
  }

  



}
