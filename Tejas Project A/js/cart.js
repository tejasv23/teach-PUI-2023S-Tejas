const glazingPrices = {
   "Keep original" : 0.0,
    "Sugar milk" : 0.0,
    "Vanilla milk" : 0.50,
    "Double chocolate" : 1.50
};

const packPrices = {
    "1" : 1, "3" : 3, "6" : 5, "12" : 10
};

// the cart array
const cartItems = [];
// used to create unique ID for each role, based on the order in which it's added to cart
let rollCounter = 0;

class Roll {
    constructor(rollType, rollGlazing, packSize, rollPrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = rollPrice;
        this.calculatedPrice = (this.basePrice + glazingPrices[this.glazing]) * packPrices[this.size];
    }
}

// initialize the cart with 4 rolls
function initializeCart() {
    cartItems.push(new Roll("Original", "Sugar milk", 1, rolls["Original"]["basePrice"]));
    cartItems.push(new Roll("Walnut", "Vanilla milk", 12, rolls["Walnut"]["basePrice"]));
    cartItems.push(new Roll("Raisin", "Sugar milk", 3, rolls["Raisin"]["basePrice"]));
    cartItems.push(new Roll("Apple", "Keep original", 3, rolls["Apple"]["basePrice"]));
}

//on click in the products page, this is executed
function addToCart(ollType, rollGlazing, packSize, rollPrice){
    cartItems.push(new Roll("Original", "Sugar milk", 1, rolls["Original"]["basePrice"]));
    saveToLocalStorage();
}

// add a Roll instance to the DOM
// also register a function to remove this roll when the "Remove" link is clicked
function addRollToPage(roll) {
    const imagePath = `images/products/${rolls[roll.type]["imageFile"]}`;
    // HTML template for a new Roll item
    const htmlContent = `
        <div class="cart-item" id="roll-${rollCounter}">
            <div>
                <img class="product-image" src="${imagePath}">
                <p class="remove">Remove</p>
            </div>
            <div class="item-detail">
                <p>${roll.type} Cinnamon Roll</p>
                <p>${roll.glazing}</p>
                <p>Pack Size: ${roll.size}</p>
            </div>
            <div class="item-price">
                <p>$ ${roll.calculatedPrice.toFixed(2)}</p>
            </div>
        </div>
    `;
    const cartContainer = document.querySelector(".cart-wrapper");
    const template = document.createElement("template");
    template.innerHTML = htmlContent.trim();
    const cartItemElement = template.content;

    // register function to remove this roll
    let currentRollCounter = rollCounter;
    cartItemElement.querySelector(".remove").onclick = function() {
        cartContainer.querySelector(`#roll-${currentRollCounter}`).remove();
        cartItems.splice(cartItems.indexOf(roll), 1);
        updateTotalPrice();
    }

    cartContainer.appendChild(cartItemElement);
    rollCounter += 1;
}

// update the total price field based on the current cart
function updateTotalPrice() {
    let totalPrice = 0;
    cartItems.forEach(roll => totalPrice += roll.calculatedPrice);
    const totalPriceElement = document.querySelector(".total-price");
    totalPriceElement.innerText = "$ " + totalPrice.toFixed(2);
}

function submitCart(roll){

    cartItems.push(roll);
    rollCounter +=1;
    saveToLocalStorage();

}
//submit cart funtion take takes in a roll
//pushes it tinot the cartitems array
//increase rtoll counter  by 1
//save to local storage
//comment out glazing options


//start of added part
function saveToLocalStorage() {
    
    console.log(cartItems);
    
    const cartArrayString = JSON.stringify(cartItems);
    console.log(cartArrayString);
  
    localStorage.setItem('cartItems', cartArrayString);
  }
  //create a submit cart function. takes in roll


function retrieveFromLocalStorage() {
    const cartArrayString = localStorage.getItem('cartItems');
    const cartArray = JSON.parse(cartArrayString);
    for (const roll of cartArray) {
        const theRoll = new Roll(roll.type, roll.glazing,
            roll.packSize, roll.rollPrice);
      
            //create element is to create the html element for the roll
            //while adding to cart is just adding the roll to our array
            cartItems.push(theRoll);
            rollCounter +=1;
            addRollToPage(theRoll);
    }
  }
  
  if (localStorage.getItem('cartItems') != null) {
    retrieveFromLocalStorage();
  }


  //end of added part



//initializeCart();
//cartItems.forEach(addRollToPage);
//updateTotalPrice();




async function typeSentence(sentence, eleRef, delay = 100) {
    const letters = sentence.split("");
    let i = 0;
    while(i < letters.length) {
      await waitForMs(delay);
      $(eleRef).append(letters[i]);
      i++
    }
    return;
  }
  
  
  function waitForMs(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

  typeSentence("Hey, over here!", "#sentence")
