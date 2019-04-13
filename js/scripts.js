// Busines Logic
function PizzaPrice(size, baseTopping, additionalToppings) {
  this.size = size;
  this.baseTopping = baseTopping;
  this.additionalToppings = [];
  this.price = 0;

}
//sizePrice function
PizzaPrice.prototype.sizePrice = function() {
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
// // baseToppingPrice function
// PizzaPrice.prototype.baseToppingPrice = function() {
//   if (this.baseTopping === "cheese") {
//     this.price += 0;
//   } else {
//     this.price += 4;
//   }
//   return this.price
// }

//additionalToppingsPrice function
//I left this in because I couldn't figure out the right way to do this up here and I would like to talk to you guys about it. I'm not sure how to make the value of the array I made from the inputted checked boxes register in my busines logic this.additionalToppings. I even tried changing it to this.additionalToppings = additonalToppings;

// PizzaPrice.prototype.additionalToppingsPrice = function() {
//   this.price += this.additionalToppings.length;
// }
// console.log(this.additionalToppingsPrice)


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
    }); //console.log(additionalToppings)
  //new pizza variable
    var finalSelection = new PizzaPrice(size, baseTopping, additionalToppings);

    var pizzaTotalPrice = this.price + additionalToppings.length;

    var sizePrice = finalSelection.sizePrice();
    // var baseToppingPrice = finalSelection.baseToppingPrice();
    var additionalToppingsPrice = additionalToppings.length;
    var pizzaTotalPrice = sizePrice + additionalToppingsPrice;
    console.log(pizzaTotalPrice)

// displays user input/selections and final price
    $("#finalSize").html($("#pizzaSize").val());
    $("#finalBase").html($("#baseTopping").val());
    $("#finalAdditionalToppings").append(additionalToppings.join(", "));
    $("#totalPrice").html(this.pizzaFinalPrice);
    $("#totalPriceMessage").fadeIn();

  });
});
