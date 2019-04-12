// Busines Logic
function PizzaPrice(sizePrice, baseToppingPrice) {
  this.pizzaSize = pizzaSize;
  this.baseTopping = baseTopping;
  this.additionalToppings = [];
  this.price = 0;
}

//sizePrice function
PizzaPrice.prototype.pizzaSizePrice = function() {
  if (this.pizzaSize === "small") {
    return 10;
  } else {
    return 14;
  } conosole.log(pizzaSizePrice)
}
// baseToppingPrice function
PizzaPrice.prototype.baseToppingPrice = function() {
  if (this.baseTopping === "cheese") {
    return 0;
  } else {
    return 4;
  }
}
// }
// places.prototype.totalInfo = function() {
// return "<li>" + "Country: " + this.country + "</li>" + "<li>" + "Landmark: " + this.landmark + "</li>" + "<li>" + "Activity: " + this.activity + "</li>";
// }
