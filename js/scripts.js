// Busines Logic
function PizzaPrice(pizzaSize, baseTopping) {
  this.pizzaSize = pizzaSize;
  this.baseTopping = baseTopping;
  this.additionalToppings = [];
  this.price = 0;
  this.pizzaSizePrice();
  this.baseToppingPrice()
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

    var pizzaSize = $("#pizzaSize").val();
    var baseTopping = $("#baseTopping").val();
    var additionalToppings = [];
    $("#additionaToppings input:checked").each(function(){
        additionalToppings.push($(this).val());
      });
    var pizzaSelection = new PizzaPrice(pizzaSize, baseTopping, additionalToppings);

    var sizePrice = pizzaSelection.pizzaSizePrice();
    var baseToppingPrice = pizzaSelection.baseToppingPrice();
    var additionalToppingsPrice = additionalToppings.length;
    var pizzaTotalPrice = sizePrice + baseToppingPrice + additionalToppingsPrice;

// displays user input/selections and final price
    $("#finalSize").html($("#pizzaSize").val());
    $("#finalBase").html($("#baseTopping").val());
    $("#finalAdditionalToppings").append(additionalToppings.join(", "));
    $("#totalPrice").html(this.pizzaFinalPrice);
    $("#totalPriceMessage").fadeIn();
  });
});
