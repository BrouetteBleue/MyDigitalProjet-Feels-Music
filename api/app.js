const express = require('express'); 
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(bodyParser.json());

const corsOptions = {
  origin: 'http://localhost:3000', // ou mettez votre domaine de production si nécessaire
  credentials: true, // cela permet d'envoyer des cookies
};
app.use(cors(corsOptions));

const categoriesRoute = require('./src/routes/categoryRoute');
categoriesRoute(app);

const accountRoute = require('./src/routes/accountRoute');
accountRoute(app);

const productionRoute = require('./src/routes/prodRoute');
productionRoute(app);

const likeRoute = require('./src/routes/likeRoute');
likeRoute(app);

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