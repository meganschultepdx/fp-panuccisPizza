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

PizzaPrice.prototype.additionalToppingsPrice = function(){
  if ($("input[type='checkbox']").is(":checked")){

  }
}

// UI additionalToppingsPrice
$(document).ready(function() {
  $("#pizzaForm").submit(function(event) {
    event.preventDfault();
    console.log("hi")

    var pizzaSizeSelection = $("#pizzaSize").val();
    var baseToppingSelection = $("#baseTopping").val();
    var additionalToppingsSelection = [];
    additionalToppingsSelection.push($( "input[type=checkbox][name=bar]:checked").val());
    // $( "input").val([ "check1", "check2", "radio1" ]);

    var pizzaSelection = new PizzaPrice(pizzaSizeSelection, baseToppingSelection, additionalToppingsSelection);

    var sizePrice = pizzaPriceSelection.pizzaSizePrice();
    var baseToppingPrice = pizzaSelection.baseToppingsPrice();
    var additionalToppingsPrice = pizzaSelection.additionalToppingsPrice();
    var pizzaTotalPrice = sizePrice + baseToppingsPrice + additionalToppingsPrice;

    $("#finalSize").html(pizzaSelection.pizzaSize);
    $("#finalBase").html(pizzaSelection.baseTopping);
    $("#finalAdditionalToppings").append(additionalToppingsSelection.join(", "));
    $("#totalPrice").html(pizzaTotalPrice);
    $("#totalPriceMessage").fadeIn();

  });
});










// }
// places.prototype.totalInfo = function() {
// return "<li>" + "Country: " + this.country + "</li>" + "<li>" + "Landmark: " + this.landmark + "</li>" + "<li>" + "Activity: " + this.activity + "</li>";
// }
