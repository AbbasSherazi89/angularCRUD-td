import { Component, Inject } from '@angular/core';
import { Item} from '../../../table.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent {
  updatedItem: Item;
  
  constructor(
    public dialogRef: MatDialogRef<UpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { item: Item }
  ) {
    // Initialize the updatedItem with a copy of the original item
    this.updatedItem = { ...data.item };
  }

  updateItemAndClose(): void {
    // Send the updated item back to the parent component when the dialog is closed
    this.dialogRef.close({ item: this.updatedItem });
  }

  onNoClick(): void {
    // console.log('Updated Item:', this.updatedItem);
    this.dialogRef.close();
  }
}
