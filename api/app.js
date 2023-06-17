const express = require('express'); 
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(bodyParser.json());

app.use(cors({
    origin: 'http://localhost:3000' // Remplacez ceci par l'URL de votre front-end
  }));


const categoriesRoute = require('./src/routes/categoryRoute');
categoriesRoute(app);

const accountRoute = require('./src/routes/accountRoute');
accountRoute(app);

app.get('/test', (req, res) => {
  res.send('Hello, World!');
});

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`); 
});

// Gestionnaire d'erreurs
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
  });