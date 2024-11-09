const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'dist/pwa-angular2')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/pwa-angular2/index.html'));
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT}`);
});
