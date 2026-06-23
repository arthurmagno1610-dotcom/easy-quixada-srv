const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  host: "dpg-d8ssa1e8bjmc73e0pf6g-a" || process.env.DB_HOST,
  port: "5432" || process.env.DB_PORT,
  user: "easyquixada_user" || process.env.DB_USER,
  password: "xvgaHcgNGVWJvqDlVILINyFzLFwDWLSW" || process.env.DB_PASSWORD,
  database: "easyquixada" || process.env.DB_NAME,
  connectionTimeoutMillis: 5000,
});

pool
  .connect()
  .then((client) => {
    console.log("Banco PostgreSQL conectado com sucesso!");
    client.release();
  })
  .catch((erro) => console.error("Erro ao conectar no banco:", erro.message));

module.exports = pool;
