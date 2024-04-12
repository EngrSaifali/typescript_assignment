/* 5. Famous Quote 2: Repeat Exercise 4, but this time store the 
      famous person’s name in a variable called famous_person. 
      Then compose your message and store it in a new variable called message. 
      Print your message. */

// Exercise 4 (Repeat):

let authorNames : string = "Oscar Wilde";
let quotes : string = "Be yourself; everyone else is already taken.";

let sumUps : string = `${authorNames} once said, "${quotes}"`;
console.log(sumUps);

let famous_person : string = "Oscar Wilde";
let message : string = `${famous_person} once said, "${quotes}"`;

console.log(message);