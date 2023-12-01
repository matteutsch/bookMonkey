import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailsComponent } from './book-details/book-details.component';

export const BOOKS_ROUTES: Routes = [
  { path: '', component: BookListComponent },
  { path: ':isbn', component: BookDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(BOOKS_ROUTES)],
  exports: [RouterModule],
})
export class BooksRoutingModule {}
