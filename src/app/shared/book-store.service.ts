import { Injectable } from '@angular/core';
import { Book } from './book';

@Injectable({
  providedIn: 'root',
})
export class BookStoreService {
  private books: Book[] = [];
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

  getAll(): Book[] {
    return this.books;
  }
  getSingle(isbn:string): Book | undefined {
    return this.books.find(book=> book.isbn === isbn)
  }
}
