var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 8080));

app.use(express.static(__dirname + '/public'));



app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/home/names', function (req, res) {
  res.json([
    { id: 1, name: 'Guilherme', age: 23, address: 'Av Moises Antonio, 975' },
    { id: 2, name: 'Auro', age: 21, address: 'Av Morumbi Lopes, 975' },
    { id: 3, name: 'Daniela', age: 27, address: 'Av Teste 1 , 975' },
    { id: 4, name: 'Felipe', age: 25, address: 'Av Teste 2' },
    { id: 5, name: 'Jéssica', age: 25, address: 'Av Teste 3' },
    { id: 6, name: 'Teste', age: 100, address: 'Av Teste 4' },
    { id: 7, name: 'Maylon', age: 10, address: 'Av Teste 5' },
    { id: 9, name: 'Haha', age: 13, address: 'Av Teste 6' },
    { id: 10, name: 'Maroto', age: 53, address: 'Av Teste 7' }
  ]);
});

app.listen(app.get('port'), function () {
  console.log('Node app is running on port', app.get('port'));
});