import { Component, Input, OnInit, ChangeDetectorRef } from '@angular/core';
import { TreenodeService } from '../../services/treenode.service';
import { FlatTreeControl } from '@angular/cdk/tree';
import {
  MatTreeFlatDataSource,
  MatTreeFlattener,
} from '@angular/material/tree';
import { MatDialog } from '@angular/material/dialog';
import { CreatenodeComponent } from './createnode/createnode.component';
import { MovenodeComponent } from './movenode/movenode.component';

interface exampleFlateNode {
  expandable: boolean;
  id: number;
  name: string;
  level: number;
  children?: TreeNode[]; // Make children optional
}

// export interface TreeNode {
//   id: number;
//   name: string;
//   children?: TreeNode[]; // Make children optional
// }

export interface TreeNode {
  id: number;
  name: string;
  children?: TreeNode[];
  parent?: TreeNode;
}

@Component({
  selector: 'app-treenode',
  templateUrl: './treenode.component.html',
  styleUrl: './treenode.component.css',
})
export class TreenodeComponent {
  treeNodes: exampleFlateNode[] = [];
  @Input() clickedNode!: TreeNode;
  constructor(
    private dialog: MatDialog,
    private treeNodeService: TreenodeService,
    private cdr: ChangeDetectorRef
  ) {}

  private _transformer = (node: TreeNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      id: node.id,
      name: node.name || 'Unknown',
      level: level,
    };
  };

  treeControl = new FlatTreeControl<exampleFlateNode>(
    (node) => node.level,
    (node) => node.expandable
  );

  treeFlattener = new MatTreeFlattener<TreeNode, exampleFlateNode>(
    this._transformer,
    (node) => node.level,
    (node) => node.expandable,
    (node) => node.children
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  hasChild = (_: number, node: exampleFlateNode) => node.expandable;

  isLeafNode(node: TreeNode): boolean {
    return !node.children || node.children.length === 0;
  }

  ngOnInit(): void {
    this.fetchTreeNodes();
  }

  fetchTreeNodes(): void {
    this.treeNodeService.getTreeNodes().subscribe((response: any) => {
      if (response && response.length > 0) {
        console.log('Response from the backend in if statement: ', response);
        const transformedNodes = response.map((nodeData: any) => {
          return {
            expandable: !!nodeData.children && nodeData.children.length > 0,
            id: nodeData.id,
            name: nodeData.name,
            level: 0, // Assuming all nodes are at level 0 initially
            children: nodeData.children, // Preserve the children property
          };
        });

        this.dataSource.data = transformedNodes;
        console.log('data after being fetched:', transformedNodes);
        this.cdr.detectChanges();
      } else {
        console.error('Invalid response or data not found.');
      }
    });
  }

  //////////////////// ADD node

  addNodeDialog(parentNodeId: number): void {
    const dialogRef = this.dialog.open(CreatenodeComponent, {
      width: '300px',
      data: { parentId: parentNodeId },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.addNode(result);
      }
    });
  }

  addNode(nodeData: any): void {
    this.treeNodeService.createNode(nodeData).subscribe(
      (response) => {
        console.log('Node added successfully:', response);
        this.fetchTreeNodes();
      },
      (error) => {
        console.error('Error adding node:', error);
      }
    );
  }

  deleteNode(nodeId: number): void {
    this.treeNodeService.deleteNode(nodeId).subscribe(
      (response) => {
        console.log('Node deleted successfully:', response);
        // Optionally, you can handle success response here
        this.fetchTreeNodes();
      },
      (error) => {
        console.error('Error deleting node:', error);
        // Optionally, you can handle error response here
      }
    );
  }

  openMoveNodeDialog(node: any): void {
    this.clickedNode = node;
    this.treeNodeService.getAvailableNodes(node).subscribe((availableNodes) => {
      const dialogRef = this.dialog.open(MovenodeComponent, {
        width: '300px',
        data: { availableNodes },
      });

      dialogRef.afterClosed().subscribe((selectedNode: TreeNode) => {
        if (selectedNode) {
          this.moveNode(selectedNode);
        }
      });
    });
  }

  moveNode(selectedNode: TreeNode | null): void {
    let newParentNodeId: number | null;
    if (selectedNode && selectedNode.id !== -1) {
        newParentNodeId = selectedNode.id;
    } else {
        if (selectedNode && selectedNode.id === -1) {
            newParentNodeId = null; 
        } else {
            newParentNodeId = -1; 
        }
    }
    this.treeNodeService
      .updateNode(this.clickedNode.id, newParentNodeId)
      .subscribe(
        (result) => {
          this.fetchTreeNodes();
          console.log(result, 'Node moved successfully');
        },
        (error) => {
          console.log(error, 'node not moved');
        }
      );
  }
}
