const express = require('express');
const app = express();
app.use(express.json());

let starters = [
    { 
        "id": 1,
        "name": 'Bulbasaur',
        "type": 'Grass',
        "photo": 'assets/images/bulbasaur.png', 
    },
    { 
        "id": 2, 
        "name": 'Charmander', 
        "type": 'Fire',
        "photo": 'assets/images/charmander.jpg',
    },
    { 
        "id": 3, 
        "name": 'Squirtle', 
        "type": 'Water',
        "photo": 'assets/images/squirtle.jng', 
    },
];

app.get('/', (req, res) => {
    res.send('<h1>The Starter Pokemon!</h1>');
});
app.get('/api/starters', (req, res) => {
    res.json(starters);
});


const PORT = 3001;

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});