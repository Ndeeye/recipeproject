const mongoose = require("mongoose");
const express = require('express');
const bodyParser = require("body-parser");
const dotenv = require('dotenv')
const category = require('./models/category');
const comment = require('./models/comment');
const ingredient = require('./models/ingredient');
const membre = require('./models/membre');
const ingredientRecipe = require('./models/ingredientRecipe');
const recipe = require('./models/recipe');
const membreRoutes = require('./routes/membreRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const commentRoutes = require('./routes/commentRoutes');
const recipeRoutes = require('./routes/recipeRoutes');
const ingredientRoutes = require('./routes/ingredientRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

dotenv.config()

app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))

app.use(express.json());
app.use('/members', membreRoutes);
app.use('/categories', categoryRoutes);
app.use('/comments', commentRoutes);
app.use('/recipes', recipeRoutes);
app.use('/ingredients', ingredientRoutes);

app.get('/', (req, res) => {
    res.send("Server OK")
})

mongoose.connect(process.env.MONGODB_CONNECTION_STRING)
.then(() => {
    console.log('Connexion réussie');
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
})
.catch((err) => {
    console.error('Connexion échouée:', err);
    process.exit(1); // Sortie du processus avec un code d'échec
});