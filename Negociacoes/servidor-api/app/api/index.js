/* Código simplório, apenas para fornecer o serviço para a aplicação */
var api = {};

api.dados = function (req, res) {
  res.json([
    { montante: 200, vezes: 2 },
    { montante: 100, vezes: 5 },
    { montante: 50, vezes: 1 },
    { montante: 70, vezes: 2 },
  ]);
};

module.exports = api;
