var glaze = 0;
var pack = 1;

function glazingChange(element) {
     glaze = element.value; 
     console.log("update glazing works");
     console.log(element.value);
     
     totalPrice();
}

function updatePackSize(number){

    pack = number.value;
    console.log("update pack size works");
    totalPrice();
}
   
function totalPrice(){

    let curr = document.getElementById('TotalPrice');
    document.getElementById('TotalPrice').innerText = "$"+ (Number(2.49+Number(glaze))*Number(pack)).toFixed(2);
    

}