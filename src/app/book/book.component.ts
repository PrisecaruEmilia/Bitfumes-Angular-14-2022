import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../types/Book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent {
  @Input() book: Book = {} as Book;
  @Output() emitBookEvent = new EventEmitter<Book>();

  // addNewItem(value: Book) {
  //   this.emitBookEvent.emit(value);
  // }

  addToCart() {
    this.emitBookEvent.emit(this.book);
  }
}
