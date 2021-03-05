var express = require('express')
var bodyParser = require("body-parser")
var methodOverride = require("method-override");

var app = express()
var port = 3001
var router = express.Router();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

app.use(router);
router.get('/', function (req, res) {
  res.send("api running");
});

var auth = express.Router();
auth.route('/auth/login')
  .post((req, res) => {
    console.log('POST');
    console.log(req.body);
    if (req.body.user == "vvilelaj" &&
      req.body.pass == "vvilelaj")
      res.status(200).jsonp({ success: true });
    else
      res.status(403).jsonp({ success: false });
  });
app.use('/api', auth);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})