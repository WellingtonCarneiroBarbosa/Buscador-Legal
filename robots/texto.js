const Algorithmia = require("algorithmia");

function robo(conteudo) {
    baixaConteudoDaWikipedia(conteudo)

    function baixaConteudoDaWikipedia(conteudo) {
        var input = {
            "articleName": conteudo.termoBuscado,
            "lang": "pt"
        };

        Algorithmia.client("simcK/8SxR7W6uhWFhM6b45YMlQ1")
            .algo("web/WikipediaParser/0.1.2?timeout=300") // timeout is optional
            .pipe(input)
            .then(function(response) {
                console.log(response.get());
            });
    }
}

module.exports = robo