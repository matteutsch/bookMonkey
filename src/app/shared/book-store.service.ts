import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { Book } from './book';

@Injectable({
  providedIn: 'root',
})
export class BookStoreService {
  private apiUrl = 'https://api5.angular-buch.com';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.apiUrl}/books`).pipe(
      catchError((err) => {
        console.log(err);
        return of([]);
      }),
    );
  }

  getAllSearch(term: string): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.apiUrl}/books/search/${term}`).pipe(
      catchError((err) => {
        console.log(err);
        return of([]);
      }),
    );
  }

  getSingle(isbn: string): Observable<Book> {
    return this.http.get<Book>(`${this.apiUrl}/books/${isbn}`);
  }

  remove(isbn: string): Observable<unknown> {
    return this.http.delete(`${this.apiUrl}/books/${isbn}`);
  }
}
