import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TreeNode } from '../../../tree.model';

@Component({
  selector: 'app-add-child-node',
  templateUrl: './add-child-node.component.html',
  styleUrl: './add-child-node.component.css'
})
export class AddChildNodeComponent {
  newNode: TreeNode = { id: 0, name: '', children: [] }; // Initialize with default values
  // isParentNode: boolean; // Flag to determine if it's a parent node

  constructor(
    public dialogRef: MatDialogRef<AddChildNodeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    // this.isParentNode = data.isParentNode;
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  onSaveClick(): void {
    // console.log(this.newNode);
    this.dialogRef.close(this.newNode);
  }
}
