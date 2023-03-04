
//getting the correct roll to show up depending on what page you click

cart = [];
const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const rollType = params.get('roll'); 

let name;
let price;
let imgpath;

for (each in rolls) {
    console.log(each);
    if (each == rollType){
        
        name = each;
        price = rolls[each].basePrice;
        imgpath = "assets/" + rolls[each].imageFile;
        console.log(name, price, imgpath);
    }

}


// let myElement = document.getElementById('prod-name');
// console.log(myElement);
// document.getElementById('#prod-name').innerText = name + " Cinnamon Roll";

// let myElement2 = document.getElementById('prod-pic');
// console.log(myElement2);
// document.getElementById('prod-pic').src = imgpath;


// document.getElementById('TotalPrice').innerText = price;



//computing the price based on roll type, glazing, and quantity


var glaze = 0;
var pack = 1;

function glazingChange(element) {
     glaze = element.value; 
     
     
     totalPrice();
}

function updatePackSize(number){

    pack = number.value;
    
    totalPrice();
}
   
function totalPrice(){

    let curr = document.getElementById('TotalPrice');
    
    document.getElementById('TotalPrice').innerText = "$"+ (Number(price+Number(glaze))*Number(pack)).toFixed(2);
    
 
}

//adding to cart

class Roll {


    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        if (packSize == 5){
            this.size = packSize+1;
        }
        else if (packSize == 10){
            this.size = packSize + 2;
        }
        else {
            this.size = packSize;
        }
        
        this.price = basePrice*this.size;
    }
}

function addToCart(name, glaze, pack, price){
  add1 = new Roll(name, glaze, pack, price); 
  cart.push(add1); 
  console.log("cart has");
  console.log(cart);
  
}

//solution for hw 3: has the html for how the button should look

addToCart("Original", "Sugar Milk", 1, 2.49);
addToCart("Walnut", "Vanilla Milk", 10, 3.99);
addToCart("Raisin", "Sugar Milk", 3, 2.99);
addToCart("Apple", "Original", 3, 3.49);
console.log(cart);

cart.forEach(roll => createRoll(roll));

function createRoll(roll){

    const template = document.querySelector('#rolls-template');
    const clone = template.content.cloneNode(true);

    roll.element = clone.querySelector('.roll-item');
    const cartList = document.querySelector('.Cart');
    cartList.prepend(roll.element);
    
    updateElement(roll);




const btnDelete = roll.element.querySelector('.remove-button');
  console.log(btnDelete);
  btnDelete.addEventListener('click', () => {
    deleteRoll(roll, cart);
  });
    
}
function updateElement(roll){
    const rollImageElement = roll.element.querySelector('.child1 img');
    const rollTitleElement = roll.element.querySelector('.child2 p');
    const rollPriceElement = roll.element.querySelector('.child3 h2');
    const rollGlazeElement = roll.element.querySelector('.child2 h1');
    const rollSizeElement = roll.element.querySelector('.child2 h2');

    console.log(rollTitleElement);
    
    rollImageElement.src = "assets/" + rolls[roll.type].imageFile;

    console.log(roll);
    rollTitleElement.innerText = roll.type.toString() + " Cinnamon Roll";
    rollPriceElement.innerText = roll.price.toString();
    rollGlazeElement.innerText = "Glazing: " + roll.glazing.toString();
    rollSizeElement.innerText = "Pack size: " + roll.size.toString();
    
}


function deleteRoll(roll, cart) {
    // remove the notecard DOM object from the UI
    roll.element.remove();
  
    // remove the actual Notecard object from our set of notecards
    cart.splice(roll);

    //now need to update price
    updatePrice(cart);
  }
  
function updatePrice(cart){

    price = 0;
 console.log("elem is");
        console.log(cart);
    cart.forEach((elem)=>{
       
    price = price + elem.price;}
    );



    const totalCost = document.querySelector('#final-price');
    
    totalCost.innerText = "$"+price;


}
