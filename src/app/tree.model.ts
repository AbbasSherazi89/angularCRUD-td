export interface TreeNode {
    id: number;
    name: string;
    children?: TreeNode[];
  }

const treeNodes: TreeNode[] = [
    {
      id: 1,
      name: 'Fruits',
      children: [
        {
          id: 2,
          name: 'Apples',
          children: [
            {
              id: 4,
              name: 'Granny Smith'
            },
            {
              id: 5,
              name: 'Red Delicious'
            }
          ]
        },
        {
          id: 3,
          name: 'Bananas'
        }
      ]
    },
    {
      id: 6,
      name: 'Vegetables',
      children: [
        {
          id: 7,
          name: 'Carrots'
        },
        {
          id: 8,
          name: 'Broccoli'
        }
      ]
    }
  ];

  // Example of using treeNodes
console.log(treeNodes);