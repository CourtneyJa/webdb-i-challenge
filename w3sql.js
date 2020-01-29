//sql practice queries

//1) SELECT * FROM [Customers] WHERE PostalCode = 1010;
//2) SELECT Phone FROM [Suppliers] WHERE SupplierID = 11;
//3) SELECT * FROM [Orders] ORDER BY OrderDate desc LIMIT 10;
//4) SELECT * FROM [Customers] WHERE City = 'London' or City = 'Madrid' or Country = 'Brazil';
//5)Insert into [Customers] (CustomerName, ContactName, Address, City, PostalCode, Country) values ('The Shire', 'Bilbo Baggins', '1 Hobbit-Hole', 'Bag End', '111', 'Middle Earth');
//6) Update [Customers] set PostalCode = 11122 WHERE CustomerID = 92;
//stretch
//7) SELECT DISTINCT City FROM [Customers];
//8) SELECT SupplierName FROM [Suppliers] WHERE LENGTH(SupplierName) > 20;