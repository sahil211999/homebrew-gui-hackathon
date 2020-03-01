const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT || 5000

const { spawn } = require('child_process')
const ls = spawn('brew', ['list'])

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

app.use(express.static(path.join(__dirname, 'build')));


ls.stdout.on('data', (data) => {
  let installed_packages = data.toString()
  app.get('/installed/', function(req, res) {
    res.send({
      'installed_packages': installed_packages
    });
  })

});

//start server
app.listen(port, (req, res) => {
  console.log( `server listening on port: ${port}`);
})
