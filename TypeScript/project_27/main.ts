/* 27. Alien Colors #3: Turn your if-else chain from Exercise 5-4 
       into an if-else chain.

• If the alien is green, print a message that the player earned 5 points.
• If the alien is yellow, print a message that the player earned 10 points.
• If the alien is red, print a message that the player earned 15 points.
• Write three versions of this program, making sure each message 
  is printed for the appropriate color alien. */

// Version : 1

let alienBody_Color : string = 'green';

if (alienBody_Color === 'green') {
       console.log("Player earned 5 points.");
} else if (alienBody_Color === 'yellow') {
       console.log("Player earned 10 points.");
} else if (alienBody_Color === 'red') {
       console.log("Player earned 15 points.");
} else {
       console.log("Please select valid color.")
}

// Version : 2

alienBody_Color = 'yellow';

if (alienBody_Color === 'green') {
       console.log("Player earned 5 points.");
} else if (alienBody_Color === 'yellow') {
       console.log("Player earned 10 points.");
} else if (alienBody_Color === 'red') {
       console.log("Player earned 15 points.");
} else {
       console.log("Please select valid color.")
}

// Version : 3

alienBody_Color = 'red';

if (alienBody_Color === 'green') {
       console.log("Player earned 5 points.");
} else if (alienBody_Color === 'yellow') {
       console.log("Player earned 10 points.");
} else if (alienBody_Color === 'red') {
       console.log("Player earned 15 points.");
} else {
       console.log("Please select valid color.")
}