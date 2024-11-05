const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";
const pizzaPrice = 80;

function startOrder() {
    alert(`Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian}, and ${pepperoni}.`);

    let orderName = prompt("Enter the name of the pizza you want to order today:");
    let orderQuantity = prompt(`How many of ${orderName} do you want?`);

    function checkOrderName(order) {
        return order === vegetarian || order === hawaiian || order === pepperoni;
    }

    if (checkOrderName(orderName)) {
        orderQuantity = parseInt(orderQuantity);
        const orderTotal = totalCost(orderQuantity);
        const time = cookingTime(orderQuantity);
        alert(`Great, I'll get started on your ${orderName} right away, it will cost ${orderTotal} kr. The pizzas will take ${time} minutes.`);
    } else {
        alert("Sorry, that pizza is not on the menu.");
    }

    
    if (confirm("Do you want to place another order?")) {
        startOrder();
    }
}

function totalCost(quantity) {
    return quantity * pizzaPrice;
}

function cookingTime(quantity) {
    if (quantity >= 1 && quantity <= 2) {
        return 10;
    } else if (quantity >= 3 && quantity <= 5) {
        return 15;
    } else {
        return 20;
    }
}


startOrder();
