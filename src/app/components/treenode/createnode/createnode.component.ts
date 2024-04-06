import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TreeNode } from '../treenode.component';
@Component({
  selector: 'app-createnode',
  templateUrl: './createnode.component.html',
  styleUrl: './createnode.component.css'
})
export class CreatenodeComponent {
  newNode: TreeNode = { id:0, name: '', children: [] }; // Initialize with default values

  constructor(
    public dialogRef: MatDialogRef<CreatenodeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    const parentId = this.data.parentId;
    console.log('Parent ID:', parentId);
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  onSaveClick(): void {
    this.dialogRef.close({ ...this.newNode, parentId: this.data.parentId });
  }
}
