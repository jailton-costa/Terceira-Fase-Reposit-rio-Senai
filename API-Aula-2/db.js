//função de conexao com banco de dados
async function connect() {
    const { Pool } = require("pg")
    const pool = new Pool({ 
        connectonString: process.env.CONNECT_STRING
    })
    const client = await pool.connect();
    console.timeLog("criou o Pool de conexao")
}