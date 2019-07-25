const express = require("express");
const routes = express.Router();

const UserController = require('./controllers/UserController');
const ProductController = require('./controllers/ProductController');

routes.post("/books", ProductController.create);
routes.get("/books", ProductController.index);
routes.get("/books/:id", ProductController.show);
routes.put("/books/:id/:userid", ProductController.update);
routes.delete("/books/:id", ProductController.destroy);

routes.post("/user", UserController.create);
routes.get("/user", UserController.index);
// routes.get("/user/:id", UserController.show);
// routes.put("/user/:id", UserController.update);
// routes.delete("/user/:id", UserController.destroy);

module.exports = routes;