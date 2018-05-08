const MongoClient = require('mongodb').MongoClient,
    express = require('express'),
    engines = require('consolidate');

var app = express(),
    db;

app.engine('hbs', engines.handlebars);

app.set('views', './views');
app.set('view engine', 'hbs');

app.use(express.static('public'));

// Conectarse a Base de Datos
MongoClient.connect('mongodb://localhost:27017', function (err, client) {
    if (err) throw err;

    db = client.db('juegos');

    // Iniciar servidor
    app.listen(5000);
    console.log("Escuchando servidor")
});

// Iniciar servidor
/*app.listen(5000);
console.log("Escuchando servidor")*/

/*Esta parte es para cargar las paginas*/


app.get('/compra', (req, res) => {
    res.render('compra', {});
})

app.get('/checkout', (req, res) => {
    res.render('checkout', {});
})

app.get('/', (req, res) => {
    /*db.collection('productos')
        .find()
        .toArray((err, result) => {
            res.render('index', {
                productos: result
            });
        })*/

    var prod = db.collection('juegos') 
        .find();

    if (req.query.categoria)
        prod.filter({
            categoria: req.query.categoria
        });
        
    if (req.query.min)
        prod.filter({
            precio: {
                $gte: parseInt(req.query.min)
            }
        });

        if (req.query.minUno)
        prod.filter({
            estreno: {
                $gte: parseInt(req.query.minUno)
            }
        });

    prod.toArray((err, result) => {
        console.log(result);
        res.render('index', {
            juego: result
        });
    })
});


app.get('/contact', (req, res) => {
    res.render('contact', {});
})

/*Preguntar para que es esto*/
app.get('/producto/:id', (req, res) => {
    db.collection('libros').find({
        modelo: req.params.id
    }).toArray((err, result) => res.send(result))
})