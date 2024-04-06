import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TreeNode } from '../treenode.component';
@Component({
  selector: 'app-movenode',
  templateUrl: './movenode.component.html',
  styleUrl: './movenode.component.css'
})
export class MovenodeComponent {
  selectedNode: TreeNode;
  availableNodes: TreeNode[];

  constructor(
    public dialogRef: MatDialogRef<MovenodeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.selectedNode = data.selectedNode || { id: '', name: '', children: [] };
    this.availableNodes = data.availableNodes;
  }


  onSelectNode(selectedNode: TreeNode): void {
    this.selectedNode = selectedNode;
  }

  save(): void {
    console.log(this.selectedNode);
    this.dialogRef.close(this.selectedNode);
  }

  cancel(): void {
    this.dialogRef.close();
  }

}
