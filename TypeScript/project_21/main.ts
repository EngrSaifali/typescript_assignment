/* 21. They think of something you could store in a TypeScript Object. 
       Write a program that creates Objects containing these items. */

// Define types for value

type value = {                               // interface value {
       
       name : string;                        // }
       category : string;
       quantity : number;
       price : number;

};

// Function to create objects containing items

function createObjects() : value[] {

       const objects : value[] = [

              {
                     name : 'Laptop',
                     category : 'Electronics',
                     quantity : 5,
                     price : 3999
              },

              {
                     name : 'Notebook',
                     category : 'Stationery',
                     quantity : 25,
                     price : 200
              },

              {
                     name : 'Headphones',
                     category : 'Electronics',
                     quantity : 8,
                     price : 2499
              },
       ]

       return objects;

};

console.log("Objects containing items:");

const values : value[] = createObjects();

values.forEach(value => {
       console.log(`Name : ${value.name}, Category : ${value.category}, Quantity : ${value.quantity}, Price : ${value.price}`);
});