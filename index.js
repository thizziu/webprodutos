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
app.use(bodyParser.json());

// Vamos iniciar os exemplos
// de utilização de verbos HTTP

var layout = [
  {
    header: "loja de produtos",
    navegacao: "listar, cadastrar, atualizar, deletar",
    main: "pagina do corpo",
    footer: "Av. João Paulo, 45, Vila Nova - São Paulo - SP",
  },
];

// GET
// Quando o meu usuario deseja obter
// algum dado do servidor.
app.get("/listar", (req, res) => {
  layout[0].main = [
    {
      nome: "Calça",
      descricao: "Jeans",
      preco: "R$ 150",
      imagem:
        "https://s.modab.com.br/catalog/product/cache/1/small_image/600x900/9df78eab33525d08d6e5fb8d27136e95/c/a/calca-jeans-modeladora-mega-bubum-03.jpg",
    },

    {
      nome: "Blusa",
      descricao: "Branca",
      preco: "R$ 50",
      imagem:
        " https://images.tcdn.com.br/img/img_prod/698668/blusa_pkd_manga_curta_com_gola_branca_607_1_20190621140744.jpg ",
    },

    {
      nome: "Tenis",
      descricao: "Nike",
      preco: "R$ 400",
      imagem:
        "https://artwalk.vteximg.com.br/arquivos/ids/214041-1000-1000/Tenis-Nike-Air-Force-1-07-Masculino-Branco.jpg?v=636975787616830000",
    },
  ];
  res.send(layout);
});

//POST
// Utilizado quando o meu usuario envia algo
// ao servidor com intuito de cadastrar ou
// realizar autenticação
app.post("/dados", (req, res) => {
  res.send(req.body);
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
