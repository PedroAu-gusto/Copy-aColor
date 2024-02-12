// FEITO POR PEDRO AUGUSTO FERREIRA CARDOSO
    
    function codeCor() {
        var cor = document.getElementById("corzinha").value;
        var texto = document.getElementById("code");

        texto.value = cor;

        console.log(cor)
        console.log(texto)
    };
    var a = "Feito por:"
    function mudarCor() {

        copiarTexto()

        var main = document.getElementById("main");
        var cor = document.getElementById("corzinha").value;
        var code = document.getElementById("code");
        var tudo = document.body;
        var titulo = document.querySelector("header");
        var botao = document.getElementById("botao");
        var corOff = invertColor(cor);

        //botao.style.backgroundColor = corOff
        //botao.style.color = cor
        code.style.color = corOff
        titulo.style.color = corOff
        tudo.style.backgroundColor = cor//Off // O cor Off inverte o hex code
        main.style.backgroundColor = cor
        code.style.backgroundColor = cor
    }
    var b = "Pedro Augusto F. Cardoso (45615)"
    function copiarTexto() {

        codeCor()


        // Seleciona o texto na textarea
        var textoCopy = document.getElementById('code');
        textoCopy.select();
        textoCopy.setSelectionRange(0, 99999); // Para dispositivos móveis

        // Copia o texto para a área de transferência
        document.execCommand('copy');
    }

    function invertColor(hex) {
        // Remove a hashtag, se existir
        hex = hex.replace(/^#/, '');

        // Converte para RGB
        var bigint = parseInt(hex, 16);
        var r = (bigint >> 16) & 255;
        var g = (bigint >> 8) & 255;
        var b = bigint & 255;

        // Inverte os valores RGB
        var invertedColor = ((255 - r) << 16 | (255 - g) << 8 | (255 - b)).toString(16).padStart(6, '0');

        return "#" + invertedColor;
    }
    var ab = a + b;
    console.log(ab)