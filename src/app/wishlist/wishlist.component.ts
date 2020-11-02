/*======================================
; Title: wishlist.component.ts
; Author: Professor Krasso
; Date: 10/19/20
; Modified By: Rochelle Markham
; Description: In-n-out-books app
======================================*/

import { Component, OnInit } from '@angular/core';
import { IWishlistItem } from '../wishlist-item.interface';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  items: Array<IWishlistItem> = [];

  constructor() { }

  ngOnInit(): void {
  }

  updateItemsHandler (item : IWishlistItem) {
    this.items.push(item);
  }
}
