const express = require('express')
const app = express();

const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 300;

app.use( express.static( __dirname + '/public' ) );

// Express - HBS engine
hbs.registerPartials( __dirname + '/views/parciales' );
app.set('view engine', 'hbs');



app.get('/', function (req, res) {

    res.render('home', {
        nombre: 'Edy'
    });
});

app.get('/about', function (req, res) {

    res.render('about', {
        nombre: 'Edy'
    });
});

app.get('/data', (req, res) => {
    res.send('Hola');
})
 
app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}.`)
})