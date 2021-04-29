var webshot = require("webshot");
var fs = require("fs");

const cepParaConsulta = "91827";
const cepData = {
  logradouro: "Rua das Camélias",
  complemento: "Nenhum",
  bairro: "Butantã",
  localidade: "São Paulo",
  uf: "SP",
};
console.log("início");

webshot(
  `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charSet="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="Iago, and Bootstrap contributors">
    <meta name="generator" content="WebStorm">
    <title>Converter HTML para Imagem</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf"
            crossorigin="anonymous"></script>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet">
</head>
<body>
<nav class="navbar navbar-light bg-light">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">
            <img src="https://img2.gratispng.com/20180920/foe/kisspng-banco-ita-logo-bank-unibanco-itau-usa-asset-mana-ita-logo-full-hd-pictures-5ba37dead3d634.0284768915374412588677.jpg" alt="" width="30" height="24"
                 class="d-inline-block align-text-top">
            Itaú - Consulta CEP
        </a>
    </div>
</nav>
<div class="container">
<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Consulta de CEP</h5>
    <h6 class="card-subtitle mb-2 text-muted">CEP consultado: ${cepParaConsulta}</h6>
    <div class="card-text">
        <div class="form-floating mb-3">
          <input type="text" class="form-control" id="logradouro" placeholder="Rua Dois de Setembro" value="${cepData.logradouro}">
          <label for="logradouro">Logradouro</label>
        </div>
        <div class="form-floating mb-3">
          <input type="text" class="form-control" id="complemento" placeholder="Casa" value="${cepData.complemento}">
          <label for="complemento">Complemento</label>
        </div>
        <div class="form-floating mb-3">
          <input type="text" class="form-control" id="bairro" placeholder="Sapopemba" value="${cepData.bairro}">
          <label for="bairro">Bairro</label>
        </div>
        <div class="form-floating mb-3">
          <input type="text" class="form-control" id="cidade" placeholder="São Paulo" value="${cepData.localidade}">
          <label for="cidade">Cidade</label>
        </div>
        <div class="form-floating mb-3">
          <input type="text" class="form-control" id="estado" placeholder="SP" value="${cepData.uf}">
          <label for="estado">Estado</label>
        </div>
        <div class="form-floating mb-3">
          <input type="text" class="form-control" id="estado" placeholder="SP" value="${cepData.uf}">
          <label for="estado">Estado</label>
        </div>
        <div class="form-floating mb-3">
          <input type="text" class="form-control" id="estado" placeholder="SP" value="${cepData.uf}">
          <label for="estado">Estado</label>
        </div>
        <div class="form-floating mb-3">
          <input type="text" class="form-control" id="estado" placeholder="SP" value="${cepData.uf}">
          <label for="estado">Estado</label>
        </div>
    </div>
  </div>
</div>
</div>
</body>
</html>
`,
  "hello_world.png",
  { siteType: "html" },
  function (err) {
    // screenshot now saved to hello_world.png
    var bitmap = fs.readFileSync("./hello_world.png");
    const imageString = new Buffer(bitmap).toString("base64");
    console.log("===============");
    console.log(imageString);
    console.log("===============");
    const ws = fs.createWriteStream("texto.txt");
    ws.write(imageString);
    ws.close();
    console.log("fim");
  }
);
