// broodje kaas
// boterham
// kaas
// boterham
let price = 35;
let discount = 1;

function sandwich(filling) {
 return "boterham " + filling + " boterham";
}

function calculateDiscountedPrice() {
return price - discount;
}

console.log(sandwich("kaas"));
console.log(sandwich("ham"));
console.log(calculateDiscountedPrice());

if(price >= 25) {
    console.log(calculateDiscountedPrice());
} else {
    console.log(price);
}
