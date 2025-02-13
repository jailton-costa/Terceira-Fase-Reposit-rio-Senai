const bodyParser = require("body-parser");
const express = require("express");

// Inicializa o app
const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Lista de tarefas
let tarefas = [
    {id: 1, descricao: "Estudar NodeJs"},
    {id: 2, descricao: "Criar API com Express"}
];

// Rota GET para listar todas as tarefas
app.get('/tarefas', (req, res) => {
    res.json(tarefas); // Retorna a lista de tarefas
});

// Rota POST para criar uma nova tarefa
app.post('/tarefas', (req, res) => {
    const { descricao } = req.body; // Captura a descrição da nova tarefa

    if (!descricao) {
        return res.status(400).json({ message: "A descrição da tarefa é obrigatória!" });
    }

    // Cria a nova tarefa com um id único
    const novaTarefa = {
        id: tarefas.length + 1, // Gerando um novo id baseado no comprimento da lista
        descricao: descricao
    };

    // Adiciona a nova tarefa na lista
    tarefas.push(novaTarefa);

    // Retorna a tarefa criada
    res.status(201).json(novaTarefa);
});

// Rota PUT para editar uma tarefa
app.put('/tarefas/:id', (req, res) => {
    const { id } = req.params;
    const { descricao } = req.body;
    
    const tarefa = tarefas.find(t => t.id == id);

    if (!tarefa) {
        return res.status(404).json({ message: "Tarefa não encontrada!" });
    }

    tarefa.descricao = descricao;
    res.json(tarefa);
});

// Rota DELETE para excluir uma tarefa
app.delete('/tarefas/:id', (req, res) => {
    const { id } = req.params;

    const index = tarefas.findIndex(t => t.id == id);

    if (index === -1) {
        return res.status(404).json({ message: "Tarefa não encontrada!" });
    }

    tarefas.splice(index, 1);
    res.status(200).json({ message: "Tarefa excluída com sucesso!" });
});

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});


//comandos usados: npm init -y / npm i express / npm i body-parser ;