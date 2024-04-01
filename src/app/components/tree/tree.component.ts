import { Component } from '@angular/core';
import { FlatTreeControl } from '@angular/cdk/tree';
import {
  MatTreeFlatDataSource,
  MatTreeFlattener,
} from '@angular/material/tree';
import { TreeNode, tree } from '../../tree.model';
import { AddNodeComponent } from './add-node/add-node.component';
import { MatDialog } from '@angular/material/dialog';
import { EditNodeComponent } from './edit-node/edit-node.component';
import { AddChildNodeComponent } from './add-child-node/add-child-node.component';
import { MoveNodeComponent } from './move-node/move-node.component';
interface exampleFlateNode {
  expandable: boolean;
  id: number;
  name: string;
  level: number;
}

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrl: './tree.component.css',
})
export class TreeComponent {
  treeNodes: TreeNode[] = [];
  constructor(public dialog: MatDialog) {
    this.treeNodes = JSON.parse(JSON.stringify(tree));
    this.dataSource.data = tree;
  }

  private _transformer = (node: TreeNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      id: node.id,
      name: node.name,
      level: level,
    };
  };
  treeControl = new FlatTreeControl<exampleFlateNode>(
    (node) => node.level,
    (node) => node.expandable
  );

  treeFlattener = new MatTreeFlattener(
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

  //Adding a parent node

  addParentNode(): void {
    const dialogRef = this.dialog.open(AddNodeComponent, {
      width: '300px',
      data: { isParentNode: true },
    });

    dialogRef.afterClosed().subscribe((newNode: TreeNode) => {
      if (newNode) {
        // Add the new parent node to the tree
        newNode.id = this.generateRandomId();
        this.treeNodes.push(JSON.parse(JSON.stringify(newNode))); // Deep copy of the new node
        // this.treeNodes.push(newNode);
        console.log(newNode.id);
        this.dataSource.data = this.treeNodes;
      }
    });
  }

  //Adding a child node
  addChildNode(parentNodeId: number): void {
    const dialogRef = this.dialog.open(AddChildNodeComponent, {
      width: '300px',
      data: {},
    });

    dialogRef.afterClosed().subscribe((newNode: TreeNode) => {
      if (newNode) {
        const parentNode = this.findParentNode(parentNodeId, this.treeNodes);
        if (parentNode) {
          if (!parentNode.children) {
            parentNode.children = []; // Initialize children array if not exists
          }
          newNode.id = this.generateRandomId();
          parentNode.children.push(newNode);
          this.dataSource.data = this.treeNodes;
        } else {
          console.error(`Parent node with ID ${parentNodeId} not found.`);
        }
      }
    });
  }

  findParentNode(parentNodeId: number, nodes: TreeNode[]): TreeNode | null {
    for (const node of nodes) {
      if (node.id === parentNodeId) {
        return node; // Parent node found
      }
      if (node.children) {
        const parent = this.findParentNode(parentNodeId, node.children);
        if (parent) {
          return parent; // Parent node found in child nodes
        }
      }
    }
    return null; // Parent node not found
  }

  generateRandomId(): number {
    return Math.floor(Math.random() * 1000);
  }
  //Deleting a node
  deleteNode(nodeId: number): void {
    this.treeNodes = this.removeNode(this.treeNodes, nodeId);
    this.dataSource.data = this.treeNodes;
    console.log('Deleted node:', nodeId);
    // console.log(nodeId);
  }

  removeNode(nodes: TreeNode[], targetId: number): TreeNode[] {
    return nodes
      .map((node) => {
        // If the current node's ID matches the target ID, return null to filter it out
        if (node.id === targetId) {
          return null;
        }

        // If the current node has children, recursively remove the target node from children
        if (node.children && node.children.length > 0) {
          node.children = this.removeNode(node.children, targetId);

          // After removing the target node from children, check if the node has any children left
          // If not, set children to null to remove the empty children array
          if (node.children.length === 0) {
            node.children = node.children ?? undefined;
          }
        }

        return node;
      })
      .filter((node): node is TreeNode => node !== null); // Filter out null nodes
  }

  //Editing a node
  editNode(node: any) {
    const dialogRef = this.dialog.open(EditNodeComponent, {
      width: '300px',
      data: { nodeName: node.name },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.editNodeRecursively(node, result);
      }
    });
  }

  editNodeRecursively(node: any, newName: string) {
    node.name = newName;

    if (node.children && node.children.length > 0) {
      node.children.forEach((child: any) => {
        this.editNodeRecursively(child, newName);
      });
    }
  }

  //Moving a node
  onNodeClick(node: TreeNode): void {
    const dialogRef = this.dialog.open(MoveNodeComponent, {
      width: '300px',
      data: {
        selectedNode: node,
        availableNodes: this.getAvailableNodes(node),
      },
    });

    dialogRef.afterClosed().subscribe((selectedReplacementNode: TreeNode) => {
      if (selectedReplacementNode) {
        // Replace the selected node with the replacement node
        this.moveNode(node, selectedReplacementNode);
        this.dataSource.data = this.treeNodes;

        // Optionally, update your data source and refresh the tree display here
      }
    });
  }

  getAvailableNodes(selectedNode: TreeNode): TreeNode[] {
    // Implement logic to get all available nodes except the selected node and its children
    // For example, you could filter the treeNodes array
    const availableNodes: TreeNode[] = [];

    const traverse = (node: TreeNode) => {
      if (
        node.id !== selectedNode.id &&
        !this.isDescendant(selectedNode, node)
      ) {
        availableNodes.push(node);
      }

      if (
        node.children &&
        node.children.length > 0 &&
        node.id !== selectedNode.id
      ) {
        node.children.forEach((child) => traverse(child));
      }
    };

    this.treeNodes.forEach((node) => traverse(node));

    return availableNodes;
  }

  isDescendant(parentNode: TreeNode, node: TreeNode): boolean {
    // Implement logic to check if node is a descendant of parentNode
    // You can use recursion to traverse the tree
    if (!parentNode.children) {
      return false;
    }
    for (const child of parentNode.children) {
      if (child.id === node.id) {
        return true;
      }
      if (this.isDescendant(child, node)) {
        return true;
      }
    }
    return false;
  }

  moveNode(clickedNode: TreeNode, replacementNode: TreeNode): void {
    console.log('Clicked Node:', clickedNode);
    console.log('Replacement Node:', replacementNode);

    // Function to recursively find a node in the tree and remove it
    const findAndRemove = (nodes: TreeNode[]): TreeNode | undefined => {
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        if (node.id === clickedNode.id) {
          // Remove the clicked node from its current position
          nodes.splice(i, 1);
          return node; // Return the removed node
        }
        if (node.children && node.children.length > 0) {
          // Recursively search in child nodes
          const removedNode = findAndRemove(node.children);
          if (removedNode) {
            return removedNode; // Node found and removed in child nodes
          }
        }
      }
      return undefined; // Node not found
    };

    // Remove the clicked node from its previous position in the tree
    const removedClickedNode = findAndRemove(this.treeNodes);

    if (!removedClickedNode) {
      console.log('Clicked node not found in the tree.');
      return;
    }

    console.log('Node removed successfully from its previous position.');

    // Find the replacement node in the tree and add the clicked node as its child
    const findAndAddChild = (nodes: TreeNode[]): boolean => {
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        if (node.id === replacementNode.id) {
          // Add the clicked node as a child of the replacement node
          node.children = node.children || [];
          node.children.push(removedClickedNode);
          return true; // Node found and clicked node added as child
        }
        if (node.children && node.children.length > 0) {
          // Recursively search in child nodes
          if (findAndAddChild(node.children)) {
            return true; // Node found and clicked node added as child in child nodes
          }
        }
      }
      return false; // Node not found
    };

    // Start the search and add child process from the root nodes
    const nodeAddedAsChild = findAndAddChild(this.treeNodes);

    if (!nodeAddedAsChild) {
      console.log('Replacement node not found in the tree.');
    }

    console.log('Final updated treeNodes:', this.treeNodes);
  }
}
