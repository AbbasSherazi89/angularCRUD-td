import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TreeNode } from '../../../tree.model';

@Component({
  selector: 'app-add-node',
  templateUrl: './add-node.component.html',
  styleUrl: './add-node.component.css',
})
export class AddNodeComponent {
  newNode: TreeNode = { id: 0, name: '', children: [] }; // Initialize with default values
  isParentNode: boolean; // Flag to determine if it's a parent node

  constructor(
    public dialogRef: MatDialogRef<AddNodeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.isParentNode = data.isParentNode;
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  onSaveClick(): void {
    this.dialogRef.close(this.newNode);
  }
}
