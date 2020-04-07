const http = require('http');

http.createServer((req, res) => {

    res.writeHead(200, {'Content-Type': 'application/json'});

    let salida = {
        nombre: 'edu',
        edad: 21,
        url: req.url
    }
    // res.write('Hola Mundo');
    res.write(JSON.stringify(salida));
    res.end();
})
.listen(8080);

console.log('Escuchando en purto 8080');