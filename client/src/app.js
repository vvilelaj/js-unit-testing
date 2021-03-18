const express = require('express')
const app = express()
const port = 3000

app.use('/assets', express.static(__dirname + '/assets'));
app.use('/home', express.static(__dirname +'/home'));
app.use('/auth', express.static(__dirname +'/auth'));
app.use('/register', express.static(__dirname +'/register'));

app.get('/', (req, res) => {
  res.redirect('/home');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})