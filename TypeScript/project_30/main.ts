/* 30. Hello Admin: Make a array of five or more usernames, including 
       the name 'admin'. Imagine you are writing code that will print 
       a greeting to each user after they log in to a website. Loop 
       through the array, and print a greeting to each user:

• If the username is 'admin', print a special greeting, such as 
  Hello admin, would you like to see a status report?
• Otherwise, print a generic greeting, such as Hello Eric, thank you for 
  logging in again. */

let website_LogIn : (string | number)[] = ["admin_1", "saifee123", "sean152"];

// Method : 1

for(let i=0; i<website_LogIn.length; i++) {

  if(website_LogIn[i] === "admin_1") {
    console.log("Hello admin, would you like to see a status report?");
  } else {
    console.log(`Hello ${website_LogIn[i]}, thank you for logging in again.`);
  };

};

// Method : 2

website_LogIn.forEach(web_LogIn => {

  if (web_LogIn === 'admin_1') {
    console.log("Hello admin, would you like to see a status report?");
  } else {
    console.log(`Hello ${web_LogIn}, thank you for logging in again.`);
  }
});