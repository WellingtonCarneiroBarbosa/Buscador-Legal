const readLine = require('readline-sync')
    /**
     * Inclui a biblioteca de leitura de inputs
     */

/**
 * Cria um objeto que recebe a função no arquivo
 * robots/texto.js
 */
const robos = {
    texto: require('./robots/texto.js')
}

/**
 * Cria a função global
 */
function bora() {
    /**
     * Cria um objeto que vai conter
     * todo o conteúdo da pesquisa
     */
    const conteudo = {}

    /**
     * Injeta no objeto as propriedades digitadas
     * pelo input do usuário
     */
    conteudo.termoDeBusca = pergunteERetorneOTermoDeBusca()
    conteudo.prefixoDeBusca = pergunteERetorneOPrefixoDeBusca()
    conteudo.termoBuscado = juntandoTudo()
        /**
         * Coloca na função declarada
         * em robos/texto.js o conteudo
         */
    robos.texto(conteudo)

    /**
     * Funções que contém as instruções
     * de input
     */
    function pergunteERetorneOTermoDeBusca() {
        return readLine.question('ATENCAO!! \nSe o APP fechar sozinho, significa que\nnenhum conteudo foi encontrado...Voce pode tentar outro termo de pesuisa\n\nQual eh o termo de busca desejado?\nR:')
    }

    function pergunteERetorneOPrefixoDeBusca() {
        const prefixos = ['O que é', 'Quem é', 'A historia de', 'Quem criou']
        const prefixoSelecionado = readLine.keyInSelect(prefixos, 'Selecione um prefixo de busca \n ')
        const textoDoPrefixoSelecionado = prefixos[prefixoSelecionado]
        return textoDoPrefixoSelecionado
    }

    function juntandoTudo() {
        return conteudo.prefixoDeBusca + " " + conteudo.termoDeBusca
    }
    /**
     * Exibe o resultado final
     * do objeto 
     */
    console.log(conteudo)
    console.log('Aguarde... buscando conteúdo');

    process.stdin.setRawMode(true);
    process.stdin.resume();
    process.stdin.on('data', process.exit.bind(process, 0));
}
/**
 * Chama a função global
 */
bora();