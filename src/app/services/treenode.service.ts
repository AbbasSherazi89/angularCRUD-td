import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
// import { TreeNode } from '../components/treenode/treenode.component';
// import { map } from 'rxjs/operators';
// interface FoodNode {
//   id: any;
//   parentId: any;
//   text: string;
//   parent?: FoodNode;
//   children?: FoodNode[];
// }


@Injectable({
  providedIn: 'root',
})
export class TreenodeService {

  private apiUrl = 'http://localhost:1337/api';
  constructor(private http: HttpClient) {}

  getTreeNodes(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/tree-nodes/treeformat`).pipe(
      catchError((error) => {
        console.error('Error fetching tree nodes:', error);
        throw error; // Rethrow the error
      })
    );
  }

  ////////
  createNode(newNode: any): Observable<any> {
    const id = newNode.parentId;
    const requestPayload = {
      data: {
        text: newNode.name,
        parentId:id,
      },
     
    };
    return this.http.post<any>(`${this.apiUrl}/tree-nodes/createTree`, requestPayload);
  }

  deleteNode(nodeId: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/tree-nodes/${nodeId}`);
  }
  
  getAvailableNodes(clickedNodeId: number): Observable<any> {
    console.log("Clicked id: ", clickedNodeId);
    return this.http.get<any>((`${this.apiUrl}/tree-nodes/getAvailableNodes/${clickedNodeId}`));
  }

  updateNode(nodeId: number, newParentNodeId: number | null ): Observable<any> {
    const body = { data: { nodeId, newParentNodeId } };
    console.log(body);
    return this.http.put<any>(`${this.apiUrl}/tree-nodes/updateNode`, body);
  }

    ////////////////////Get available nodes frontend logic
  // getAvailableNodes(clickedNode: TreeNode): Observable<TreeNode[]> {
  //   console.log("Clicked node: ", clickedNode);
  //   return this.http.get<TreeNode[]>(`${this.apiUrl}/tree-nodes/treeformat`).pipe(
  //     map(nodes => this.filterAvailableNodes(nodes, clickedNode))
  //   );
  // }

  // private filterAvailableNodes(nodes: TreeNode[], clickedNode: TreeNode): TreeNode[] {
  //   const availableNodes: TreeNode[] = [];
  //   availableNodes.push({ id: -1, name: "None" });
  //   this.traverseTree(nodes, clickedNode, availableNodes);
  //   return availableNodes;
  // }
  
  // private traverseTree(nodes: TreeNode[], clickedNode: TreeNode, availableNodes: TreeNode[]): void {
  //   for (const node of nodes) {
  //     if (node.id !== clickedNode.id) {
  //       // Add the node if it's not the clicked node
  //       availableNodes.push(node);
  //       // Recursively traverse its children
  //       if (node.children && node.children.length > 0) {
  //         this.traverseTree(node.children, clickedNode, availableNodes);
  //       }
  //     }
  //   }
  // }

}
