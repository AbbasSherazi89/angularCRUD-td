import { Component, OnInit } from '@angular/core';
import { Item, ITEM } from '../../table.model';
import { TableService } from '../../services/table.service'; 
import { MatDialog } from '@angular/material/dialog';
import { UpdateComponent } from './update/update.component';
import { AddComponent } from './add/add.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent {
  // private items: Item[] = [];
  displayedColumns: string[] = ['id', 'fname', 'lname', 'email', 'actions'];
  dataSource = [...ITEM];
  items = ITEM;
  // newItem: any = ITEM;

  constructor(
    private itemlistService: TableService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    // Initialize dataSource with initial data from the service
    this.dataSource = this.itemlistService.getItems();
  }

  deleteItem(itemId: number): void {
    // console.log(itemId);
    this.itemlistService.deleteItem(itemId);
    this.items = this.items.filter((item) => item.id !== itemId); // Remove deleted item from dataSource
  }

  openUpdateDialog(item: Item): void {
    // console.log('Update item id:', item);
    const dialogRef = this.dialog.open(UpdateComponent, {
      width: '450px',
      data: { item },
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
      if (result && result.item) {
        const updatedItem = result.item;

        // Update the data source with the updated item
        const index = this.items.findIndex((i) => i.id === updatedItem.id);

        console.log("updated item id's index:", index);
        if (index !== -1) {
          this.items[index].fname = updatedItem.fname;
          this.items[index].lname = updatedItem.lname;
          this.items[index].email = updatedItem.email;
        }
      }
    });
  }

  openCreateDialog(): void {
    const dialogRef = this.dialog.open(AddComponent, {
      width: '450px',
    });

    dialogRef.afterClosed().subscribe((newItem) => {
      if (newItem) {
        const isDuplicateId = this.items.some(item => item.fname === newItem.fname);
        if (isDuplicateId) {
          // Inform the user about the duplicate ID (you can use a toast or display a message)
          alert('Duplicate Name. Please enter a unique Name.');
        } else {
          
          this.items.push(newItem);
          this.items = [...this.items];
        
        }
      }
    });
  }
}
