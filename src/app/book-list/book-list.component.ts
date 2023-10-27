import { Component, EventEmitter, Output } from '@angular/core';
import { Book } from '../shared/book';

@Component({
  selector: 'bm-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent {
  books: Book[] = [];
  @Output() selectBook = new EventEmitter<Book>();

  constructor() {
    this.books = [
      {
        isbn: '123123',
        title: 'Tierisch gut kochen',
        authors: ['Mrs Chimp', 'Mr Gorilla'],
        subtitle: 'Rezepte von Affe bis Zebra',
        thumbnailUrl: 'https://cdn.ng-buch.de/kochen.png',
        description: 'Immer lecker und gut',
      },
      {
        isbn: '039384',
        title: 'Backen mit Affen',
        authors: ['Orang Utan'],
        published: '20.02.2020',
        subtitle: 'Bananenbrot und mehr',
        thumbnailUrl: 'https://cdn.ng-buch.de/backen.png',
        description: 'Tolle Backtipps für Mensch und Tier',
      },
    ];
  }

  doSelect(book: Book) {
    this.selectBook.emit(book);
  }
}
