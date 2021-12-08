const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/productos", (req, res) => {
  const productos = [
    { id: 1, nombre: "Monitor", precio: 38000 },
    { id: 5, nombre: "Mouse", precio: 5600 },
    { id: 8, nombre: "Teclado", precio: 7800 },
    { id: 15, nombre: "Impresora", precio: 45000 },
  ];

  res.json(productos);
});

app.get("/productos/:id", (req, res) => {
  const idBuscado = req.params.id;

  const usuarioEncontrado = productos.find(
    (producto) => producto.id === parseInt(idBuscado)
  );
  res.json(usuarioEncontrado);
});

app.post("/productos", (req, res) => {
  res.json({ message: `Producto actualizado` });
});

app.put("/productos/:id", (req, res) => {
  const idBuscado = req.params.id;
  res.json({ message: `El id buscado es:${idBuscado}` });
});

app.delete("/productos/:id", (req, res) => {
  const idBuscado = req.params.id;
  res.json({ message: `El id eliminado es:${idBuscado}` });
});

app.listen(10000);
