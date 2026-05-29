// Customer Records Tracker



let customers = [
  {
    name: "Ivelisse Feliciano",
    email: "ivelisse.feliciano@gmail.com",
    purchases: ["Notebook", "Pen Set", "Planner"]
  },
  {
    name: "Alberto Santiago",
    email: "alberto.santiago@gmail.com",
    purchases: ["Laptop Bag", "Mouse"]
  },
   {
    name: "Anna Hernandez",
    email: "anna.hernandez@gmail.com",
    purchases: ["Notebook", "Laptop"]
  },
  {
    name: "Kimberleen Lozada",
    email: "kimberleen.lozada@gmail.com",
    purchases: ["Desk Lamp", "Sticky Notes", "Calendar"]
  }
];

console.log("Original Customers:");
console.log(...customers);


// // Remove the first customer
let removedCustomer = customers.shift(); 
console.log(`After removing the first customer: ${removedCustomer.name}`);
console.log("Customers after removal:");
console.log(customers);


// Add a new customer
let newCustomer = {
  name: "Jeniffer Maldonado",
  email: "jeniffer.maldonado@gmail.com",
  purchases: ["Keyboard", "USB Drive"]
};

customers.push(newCustomer);
console.log("After adding a new customer:");
console.log(customers);


// Add a new purchase to a customer's purchase history
// customers[1].purchases.push("Office Chair");

console.log("After updating customer information:");
console.log(customers);

// Update one customer's email
let alberto =customers.find(customer => customer.name === "Alberto Santiago");
if (alberto) {
  alberto.email = "alberto.newemail@gmail.com";
}

if(alberto) {alberto.purchases.push("Office Chair");}

// Display customer information
console.log("Customer Summary:");

customers.forEach(function(customer) {
  console.log(`Name: ${customer.name}`);
  console.log(`Email: ${customer.email}`);
  console.log(`Total Purchases: ${customer.purchases.length}`);
  console.log("-------------------------");
});