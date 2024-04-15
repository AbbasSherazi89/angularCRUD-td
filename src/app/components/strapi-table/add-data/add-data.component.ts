import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrl: './add-data.component.css'
})
export class AddDataComponent {
  newItem: any = {fname: '', lname: '', email: '' }; // Initialize with default values

  constructor(public dialogRef: MatDialogRef<AddDataComponent>) { }

  closeDialog(): void {
    this.dialogRef.close();
  }

  // Function to create a new item
  createItem(): void {
    this.dialogRef.close(this.newItem);
  }

}
