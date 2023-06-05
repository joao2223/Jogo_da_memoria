const escolhe_imagem = document.querySelectorAll('.imagem_tamanho');
const imagem_interrogacao = "/images/interrogacao.svg"
let imagens = ["/images/olho.svg", "/images/boneco.svg", "/images/abobora.svg", "/images/espantalho.svg", "/images/bruxa.svg", "/images/livro.svg", "/images/dracula.svg", "/images/zumbi.svg", "/images/chapeu.svg", "/images/olho.svg", "/images/boneco.svg", "/images/abobora.svg", "/images/espantalho.svg", "/images/bruxa.svg", "/images/livro.svg", "/images/dracula.svg", "/images/zumbi.svg", "/images/chapeu.svg"]
const imagens_embaralhadas = embaralhar(imagens)
let imagens_clicadas = []
let imagens_encontradas = []
let cont = 0


function embaralhar(lista_imagens) {
    lista_imagens.forEach((_, i) => {
        const j = Math.floor(Math.random() * (i + 1));
        [lista_imagens[i], lista_imagens[j]] = [lista_imagens[j], lista_imagens[i]];
    });
    return lista_imagens;
}

escolhe_imagem.forEach((imagem, index) => {
    imagem.onclick = function () {
        imagem.src = imagens_embaralhadas[index];
        imagens_clicadas.push(imagem.src);
        cont = cont + 1;
        if (cont == 2) {
            if (imagens_clicadas[0] == imagens_clicadas[1]) {
                imagens_encontradas.push(imagens_clicadas[0]);
                console.log(imagens_encontradas);
            }
            setTimeout(function () {
                imagens_clicadas = [];
                cont = 0;
                escolhe_imagem.forEach((imagem) => {
                    let encontrada = false;
                    for (let i = 0; i < imagens_encontradas.length; i++) {
                        if (imagem.src == imagens_encontradas[i]) {
                            encontrada = true;
                            break;
                        }
                    }
                    if (!encontrada) {
                        imagem.src = imagem_interrogacao;
                    }
                });
            }, 1000); 
        }
    };
});