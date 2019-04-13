// Busines Logic
function PizzaPrice(size, baseTopping, additionalToppings) {
  this.size = size;
  this.baseTopping = baseTopping;
  this.additionalToppings = [];
  this.price = 0;

}
//selectionPrice function
PizzaPrice.prototype.selectionPrice = function() {
  if (this.size === "small") {
    this.price += 10;
  } else {
    this.price += 14;
  }   if (this.baseTopping === "cheese") {
      this.price += 0;
    } else {
      this.price += 4;
    }
  return this.price
}

// UI Logic
$(document).ready(function() {
  $("#pizzaForm").submit(function(event) {
    event.preventDefault();
  //user selection/input values
    var size = $("#size").val();
    var baseTopping = $("#baseTopping").val();
    var additionalToppings = [];
    $('.additional input:checked').each(function() {
      additionalToppings.push($(this).val());
    });
  //new pizza variable, price variable and total order price
    var finalSelection = new PizzaPrice(size, baseTopping, additionalToppings);
    var selectionPrice = finalSelection.selectionPrice();
    var additionalToppingsPrice = additionalToppings.length;
    var pizzaTotalPrice = selectionPrice + additionalToppingsPrice;
    console.log(pizzaTotalPrice)

// displays user input/selections and final price
    $("#finalSize").html($("#pizzaSize").val());
    $("#finalBase").html($("#baseTopping").val());
    $("#finalAdditionalToppings").append(additionalToppings.join(", "));
    $(".totalPrice").html(pizzaTotalPrice);
    $("#totalPriceMessage").fadeIn();
  });
});
