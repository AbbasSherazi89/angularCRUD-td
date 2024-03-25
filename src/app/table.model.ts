export interface Item {
    id?:number;
    fname:string;
    lname:string;
    email:string;
  }

  
export const ITEM:Item[] = [
    {id: 1, fname: 'Ibne', lname: 'Abbas', email: 'ibne.abbas89@gmail.com'},
    {id: 2, fname: 'Mehdi', lname: 'Raza', email: 'mehdi@gmail.com'},
    {id: 3, fname: 'Tariq', lname: 'khan', email: 'tariq@gmail.com'},
  ];