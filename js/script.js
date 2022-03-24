let carta1 = {
    nome: "Saitama",
    imagem: 'https://tm.ibxk.com.br/2020/09/16/16180310869653.jpg',
    atributos: {
        ataque: 10,
        intelecto: 3,
        magia: 0,
    }
};
let carta2 = {
    nome: "Dumbledore",
    imagem: 'https://res.cloudinary.com/buzzfeed-brasil/image/upload/q_auto,f_auto/image-uploads/subbuzz-images/jpeg/86d2d516583a92705cac9248782fe611.jpg',
    atributos: {
        ataque: 0,
        intelecto: 7,
        magia: 9,
    }
};
let carta3 = {
    nome: "Walter White",
    imagem: 'http://streamingsbrasil.com/wp-content/uploads/2019/09/walter-white-estara-.jpg',
    atributos: {
        ataque: 4,
        intelecto: 9,
        magia: 0,
    }
};
let carta4 = {
    nome: "All Might",
    imagem: 'https://kanto.legiaodosherois.com.br/w760-h398-gnw-cfill-q95/wp-content/uploads/2021/09/legiao_Oq_Y0lT1F6wa.png.jpeg',
    atributos: {
        ataque: 8,
        intelecto: 6,
        magia: 2,
    }
}
let carta5 = {
    nome: "Doutor Estranho",
    imagem: 'https://portalpopline.com.br/wp-content/uploads/2021/12/refilmagens-doutor-estranho-no-multiverso-da-loucura-marvel.jpg',
    atributos: {
        ataque: 3,
        intelecto: 6,
        magia: 8,
    }
}
let carta6 = {
    nome: "Sherlock Holmes",
    imagem: 'https://br.web.img3.acsta.net/newsv7/18/08/20/22/49/3020156.jpg',
    atributos: {
        ataque: 2,
        intelecto: 9,
        magia: 0,
    }
}
let carta7 = {
    nome: "Bane",
    imagem: 'https://br.web.img2.acsta.net/medias/nmedia/18/84/48/34/19955477.jpg',
    atributos: {
        ataque: 7,
        intelecto: 5,
        magia: 0,
    }
}
let carta8 = {
    nome: "Patolino, O Mago!",
    imagem: 'https://pm1.narvii.com/6782/2db3080ccce380be3cd73e10653d11f995ad13ccv2_hq.jpg',
    atributos: {
        ataque: 0,
        intelecto: 1,
        magia: 10,
    }
}

let carta9 = {
    nome: "Dexter",
    imagem: 'http://midia.gruposinos.com.br/_midias/jpg/2016/04/27/xyz12col_0105-1452072.jpg',
    atributos: {
        ataque: 1,
        intelecto: 10,
        magia: 0,
    }
}
let carta10 = {
    nome: "Furiosa",
    imagem: 'https://conteudo.imguol.com.br/c/entretenimento/2c/2021/09/12/furiosa-mad-max-1631485270026_v2_615x300.jpg',
    atributos:{
        ataque: 9,
        intelecto: 6,
        magia: 0,
    }
}
let carta11 = {
    nome: "Hermione Granger",
    imagem: 'https://images.mod-fashions.com/img/lists/2/harry-potter-15-times-hermione-granger-was-worst.jpg',
    atributos:{
        ataque:3,
        intelecto: 8,
        magia: 7,
    }
}
let carta12 ={
    nome:'Lisa Simpson',
    imagem:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmsqajv9A2C_mcEEPQXUHYplS4DI2HE8ldSQ&usqp=CAU',
    atributos:{
        ataque: 0,
        intelecto: 10,
        magia: 0,
    }
}
let carta13 ={
    nome: "Docinho",
    imagem: 'https://d2bsjm9patfdz0.cloudfront.net/images/0000039_docinho-meninas-superpoderosas.png',
    atributos:{
        ataque: 10,
        intelecto: 1,
        magia: 5,
    }
}
let carta14 ={
    nome: 'Nairobi',
    imagem:'https://rollingstone.uol.com.br/media/uploads/nairobi_-_la_casa_de_papel_reprod.jpg',
    atributos:{
        ataque: 4,
        intelecto: 9,
        magia: 0,

    }
}
let carta15 ={
    nome: 'Feiticeira Escalarte',
    imagem:'https://disneyplusbrasil.com.br/wp-content/uploads/2021/04/Feiticeira-Escarlate-Serie-DisneyPlus.jpg',
    atributos:{
        ataque: 1,
        intelecto: 4,
        magia: 10,
    }
}
let carta16 ={
    nome:'Michonne',
    imagem:'https://ovicio.com.br/wp-content/uploads/2022/03/20220318-ovicio-the-walking-dead-amc-michonne-730x365.jpg',
    atributos:{
        ataque: 8,
        intelecto: 7,
        magia: 0,
    }
}
let carta17 ={
    nome:'Alex',
    imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdzkZDxYKNw6LhkrYxSy5Xg4j6fBlUFHGe2A&usqp=CAU',
    atributos:{
        ataque:8,
        intelecto:6,
        magia:0,
    }
}
let carta18 ={
    nome:'Amy Farrah Fowler',
    imagem:'https://i.pinimg.com/originals/1c/d1/ec/1cd1ec536fbd94eae4219dbe4e801267.png',
    atributos:{
        ataque:1,
        intelecto:8,
        magia: 2,
    }
}

let cartas = [carta1, carta2, carta3, carta4, carta5, carta6, carta7, carta8, carta9, carta10, carta11,carta12,carta13,carta14,carta15,carta16,carta17,carta18];
let cartaMaquina;
let cartaJogador;

function sortearCartas() {

    let numeroCartaMaquina = parseInt(Math.random() * cartas.length);
    cartaMaquina = cartas[numeroCartaMaquina];

    let numeroCartaJogador = parseInt(Math.random() * cartas.length);

    while (numeroCartaMaquina == numeroCartaJogador) {
        numeroCartaJogador = parseInt(Math.random() * cartas.length);
    };

    cartaJogador = cartas[numeroCartaJogador];
    console.log(cartaJogador);
    console.log(cartaMaquina);

    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled = false;
    limparTela();
    exibirCartaJogador();

};
function obtemAtributoSelecionado() {
    let radioAtributos = document.getElementsByName("atributo");
    for (let i = 0; i < radioAtributos.length; i++) {
        if (radioAtributos[i].checked == true) {
            return radioAtributos[i].value
        }
    }
};

function jogar() {
    let atributoSelecionado = obtemAtributoSelecionado();

    let elementoResultado = document.getElementById("resultado");

    let valorCartaJogador = cartaJogador.atributos[atributoSelecionado];

    let valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];

    if (atributoSelecionado === undefined) {
        elementoResultado.innerHTML = "<p class='resultado-final-indefinido'>Selecione um atributo!</p>";
    } else if (valorCartaJogador > valorCartaMaquina) {
        elementoResultado.innerHTML = "<p class='resultado-final-vitoria'>Você Venceu! ╰(*°▽°*)╯</p>";
        exibirCartaMaquina();
        document.getElementById("btnSortear").disabled = false;
        document.getElementById("btnJogar").disabled = true;

    } else if (valorCartaMaquina > valorCartaJogador) {
        elementoResultado.innerHTML = "<p class='resultado-final-derrota'>Você Perdeu! A carta da máquina é maior!</p>";
        exibirCartaMaquina();
        document.getElementById("btnSortear").disabled = false;
        document.getElementById("btnJogar").disabled = true;

    } else {
        elementoResultado.innerHTML = "<p class='resultado-final-empate'>Empatou! </p>";
        exibirCartaMaquina();
        document.getElementById("btnSortear").disabled = false;
        document.getElementById("btnJogar").disabled = true;
    }

}

function exibirCartaJogador() {

    let divCartaJogador = document.getElementById("carta-jogador");
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">'
    var tagHTML = "<div id='opcoes' class='carta-status'>";
    let opcoesTexto = "";

    for (let atributo in cartaJogador.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + "  " + cartaJogador.atributos[atributo] + "<br>";
    };
    let nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
    divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>"
}

function exibirCartaMaquina() {
    let divCartaMaquina = document.getElementById("carta-maquina");
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;

    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">'

    var tagHTML = "<div id='opcoes' class='carta-status'>";
    let opcoesTexto = "";

    for (let atributo in cartaMaquina.atributos) {
        opcoesTexto += "<p name='atributo' value='" + atributo + "'>" + atributo + "  " + cartaMaquina.atributos[atributo] + "</p>";
    };
    let nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`
    divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>"
}

function limparTela(){
    let divCartaJogador = document.getElementById("carta-jogador");
    let divCartaMaquina = document.getElementById("carta-maquina");
    let elementoResultado = document.getElementById("resultado");

    divCartaMaquina.style.backgroundImage = ``;
    divCartaJogador.innerHTML = '';
    divCartaMaquina.innerHTML ='';
    elementoResultado.innerHTML ='';
}