/* 45. Cars: Write a function that stores information about a car in 
       a Object. The function should always receive a manufacturer 
       and a model name. It should then accept an arbitrary number of 
       keyword arguments. Call the function with the required information 
       and two other name-value pairs, such as a color or an optional 
       feature. Print the Object that’s returned to make sure all the 
       information was stored correctly. */


function CarInfo(manufacturer : string, model : string, ...options: { [key : string] : any }[]) : any {

       let bestCars : { [key: string]: any } = {

              manufacturer : "Toyota",
              model : "Toyota Fortuner"

       };

       for(let option of options) {
              
              for(let key in option) {

                     bestCars[key] = option[key]

              }

       }

       return bestCars;

};

let car = CarInfo("Toyota", "Camry", { color: "blue" }, { features: ["GPS", "Sunroof"] });

console.log(car);