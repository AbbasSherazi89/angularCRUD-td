import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-node',
  templateUrl: './edit-node.component.html',
  styleUrl: './edit-node.component.css'
})
export class EditNodeComponent {
  nodeName: string;

  constructor(
    public dialogRef: MatDialogRef<EditNodeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.nodeName = data.nodeName;
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }
}
