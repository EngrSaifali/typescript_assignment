/* 15. Changing Guest List: You just heard that one of your guests 
       can’t make the dinner, so you need to send out a new set of 
       invitations. You’ll have to think of someone else to invite. 
       
• Start with your program from Exercise 14. Add a print statement 
  at the end of your program stating the name of the guest who can’t 
  make it.

• Modify your list, replacing the name of the guest who can’t make 
  it with the name of the new person you are inviting.

• Print a second set of invitation messages, one for each person 
  who is still in your list. */

let peoples : string[] = ["Kezaru", "Luffy", "Asta"];

// Method : 1

// console.log(`${peoples[2]}, won't be able to make it.`);

// peoples = ["Kezaru", "Luffy", "Kaizu"];

// console.log(`Dear ${peoples[0]}, you're invited to our dinner.`);
// console.log(`Dear ${peoples[1]}, you're invited to our dinner.`);
// console.log(`Dear ${peoples[2]}, you're invited to our dinner.`);

// Method : 2

for(let i = 0; i < peoples.length; i++) {
  console.log(`Dear ${peoples[i]}, we sincerely invite you to our dinner.`);
};

let newPeople : string = "Aizoki";

peoples[0] = newPeople;

for(let i = 0; i < peoples.length; i++) {
  console.log(`Dear ${peoples[i]}, we sincerely invite you to our dinner.`);
};

let oldPeople : string = "Kezaru";
console.log(`Dear ${oldPeople}, won't be able to join us at dinner.`);