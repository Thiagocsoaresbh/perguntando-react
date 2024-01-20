const express = require(express);
const path = require(path);
const sqlite3 = require(sqlite3).verbose();

const app = express();
const port = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, 'build')));

const db = new sqlite3.Database('mydatabase.db');

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});