# node-server

## Installation

1. Clone the repository:

```
git clone <repository-url>
```

2. Open Windows cmd in the project directory


3. Run the application:

```
npm start
```

4. The Server is ready for requests now :)

## Usage

The system exposes a REST API:

- create a new product:
```
POST /product
```
- get a specific product by ID
```
GET /product/{id}
```
- get all products
```
GET /products
```
- update a product
```
PUT /product/{id}
```
- delete a product
```
DELETE /product/{id}
```

