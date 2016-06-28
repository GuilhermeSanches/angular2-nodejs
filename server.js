var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 8080));

app.use(express.static(__dirname + '/public'));



app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/home/names', function (req, res) {
  res.json([
    { id: 1, name: 'Guilherme' },
    { id: 2, name: 'Auro' },
    { id: 3, name: 'Daniela' },
    { id: 4, name: 'Felipe' },
    { id: 5, name: 'Jéssica' },
    { id: 6, name: 'Teste' },
    { id: 7, name: 'Maylon' },
    { id: 8, name: 'Daniely' },
    { id: 9, name: 'Haha' },
    { id: 10, name:'Maroto' }
  ]);
})

app.listen(app.get('port'), function () {
  console.log('Node app is running on port', app.get('port'));
});