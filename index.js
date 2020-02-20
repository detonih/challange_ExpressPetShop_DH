const express = require('express');
const app = express();
const petRoute = require('./routes/pet');

app.use(petRoute)

app.listen(3000, () => {
    console.log("Rodando")
})