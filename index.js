// Carregar o módulo do express
// quando carregar módulos, faça associado a uma
// constante para evitar a alteração
// de conteudo e assim evitar erros de execução

const express = require("express");

const app = express();

//O módulo body-parser nos ajuda a capturar os dados
//que virão no corpo de solicitação e realiza
//sua conversão para JSON.
//Assim podemos manipular os dados
const bodyParser = require("body-parser");

//Vamos usar o body-parser
app.use(bodyParser);
app.post("/dados",bodyParser, (req,res) => );
    res.send(req,body);
});

// Vamos iniciar os exemplos
// de utilização de verbos HTTP

// GET
// Quando o meu usuario deseja obter
// algum dado do servidor.
app.get("/dados", (req, res) => {
  res.send("Você está no verbo GET");
});

//POST
// Utilizado quando o meu usuario envia algo
// ao servidor com intuito de cadastrar ou
// realizar autenticação
app.post("/dados", (req, res) => {
  res.send("req.body");
});

//PUT
//Utilizado quando o usuario deseja realizar
//uma atualização nos dados
app.put("/dados", (req, res) => {
  res.send("Você esta no verbo PUT");
});
//DELETE
//Utilizado quando usuario deseja apagar
//algum dado
app.delete("/dados", (req, res) => {
  res.send("Você esta no verbo DELETE");
});

app.listen(3000);
console.log("Servidor online...");
