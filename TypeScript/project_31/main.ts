/* 31. No Users: Add an if test to Exercise 28 to make sure the 
   list of users is not empty.
• If the list is empty, print the message We need to find some users!
• Remove all of the usernames from your array, and make sure the 
  correct message is printed. */

let userName : string[] = ["saif123", "raaz2024", "asta_36"];

if(userName.length === 0) {
   console.log("We need to find some users.");
} else {
   userName = [];
   console.log("All usernames have been removed: " + userName.length);
};