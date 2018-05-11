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

/*Cargar paginas*/

app.get('/compra', (req, res) => {
    res.render('compra', {});
})

app.get('/checkout', (req, res) => {
    res.render('checkout', {});
})

app.get('/', (req, res) => {

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

app.get('/compra/:nombre', (req, res) => {
    db.collection('juegos').find({
        nombre: req.params.nombre
    }).toArray((err, result) => {
        res.render('compra', {
            jueguito: result[0]

        })
    })
});

app.get('/productosPorId', (req, res) => {
    var arreglo = req.query.id.split(',');
    arreglo = arreglo.map(function(id) {
        return new ObjectID(id);
    });
    var prod = db.collection('juegos')
        .find({ _id: { $in: arreglo } })
        .toArray((err, result) => {
            res.send(result);
        });
});