// Customer Records Tracker

let customers = [
  {
    name: "Ivelisse Feliciano",
    email: "ivelisse.feliciano@gmail.com",
    purchases: ["Math Book", "Journal", "Jacket"]
  },
  {
    name: "Alberto Santiago",
    email: "alberto.santiago@gmail.com",
    purchases: ["Headphones", "Science Book","Backpack"]
  },
  {
    name: "Kimberleen Lozada",
    email: "kimberleen.lozada@gmail.com",
    purchases: ["Pen Case", "Notebook", "English Book"]
  }
];

console.log("Original Customers:");
console.log(customers);


// Add a new customer using .push()
const newCustomer = {
  name: "Jeniffer Maldonado",
  email: "jeniffer.maldonado@gmail.com",
  purchases: ["English Book", "Laptop", "Desk Lamp"]
};

customers.push(newCustomer);
console.log("\n--- After Adding Jeniffer Maldonado ---");
console.log(customers);

// Remove the first customer using .shift()
const removedCustomer = customers.shift();
console.log(\n--- Removed First Customer: ${removedCustomer.name} ---);
console.log(customers);


// ✅ Step 4: Update Customer Info

// Update the email of the first remaining customer (Marcus Rivera)
customers[0].email = "alberto.santiago2@gmail.com";
console.log(\n--- Updated Alberto Santiago's Email ---);
console.log(New email: ${customers[0].email});

// Add a new purchase to Priya Patel's purchases array (now index 1)
customers[1].purchases.push("Desk Lamp");
console.log(\n--- Added Purchase to ${customers[1].name}'s History ---);
console.log(Purchases: ${customers[1].purchases});


// ✅ Step 5: Display Customer Information

console.log("\n========================================");
console.log("         CUSTOMER SUMMARY REPORT        ");
console.log("========================================");

customers.forEach((customer) => {
  console.log(`
Name:              ${customer.name}
Email:             ${customer.email}
Total Purchases:   ${customer.purchases.length}
Items Purchased:   ${customer.purchases.join(", ")}
  `);
});