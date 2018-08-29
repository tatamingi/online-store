const express = require('express')
const csp = require('express-csp-header');
const path = require("path");
const cors = require("cors");
var fs = require('fs');
var bodyParser = require('body-parser');


const app = express();

app.use(bodyParser.json());

app.use(cors({origin: 'http://localhost:3000'}));

app.use(express.static(__dirname + '/dist/online-store'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/online-store', '/index.html'));
});

app.post('/checkout', function (req, res) {
    fs.writeFile ("summary.json", JSON.stringify(req.body), function(err) {
            if (err) throw err;
            console.log('complete');
            res.send('complete')
        }
    );
});

app.listen(3000, function() { console.log('listening on port 3000') })