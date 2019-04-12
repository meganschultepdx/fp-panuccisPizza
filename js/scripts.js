// Busines Logic
function PizzaPrice(pizzaSize, baseTopping) {
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
  } console.log(pizzaSizePrice)
}
// baseToppingPrice function
PizzaPrice.prototype.baseToppingPrice = function() {
  if (this.baseTopping === "cheese") {
    return 0;
  } else {
    return 4;
  } console.log(baseToppingPrice)
}

// UI Logic
$(document).ready(function() {
  $("#pizzaForm").submit(function(event) {
    event.preventDefault();

    var pizzaSizeSelection = $("#pizzaSize").val();
    var baseToppingSelection = $("#baseTopping").val();
    var additionalToppingsSelection = [];
    $("#additionaToppings input:checked").each(function(){
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
  });
});
