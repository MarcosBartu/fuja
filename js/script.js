function fuja(){
    var botaoNegativo = document.getElementById("nao")

    var larguraJanela = window.innerWidth;
    var  alturaJanela = window.innerHeight;

    var maxX = larguraJanela - botaoNegativo.offsetWidth;
    var maxY = alturaJanela - botaoNegativo.offsetHeight;

    var aleatorioX = Math.floor(Math.random() * maxX);
    var aleatorioY = Math.floor(Math.random() * maxY);

    botaoNegativo.style.left = aleatorioX + "px";
    botaoNegativo.style.top = aleatorioY + "px";

}