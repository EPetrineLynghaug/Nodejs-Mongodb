# Lecture Notes on MongoDB and  Node.js 

## Overview
These notes provide a comprehensive summary of key concepts and practical applications of Node.js and MongoDB as covered in the lecture on January 9. The notes are divided into sections for better readability and are accompanied by Markdown tables for quick reference.

---

## MongoDB

### Introduction
- **MongoDB**: A non-relational (NoSQL) database that stores data in collections instead of tables.
- Uses **BSON** format, similar to JSON.
- Collections and documents are loosely coupled, unlike relational databases.
- Ideal for applications using JavaScript due to similar data structures.

---

### Core Features of MongoDB
| Feature                   | Description                                                                 |
|---------------------------|-----------------------------------------------------------------------------|
| **Document Database**     | Stores data as BSON, providing JSON-like structure.                        |
| **Atlas**                 | Cloud-hosted database management platform.                                 |
| **Playground**            | Test environment integrated into VS Code, akin to Postman for MongoDB.     |
| **CRUD Operations**       | Create, Read, Update, Delete operations on documents.                      |
| **Aggregation Pipelines** | Advanced queries and data transformation processes.                        |

---

### Example Document Structure
```json
{
  "title": "Post Title 1",
  "body": "Body of post.",
  "category": "News",
  "likes": 1,
  "tags": ["news", "events"],
  "date": Date()
}
```

GPT Icon


### MongoDB Operations
*Basic Commands*
- `insertOne()`: Inserts a single document.
- `insertMany()`: Inserts multiple documents.
- `find()`: Finds one or more documents.
- `deleteOne()`: Deletes a single document.
- `deleteMany()`: Deletes multiple documents.
- `updateMany()`: Updates multiple documents.

*Query Operators*

- **Comparison Operators**:
  - `$eq`: Equal to
  - `$ne`: Not equal to
  - `$gt`: Greater than
  - `$gte`: Greater than or equal to
  - `$lt`: Less than
  - `$lte`: Less than or equal to
  - `$in`: Matches any value in an array

- **Logical Operators**:
  - `$and`: Both queries must match
  - `$or`: At least one query must match
  - `$nor`: Neither query matches
  - `$not`: Negates a query

- **Evaluation Operators**:
  - `$regex`: Performs a text search using regex
  - `$text`: Performs a text search
  - `$where`: Uses a JavaScript expression to match documents

### Aggregation Pipeline Example
Group total sales for each product by year:
```js
db.getCollection('sales').aggregate([
  { $match: { date: { $gte: new Date('2014-01-01'), $lt: new Date('2015-01-01') } } },
  { $group: { _id: '$item', totalSaleAmount: { $sum: { $multiply: ['$price', '$quantity'] } } } }
]);
```
### Node.js
Overview

Node.js: A runtime for building dynamic web pages and server-side applications.
Frequently used with Express.js.
Integrates seamlessly with MongoDB for CRUD operations.

### Features
- **Dynamic Pages**: Generates pages dynamically based on data or user input.
- **File System**: Provides tools for reading, writing, and managing files.
- **Modules**: Offers a rich library of reusable components.
- **Event-Driven**: Non-blocking, asynchronous architecture for better scaling.

### Example: Simple Web Server
```js
const http = require("http");
const url = require("url");

http.createServer(function (req, res) {
  res.writeHead(200, { "Content-Type": "text/html" });
  const q = url.parse(req.url, true).query;
  const txt = `${q.year} ${q.month}`;
  res.end(txt);
}).listen(8080);
```

### File System Operations

* 404 Error Handling: Returns "Not Found" for non-existent files.
* Dynamic Routing: Uses file names and query strings to serve pages dynamically.

### Practical Notes

* Use MongoDB Atlas for easy database hosting and management.
* Leverage VS Code Playground for testing and experimenting with MongoDB queries.
* Combine Node.js and MongoDB for seamless application development.

<details> <summary><strong>References</strong></summary> - [MongoDB Documentation](https://www.mongodb.com/docs/) - [Node.js Modules](https://www.w3schools.com/nodejs/ref_modules.asp) </details> ```