DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;

CREATE TABLE products (
id INTEGER(11) AUTO_INCREMENT NOT NULL,
item_id INTEGER(10) NOT NULL,
product_name VARCHAR(30) NOT NULL,
department_name VARCHAR(30) NOT NULL,
price FLOAT(10,2) NOT NULL,
stock_quantity INTEGER(10) NOT NULL,
PRIMARY KEY (id)
);
SELECT * FROM products WHERE item_id = 1111;
SELECT * FROM products;

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (1111, "Canon AE-1", "Cameras", 199.99, 20) , (1211, "Nikon F3", "Cameras", 209.99, 10) , (1311, "Fuji X1", "Cameras", 579.99, 15) , (1411, "Polaroid SX-70", "Cameras", 159.99, 30) , (2111, "Kodak TMax 100", "Film", 5.99, 25) , (2211, "Fuji NeoPan", "Film", 8.99, 10) , (2311, "Ilford Delta 100", "Film", 7.99, 15) , (3211, "Energizer Batteries", "Accessories", 6.99, 25) , (3311, "Canned Air", "Accessories", 11.99, 34) , (3411, "Lens Filter", "Accessories", 55.99, 2)

