const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT || 5000

const { exec, spawn } = require('child_process')
let ls = spawn('brew', ['list'])

let bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

app.use(express.static(path.join(__dirname, 'build')));


ls.stdout.on('data', (data) => {
  let installed_packages = data.toString().split('\n')
  app.get('/installed/', (req, res) => {
    console.log(installed_packages)
    res.send({
      'installed_packages': installed_packages
    });
  })
})

app.post('/download/', (req, res) => {
  let packagesToInstall = req.body
  console.log(packagesToInstall)
  packagesToInstallList = '' 
  packagesToInstall.map((p) => {
    packagesToInstallList += p.name
    packagesToInstallList += ' '
  })

  let installed = []
  let failInstalled = []
  exec('brew install ' + packagesToInstallList, (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      res.send({
        'error': error
      })
      return;
    }
    console.log(`stdout: ${stdout}`)
    console.error(`stderr: ${stderr}`)

    ls = spawn('brew', ['list'])
    ls.stdout.on('data', (data) => {
      installed = data.toString().split('\n')
      // console.log(installed)

      res.send({
        'stdout': stdout,
        'stderr': stderr,
        'status': 'success',
        'installed': installed
      })
    })
  })
})


//start server
app.listen(port, (req, res) => {
  console.log( `server listening on port: ${port}`);
})
