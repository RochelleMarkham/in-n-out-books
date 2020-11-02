/*======================================
; Title: book.interface.ts
; Author: Professor Krasso
; Date: 10/10/20
; Modified By: Rochelle Markham
; Description: In-n-out-books app
======================================*/

export interface IBook {
  isbn: string;
  title: string;
  authors: Array<string>;
  description: string;
  numOfPages: number;
}











