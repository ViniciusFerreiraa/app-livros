const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const requireDir = require("require-dir");

// Iniciando o APP
const app = express();
app.use(express.json());
app.use(cors());

// Iniciando o DB
mongoose.connect(
    "mongodb://localhost:27017/app-livros",
    { useNewUrlParser: true }
);
requireDir("./src/models/");

// Rotas
const Product = mongoose.model('Product');

app.get("/", (req, res) => {
    Product.create({
        title: "React Js",
        description: "Aplicativo em react",
        rented: false,
        rentedBy: "noone"
    });
})

app.use("/api", require("./src/routes"));

app.listen(3001);