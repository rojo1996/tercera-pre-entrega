const repuestos = [
  { nombre: 'Motor Diesel', categoria: 'Motor', precio: 5000 },
  { nombre: 'Neumático Gigante', categoria: 'Neumático', precio: 1000 },
  { nombre: 'Filtro de Aceite', categoria: 'Filtro', precio: 50 },
  { nombre: 'filtro de aire', categoria: 'Filtro', precio: 48 },
  { nombre: 'circulina', categoria: 'Otro', precio: 70 },
];

function filtrarRepuestos() {
  const categoriaUsuario = prompt('Ingrese la categoría de repuestos a mostrar:');

  if (categoriaUsuario) {
    const resultado = repuestos.filter(repuesto =>
      repuesto.categoria.toLowerCase() === categoriaUsuario.toLowerCase()
    );

    if (resultado.length > 0) {
      alert('Repuestos encontrados:\n' +
        resultado.map(repuesto => `${repuesto.nombre} - $${repuesto.precio}`).join('\n'));
    } else {
      alert('No se encontraron repuestos para la categoría ingresada.');
    }
  } else {
    alert('Entrada inválida. Por favor, ingrese una categoría.');
  }
}

function agregarRepuesto() {
  const nombreUsuario = prompt('Ingrese el nombre del repuesto:');
  const categoriaUsuario = prompt('Ingrese la categoría del repuesto:');
  const precioUsuario = prompt('Ingrese el precio del repuesto:');

  if (nombreUsuario && categoriaUsuario && precioUsuario) {
    repuestos.push({
      nombre: nombreUsuario,
      categoria: categoriaUsuario,
      precio: parseFloat(precioUsuario),
    });

    alert('Repuesto agregado exitosamente.');
  } else {
    alert('Entrada inválida. Por favor, complete todos los campos.');
  }
}

function buscarRepuestos() {
  const busqueda = prompt('Ingrese el nombre del repuesto que desea buscar:');

  if (busqueda) {
    const resultado = repuestos.filter(repuesto =>
      repuesto.nombre.toLowerCase().includes(busqueda.toLowerCase())
    );

    if (resultado.length > 0) {
      alert('Repuestos encontrados:\n' +
        resultado.map(repuesto => `${repuesto.nombre} - $${repuesto.precio}`).join('\n'));
    } else {
      alert('No se encontraron repuestos para la búsqueda ingresada.');
    }
  } else {
    alert('Entrada inválida. Por favor, ingrese un nombre de repuesto.');
  }
}
