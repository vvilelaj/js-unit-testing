var express = require('express')
var bodyParser = require("body-parser")
var methodOverride = require("method-override");
var cors = require('cors')

var app = express()
var port = 3001
var router = express.Router();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(cors());

app.use(router);
router.get('/', function (req, res) {
  res.send("api running");
});

var auth = express.Router();
auth.route('/auth/login')
  .post((req, res) => {
    console.log('POST');
    console.log(req.body);
    if (req.body.username == "vvilelaj" &&
      req.body.password == "vvilelaj")
      res.status(200).jsonp({ success: true, data: {} });
    else
      res.status(403).jsonp({ success: false, message: 'invalid credentials' });
  });
app.use('/api', auth);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})