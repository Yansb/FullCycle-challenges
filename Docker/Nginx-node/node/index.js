const express = require('express');
const app = express();
const port = 3000;
const config = {
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb'
}
const mysql = require('mysql');
const connection = mysql.createConnection(config);

const sql = `INSERT INTO people(name) values('Yan')`;
connection.query(sql)
connection.end()

app.get('/', async (req, res) => {
  const newConnection = mysql.createConnection(config)
  newConnection.query('SELECT * FROM people', (err, response) => {
    res.send(`<h1>Full Cycle Rocks</h1> <br> <h2>${response.map(user => `${user.name}`)}</h2>`)});
  
  newConnection.end()
})

app.listen(port, () => {
  console.log('Rodando na porta ' + port)
})