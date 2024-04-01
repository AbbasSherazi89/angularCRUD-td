import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TreeNode } from '../../../tree.model';
@Component({
  selector: 'app-move-node',
  templateUrl: './move-node.component.html',
  styleUrl: './move-node.component.css'
})
export class MoveNodeComponent {
  selectedNode: TreeNode;
  availableNodes: TreeNode[];

  constructor(
    public dialogRef: MatDialogRef<MoveNodeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.selectedNode = data.selectedNode;
    this.availableNodes = data.availableNodes;
  }

  onCancelClick(): void {
    this.dialogRef.close();
    // console.log(this.availableNodes);
  }

  onSaveClick(): void {
    // Return the selected replacement node
    this.dialogRef.close(this.selectedNode);
    console.log(this.selectedNode);
  }
}
