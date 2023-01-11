import { Component } from '@angular/core';
import { Book } from '../types/Book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent {
  books: Book[] = [
    {
      name: 'clean code',
      author: 'Robert C Martin',
      imagePath:
        'https://m.media-amazon.com/images/I/41xShlnTZTL._AC_UY218_.jpg',
      amount: 700,
    },
    {
      name: 'the pragmatic programmer',
      author: 'David Thomas',
      imagePath:
        'https://m.media-amazon.com/images/I/71f743sOPoL._AC_UY218_.jpg',
      amount: 500,
    },
  ];

  cart: Book[] = [];

  isShowing: boolean = true;

  toggleBooks() {
    this.isShowing = !this.isShowing;
  }

  addItem(newItem: Book) {
    this.cart.push(newItem);
    console.log(this.cart);
  }
}
