/* 13. Your Own Array: Think of your favorite mode of transportation, 
       such as a motorcycle or a car, and make a list that stores several 
       examples. Use your list to print a series of statements about 
       these items, such as “I would like to own a Honda motorcycle.” */

let iTransport : string[] = ["Bike", "Bus", "Train", "Aeroplane"];

// Method : 1

console.log(`I would like to tavel by ${iTransport[0]}`);
console.log(`I would like to tavel by ${iTransport[1]}`);
console.log(`I would like to tavel by ${iTransport[2]}`);
console.log(`I would like to tavel by ${iTransport[3]}`);

// Method : 2

/* for(let i = 0; i < iTransport.length; i++) {
       console.log(`I would like to travel by ${iTransport[i]}`);
}; */

// Method : 3

/* iTransport.forEach(item => console.log(`I would like to travel by ${iTransport}`)); */