/* 37. Large Shirts: Modify the make_shirt() function so that shirts 
       are large by default with a message that reads I love TypeScript. 
       Make a large shirt and a medium shirt with the default message, 
       and a shirt of any size with a different message. */

function make_shirts(size : string = 'Large', message : string = 'I love Typescript') {

       console.log(`The shirt size is "${size}" and it says: "${message}".`);

};

make_shirts();

make_shirts('Medium');

make_shirts('Small', "I hate maths duh!");