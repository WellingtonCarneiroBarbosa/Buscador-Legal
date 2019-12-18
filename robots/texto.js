const Algorithmia = require("algorithmia");

function robo(conteudo) {
    baixaConteudoDaWikipedia(conteudo)

    function baixaConteudoDaWikipedia(conteudo) {
        var input = {
            "articleName": conteudo.termoBuscado,
            "lang": "pt"
        };

        Algorithmia.client("AQUI VAI SUA CHAVE DE UTILIZAÇÃO")
            .algo("web/WikipediaParser/0.1.2?timeout=300") // timeout is optional
            .pipe(input)
            .then(function(response) {
                console.log(response.get());
            });
    }
}

module.exports = robo