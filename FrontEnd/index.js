const clickear = () => {
  alert("Se realizo la carga");
};

const guardarProducto = () => {
  const btnsave = document.getElementById("btnSave");
  btnsave.addEventListener("click", clickear);
};

guardarProducto();

const mostrarProductos = (productos) => {
  console.log(productos);
  const busqueda = document.getElementById("productosBody");
  for (producto of productos) {
    busqueda.innerHTML += `<tr><td>
  ${producto.id}
</td>
<td>
  ${producto.nombre}
</td>
<td>
  ${producto.precio}
  </td>
  
<td><button class="btn btn-success"><i class="fas fa-edit"></i></button>
<button class="btn btn-danger"><i class="fas fa-trash-alt"></i></button></td>

  </tr>
`;
  }
};

const obtenerProductos = () => {
  const url = "http://localhost:10000/productos";

  fetch(url)
    .then((response) => response.json())
    .then((data) => mostrarProductos(data));
};

obtenerProductos();
