const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const dbConfig = require('./db/db')
const app = express();
const api = require('./controllers/userroutes')

mongoose.Promise = global.Promise
mongoose.connect(dbConfig.db, {
    useNewUrlParser: true
}).then(() => {
    console.log('Database has been connected')
},
error => {
    console.log('Database could not be connected: ' + error)
    }
)

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cors());

app.use('/public', express.static('public'));
app.use('/api', api);

const PORT = process.env.PORT || 4000;

const server = app.listen(PORT, () => {
    console.log('connected to port ' + PORT)
})

app.use((req, res, next) => {
    setImmediate(()=> {
        next(new Error('Error occurred'))
    })
});

app.use(function(err, req, res, next) {
    console.error(err.message);
    if(!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message)
})