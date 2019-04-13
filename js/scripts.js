// Busines Logic
function PizzaPrice(size, baseTopping, additionaToppings) {
  this.size = size;
  this.baseTopping = baseTopping;
  this.additionalToppings = [];
}
//size Price function
PizzaPrice.prototype.sizePrice = function() {
  if (this.size === "small") {
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

    var size = $("#size").val();
    var baseTopping = $("#baseTopping").val();
    var additionalToppings = [];
    $('.additional input:checked').each(function() {
      additionalToppings.push($(this).val());
    }); console.log(additionalToppings)

    var pizzaSelection = new PizzaPrice(size, baseTopping, additionalToppings);

    var sizePrice = pizzaSelection.sizePrice();
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
