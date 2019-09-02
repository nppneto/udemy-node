var express = require('express');
var path = require('path');
var app = express();

const port = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './src/views/'));

app.get('/', (req, res) => {
    res.render("secao/tecnologia");
});

app.get('/tecnologia', (req, res) => {
    res.send("<html><body>Notícias de Tecnologia</body></html>")
});

app.listen(port, () => {
    console.log(`Escutando na porta ${port}...`);
});
