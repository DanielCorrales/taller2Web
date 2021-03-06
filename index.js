const MongoClient = require('mongodb').MongoClient
ObjectID = require('mongodb').ObjectID,
    express = require('express'),
    engines = require('consolidate');

var app = express(),
    db;

app.engine('hbs', engines.handlebars);

app.set('views', './views');
app.set('view engine', 'hbs');

app.use(express.static('public'));

// Conectarse a Base de Datos
MongoClient.connect('mongodb+srv://cluster0-pnvy4.mongodb.net/tienda', {

    auth: {
        user: 'Daniel',
        password: '3113269269d'
    }
}, function (err, client) {

    if (err) throw err;

    db = client.db('tienda');

    // Iniciar servidor
    app.listen(process.env.PORT || 5000);
    console.log("Escuchando servidor")
});

//Cargar paginas

app.get('/compra', (req, res) => {
    res.render('compra', {});
})

app.get('/checkout', (req, res) => {
    res.render('checkout', {});
})

app.get('/juego', (req, res) => {
    res.render('juego', {});
})

app.get('/', (req, res) => {

    var prod = db.collection('productos')
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
// obtiene nombre y manda a pagina compra
app.get('/compra/:nombre', (req, res) => {
    db.collection('productos').find({
        nombre: req.params.nombre
    }).toArray((err, result) => {
        res.render('compra', {
            jueguito: result[0]

        })
    })
});
//envia el arreglo a la pagina de checkout
app.get('/productosPorId', (req, res) => {
    var arreglo = req.query.id.split(',');
    arreglo = arreglo.map(function (id) {
        return new ObjectID(id);
    });
    var prod = db.collection('productos')
        .find({
            _id: {
                $in: arreglo
            }
        })
        .toArray((err, result) => {
            res.send(result);
        });
});