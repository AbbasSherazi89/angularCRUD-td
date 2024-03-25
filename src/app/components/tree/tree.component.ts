import { Component } from '@angular/core';
import { FlatTreeControl } from '@angular/cdk/tree';
import {
  MatTreeFlatDataSource,
  MatTreeFlattener,
} from '@angular/material/tree';

interface FoodNode {
  name: string;
  children?: FoodNode[];
}

interface exampleFlateNode {
  expandable: boolean;
  name: string;
  level: number;
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Fruit',
    children: [{ name: 'Apple' }, { name: 'Banana' }, { name: 'Mango' }],
  },
  {
    name: 'vegetable',
    children: [
      {
        name: 'Green',
        children: [{ name: 'Broccoli' }, { name: 'Cabage' }],
      },
      {
        name: 'Orange',
        children: [{ name: 'Pumpkins' }, { name: 'Carrot' }],
      },
    ],
  },
];

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrl: './tree.component.css',
})
export class TreeComponent {
  constructor() {
    this.dataSource.data = TREE_DATA;
  }

  private _transformer = (node: FoodNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
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
}
