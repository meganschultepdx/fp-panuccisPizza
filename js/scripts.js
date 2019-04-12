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
  } console.log("hello")
}
// baseToppingPrice function
PizzaPrice.prototype.baseToppingPrice = function() {
  if (this.baseTopping === "cheese") {
    return 0;
  } else {
    return 4;
  }
}
// // additional toppings function
// PizzaPrice.prototype.additionalToppingsPrice = function() {
//   var additionalToppingsPrice = additionalToppingsSelection.length;
// }

// total pizza price funcion
// PizzaPrice.prototype.pizzaTotalPrice = function() {
//   return this.pizzaSizePrice + this.baseToppingsPrice + this.additionalToppingsPrice;
// }

// UI additionalToppingsPrice
$(document).ready(function() {
  $("#pizzaForm").submit(function(event) {
    event.preventDefault();
    console.log("hi")
  // takes in UI input (selections)
    var pizzaSizeSelection = $("#pizzaSize").val();
    var baseToppingSelection = $("#baseTopping").val();
    var additionalToppingsSelection = [];
    $("input:checkbox[name=additionalToppings]:checked").each(function(){
        additionalToppingsSelection.push($(this).val());
      });

      var pizzaSelection = new PizzaPrice(pizzaSizeSelection, baseToppingSelection, additionalToppingsSelection);
      var sizePrice = pizzaSelection.pizzaSizePrice();
      var baseToppingPrice = pizzaSelection.baseToppingPrice();
      var additionalToppingsPrice = additionalToppingsSelection.length;
      var pizzaTotalPrice = sizePrice + baseToppingPrice + additionalToppingsPrice;

// displays user input/selections and final price
    $("#finalSize").html($("#pizzaSize").val());
    $("#finalBase").html($("#baseTopping").val());
    $("#finalAdditionalToppings").append(additionalToppingsSelection.join(", "));
    $("#totalPrice").html(this.pizzaFinalPrice);
    $("#totalPriceMessage").fadeIn();
    console.log(pizzaTotalPrice)
  });
});










// }
