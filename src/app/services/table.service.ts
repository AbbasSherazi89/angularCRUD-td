import { Injectable } from '@angular/core';
import { Item, ITEM } from '../table.model';
@Injectable({
  providedIn: 'root'
})
export class TableService {
  private items: Item[] = [...ITEM];
  constructor() { }

  getItems(): Item[] {
    // console.log(this.items);
    return this.items;
  }

  deleteItem(itemId: number): Item[] {
    // console.log('Service', itemId);
    const index = this.items.findIndex((item) => item.id === itemId);
    console.log('Show', this.items);

    if (index !== -1) {
      this.items.splice(index, 1);
    }
    return this.items; // Return updated array after deletion
  }
  
}
