// webapp.js

// Add or remove an item from the grocery list
function addOrRemoveItem() {

    // Prompt the user to either add or remove an item
    const action = prompt("Add or remove an item?");
    const groceryList = document.getElementById("grocery-list");

    if (action === "add") {
        addItem();
    } else if (action === "remove") {
        removeItem();
    } else {
        alert("Invalid action!");
    }

    // Remove an item from the grocery list
    function removeItem() {
        const item = prompt("Enter the item to remove:");
        const groceryList = document.getElementById("grocery-list");

        for (let i = 0; i < groceryList.children.length; i++) {
            const listItem = groceryList.children[i];
            if (listItem.textContent === item) {
                groceryList.removeChild(listItem);
                break;
            }
        }

    }

    // Add an item to the grocery list
    function addItem() {

        // Prompt the user to enter an item
        const item = prompt("Enter the item:");
        const groceryList = document.getElementById("grocery-list");

        if (item) {
            const listItem = document.createElement("li");
            listItem.textContent = item;
            groceryList.appendChild(listItem);
        }
    }
}

// Find cheapest location to buy groceries
function findCheapestLocation() {
    const output = document.getElementById("output");
    output.textContent = "Cheapest location: Supermarket XYZ";
}

// Find coupons for groceries
function findCoupons() {
    const output = document.getElementById("output");
    output.textContent = "Coupons: 10% off on fruits, $2 off on milk";
}

// Add event listeners to the action links
document.addEventListener("DOMContentLoaded", function () {
    const addRemoveLink = document.querySelector('a[href="#add-remove"]');
    const cheapestLocationLink = document.querySelector('a[href="#cheapest-location"]');
    const findCouponsLink = document.querySelector('a[href="#find-coupons"]');

    addRemoveLink.addEventListener("click", addOrRemoveItem);
    cheapestLocationLink.addEventListener("click", findCheapestLocation);
    findCouponsLink.addEventListener("click", findCoupons);
});
