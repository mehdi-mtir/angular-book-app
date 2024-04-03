import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { ListBooksComponent } from './list-books/list-books.component';
import { DetailBookComponent } from './detail-book/detail-book.component';
import { SearchBookComponent } from './search-book/search-book.component';
import { AddBookComponent } from './add-book/add-book.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListBooksComponent,
    DetailBookComponent,
    SearchBookComponent,
    AddBookComponent,
    EditBookComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    FormsModule //Template-driven Forms
  ]
})
export class BooksModule { }
