const express = require("express");
const routes = express.Router();

const UserController = require('./controllers/UserController');
const ProductController = require('./controllers/ProductController');
const SessionController = require('./controllers/SessionController');

routes.post("/books", ProductController.create);
routes.get("/books", ProductController.index);
routes.get("/books/:id", ProductController.show);
routes.put("/books/:id/:userid", ProductController.update);
routes.delete("/books/:id", ProductController.destroy);

routes.post("/user", UserController.create);
routes.post("/sessions", SessionController.create);

module.exports = routes;