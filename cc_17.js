// Task 1 – Created Customer class
class Customer {
    constructor(name, email) {
      this.name = name;
      this.email = email;
      this.purchaseHistory = [];
    }
  
    addPurchase(amount) {
      this.purchaseHistory.push(amount);
    }
  
    getTotalSpent() {
      return this.purchaseHistory.reduce((sum, val) => sum + val, 0);
    }
  }
  
  // Test customer
  const customer1 = new Customer("Pate", "pate@email.com");
  customer1.addPurchase(200);
  customer1.addPurchase(350);
  console.log(`Customer: ${customer1.name}, Total Spent: $${customer1.getTotalSpent()}`);
  // Task 2 – Created SalesRep class
class SalesRep {
    constructor(name) {
      this.name = name;
      this.clients = [];
    }
  
    addClient(customer) {
      this.clients.push(customer);
    }
  
    getClientTotal(name) {
      const client = this.clients.find(c => c.name === name);
      return client ? client.getTotalSpent() : 0;
    }
  }
  
  // Test SalesRep
  const rep = new SalesRep("Bob");
  rep.addClient(customer1);
  console.log(`SalesRep: ${rep.name}, ${customer1.name}'s Total: $${rep.getClientTotal("Alice")}`);
  // Task 3 – Created VIPCustomer with overridden getTotalSpent
class VIPCustomer extends Customer {
    constructor(name, email, vipLevel) {
      super(name, email);
      this.vipLevel = vipLevel;
    }
  
    getTotalSpent() {
      return super.getTotalSpent() * 1.10; // 10% bonus
    }
  }
  
  // Test VIPCustomer
  const vip1 = new VIPCustomer("Charlie", "charlie@example.com", "Gold");
  vip1.addPurchase(600);
  vip1.addPurchase(200);
  console.log(`VIP Customer: ${vip1.name}, Total with Bonus: $${vip1.getTotalSpent().toFixed(2)}`);
  // Task 4 – Built reporting system with .reduce(), .filter(), .map()
const allCustomers = [customer1, vip1];
rep.addClient(vip1);

const totalRevenue = allCustomers.reduce((sum, c) => sum + c.getTotalSpent(), 0);
const bigSpenders = allCustomers.filter(c => c.getTotalSpent() > 500);
const customerSummary = allCustomers.map(c => ({
  name: c.name,
  totalSpent: c.getTotalSpent().toFixed(2)
}));

console.log(`Total Revenue: $${totalRevenue.toFixed(2)}`);
console.log("High-spending Customers:", bigSpenders.map(c => c.name));
console.log("Customer Summary:", customerSummary);
git add cc_17.js
git commit -m "Task 4 – Built client report system with revenue