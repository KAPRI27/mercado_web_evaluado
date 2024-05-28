const express = require('express');
const { engine } = require('express-handlebars');
const path = require('path');

const app = express();

// Configurar Handlebars como el motor de vistas
app.engine('handlebars', engine({
  defaultLayout: 'main',
  layoutsDir: path.join(__dirname, 'views', 'layouts'),
  partialsDir: path.join(__dirname, 'views', 'partials')
}));


app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));
// Datos de ejemplo
const productos = ['Producto 1', 'Producto 2', 'Producto 3'];

// Ruta raíz
app.get('/', (req, res) => {
  res.render('home', { productos });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
