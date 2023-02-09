class Car {
    model;
    year;
}

constructor(model, year){
    this.model = model;
    this.year = year;
}

let myCar = new Car("Acura TLX", 2022);


let myArray = ["Apple", 7, myCar];


myArray.push("backpack");

myArray[1] = 42;

let idx = myArray.indexOf("Apple");

myArray.splice(idx, 1); //second parameter is the number of elements you want to remove

//set: similar to array but has no order, plus every item is only there once

let mySet = new Set(["PUI", "UCRE", "SSUI"]);

mySet.has("PUI"); //returns true

myset.add("Data Visualization") //adds it to the set (no order involved)

myset.add("PUI") //PUI is already in set, so it doesn't add it again. Size of set is the same

