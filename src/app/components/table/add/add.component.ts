import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Item } from '../../../table.model';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {
  newItem: Item = {fname: '', lname: '', email: '' }; // Initialize with default values

  constructor(public dialogRef: MatDialogRef<AddComponent>) { }

  closeDialog(): void {
    this.dialogRef.close();
  }

  // Function to create a new item
  createItem(): void {
    this.dialogRef.close(this.newItem);
  }
}
