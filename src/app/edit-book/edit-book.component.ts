import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../services/book.service';
import { Book } from '../model/book';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
  book? : Book;

  constructor (private activatedRoute : ActivatedRoute, private bookService : BookService){}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params => this.book = this.bookService.getBookById(+params['id'])
    );
  }



}
