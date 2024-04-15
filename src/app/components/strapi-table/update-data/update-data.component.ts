import { Component,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-update-data',
  templateUrl: './update-data.component.html',
  styleUrl: './update-data.component.css'
})
export class UpdateDataComponent {
  updatedItem: any;
  
  constructor(
    public dialogRef: MatDialogRef<UpdateDataComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { item: any }
  ) {
    this.updatedItem = { ...data.item };
  }
  
  updateItemAndClose(): void {
    this.dialogRef.close({ item: this.updatedItem });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
