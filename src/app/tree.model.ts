export interface TreeNode {
    id: number;
    name: string;
    children?: TreeNode[];
    parent?:TreeNode;
  }

export const tree: TreeNode[] = [
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
          name: 'Carrots',
        },
        {
          id: 8,
          name: 'Broccoli',
          children: [
            {
              id: 9,
              name: 'Green Brocoli'
            },
            {
              id: 10,
              name: 'Yellow Brocoli'
            }
          ]
        }
      ]
    }
  ];