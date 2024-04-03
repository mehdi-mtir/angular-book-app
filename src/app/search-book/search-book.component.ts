import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-book',
  templateUrl: './search-book.component.html',
  styleUrls: ['./search-book.component.css']
})
export class SearchBookComponent {
  @Output() serachBook = new EventEmitter<string>()

  sendSearchBookEvent(keyword : string){
    this.serachBook.emit(keyword.toLowerCase());
  }

}
