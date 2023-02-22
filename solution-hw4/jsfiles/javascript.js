

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
let myElement = document.getElementById('prod-name');
console.log(myElement);
document.getElementById('prod-name').innerText = name + " Cinnamon Roll";

let myElement2 = document.getElementById('prod-pic');
console.log(myElement2);
document.getElementById('prod-pic').src = imgpath;


document.getElementById('TotalPrice').innerText = price;



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
            this.size = 6
        }
        else if (packSize = =10){
            this.size = 12
        }
        else {
            this.size = packSize;
        }
        
        this.basePrice = basePrice;
    }
}

function addToCart(){
  add1 = new Roll(name, glaze, pack, price); 
  cart.push(add1); 
  console.log("cart has");
  console.log(cart);
  
}

//solution for hw 3: has the html for how the button should look