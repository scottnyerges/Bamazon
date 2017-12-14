// THIS CALLS THE MYSQL DATABASE
var mysql = require("mysql");

// THIS CALLS THE INQUIRER FUNCTION
var inquirer = require("inquirer");
var connection = mysql.createConnection({
host: "localhost",
port: 8889,
user: "root",
password: "root",
database: "bamazon_db"
});

// THIS CHECKS THE CONNECTION
connection.connect(function(err) {
if (err) throw err;
console.log("connected as an id " + connection.threadId);
afterConnection();
});

// THIS DISPLAYS ALL OF THE PRODUCTS - would be nice if each item were on one line
function afterConnection() {
connection.query("SELECT * FROM products", function(err, res) {
if (err) throw err;
// CHECK THE CONNECTION
console.log(res);
// RUN THE PROMPT
userPrompt();
});
}

// THIS PROMPTS THE USER TO CHOOSE A PRODUCT
function userPrompt() {
inquirer.prompt([
{
type: "input",
name: "prodID",
message: "What product do you want? Enter product ID."
} ,
{
type: "input",
name: "quantity",
message: "How many do you wish to buy?"
}])
.then(function(answer) {
// CHECK THE CONNECTION
console.log(answer);

// THIS TRIGGERS THE FUNCTION THAT CHECKS AVAILABILITY
checkAvail(answer);
});
}

// THIS FUNCTION CHECKS PRODUCT AVAILABILITY
function checkAvail(answer) {
connection.query("SELECT * FROM products WHERE ?",
{
item_id: answer.prodID
},
function(err, res) {
if(err) throw err;
console.log(res[0].stock_quantity);
var stock = res[0].stock_quantity;
// CHECK THE CONNECTION
console.log(stock);
if (answer.quantity <= stock) {
// CHECK THE CONNECTION
console.log("If works");

// IF SUFFICIENT QUANTITY, CALL THE PURCHASE FUNCTION
makePurchase(answer,res[0]);
}

// OTHERWISE, TRIGGER INSUFFICIENT QUANTITY RESPONSE
else {
// CHECK THE CONNECTION
console.log("Go to Amazon instead, fool!");
}
})
};

// THIS FUNCTION UPDATES THE STOCK QUANTITY IN THE DATABASE
function makePurchase(answer,itemObj) {
var newStock = itemObj.stock_quantity - answer.quantity;
// CHECK THE CONNECTION
console.log(newStock);

// THIS UPDATES THE STOCK QUANTITY IN THE DATABASE
connection.query("UPDATE products SET ? WHERE ?",
[{
stock_quantity: newStock
},{
item_id: answer.prodID
}],
function(err) {
if(err) throw err;

// THIS TRIGGERS THE TALLY ORDER FUNCTION - NONFUNCTIONAL SO FAR
// tallyOrder();
// CHECK THE CONNECTION
console.log("stock updated new stock = "+newStock);
})
};

// THIS FUNCTION TALLIES THE ORDER PRICE
function tallyOrder() {
connection.query("SELECT * FROM products WHERE ?",
{
item_id: answer.prodID
},
function(err, res) {
if(err) throw err;
// CHECK THE CONNECTION
console.log("Your total price is: " + (answer.quantity * price));
})
};

// THIS RERUNS THE WHOLE PROGRAM (OPTIONAL)

// THIS IS WHERE THE PROGRAMMER GIVES UP AND GOES OUT FOR A DRINK

