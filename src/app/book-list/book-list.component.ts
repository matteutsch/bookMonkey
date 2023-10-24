import { Component } from '@angular/core';
import { Book } from '../shared/book';

@Component({
  selector: 'bm-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent {
  books: Book[] = [];

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
        subtitle: 'Bananenbrot und mehr',
        thumbnailUrl: 'https://cdn.ng-buch.de/kochen.png',
        description: 'Tolle Backtipps für Mensch und Tier',
      },
    ];
  }
}
