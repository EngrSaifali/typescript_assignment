/* 12. Greetings: Start with the array you used in Exercise 11, 
       but instead of just printing each person’s name, print a 
       message to them. The text of each message should be the same, 
       but each message should be personalized with the person’s name. */

const nameList : string[] = ["Kashif", "Anwar", "Ali"];
const nameMessage : string = "Welcome in the world of AI";

// Method : 1

console.log(`${nameMessage} : ${nameList[0]}`);
console.log(`${nameMessage} : ${nameList[1]}`);
console.log(`${nameMessage} : ${nameList[2]}`);

// Method : 2

/* nameList.forEach(nameLists => console.log(`Hello, ${nameList}! Have a great day!`)); */

// Method : 3

/* for(let i = 0; i < nameList.length; i++) {
       console.log(`Hello, ${nameList[i]}! Have a great day!`);
}; */