const express = require('express');
const cors = require('cors');
var mysql = require('mysql');
const app = express();
const PORT = 8080;

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3307,
  user: 'hokait',
  password: 'Blackpant4',
  database: 'learn_online'
});

connection.connect(error => {
    if (error) throw error;
    console.log('Database server running!');
});

app.use(express.json())

app.use(cors({
    origin: '*'
}));

app.listen(
    PORT,
    () => console.log(`it's alive on http://localhost:${PORT}`)
);

app.get('/cursos', (req, res) => {
    const sql = 'SELECT * FROM cursos';
    connection.query(sql, (error, results) => {
        if (error) throw error;
        if (results.length > 0) { res.json(results); } 
        else { res.send('Not result'); }
    });
});

app.post('/addcurso', (req, res) => {
    const sql = 'INSERT INTO cursos SET ?';
    const cursoObj = {
        id_instructor: req.body.id_instructor,
        duracion: req.body.duracion,
        hora: req.body.hora,
        dias: req.body.dias,
        nombre: req.body.nombre
    };
    connection.query(sql, cursoObj, error => {
        if (error) throw error;
        res.send('Curso created!');
    });
});
