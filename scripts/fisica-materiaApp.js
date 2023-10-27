


//modo escuro


const chk = document.getElementById('chk')

chk.addEventListener('change', () => {
  document.body.classList.toggle('darkbody')
  let element = document.getElementById("mainnormal")
  element.classList.toggle('darkmain')
  let element2 = document.getElementById("inicio")
  element2.classList.toggle('darkheader')

  let element3 = document.getElementById("rodape")
  element3.classList.toggle('darkrodape')


})

// function passaParametro(parametro){
//   backup=parametro;

//     $(".logo").attr("src","../styles/img/logo"+parametro+".png")

//   return[backup]
// }

// cont=1
// $("#chk").change(function(){
//   if(cont%2!=0){
//     $(".logo").attr("src","../styles/img/logomodoescuro.png");
//       cont++
//   }else if(cont%2==0){
//     $(".logo").attr("src","../styles/img/logo"+backup+".png");
//       cont++
//         console.log("modo escuro desligado")

//   }
// });


function removerAcentos(texto) {
  return texto
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, ""); 
}
 
//botao de pesquisa
function searchOnEnter(event) {
  if (event.key === "Enter") {
    search();
    event.preventDefault(); // Impede o envio do formulário padrão
  }
}


function search() {
  var texto = document.getElementById('search-bar').value;
  var txtBusca =removerAcentos(texto).toLowerCase();

    if(txtBusca=='matematica' ||txtBusca=='matematic' ||txtBusca=='mat' ) {
      window.location.href = "../Matematica/matematica-materia.html";   
    }
    else if(txtBusca=='razao' ||txtBusca=='proporcao'||txtBusca=='razao e proporcao'){
      window.location.href = "../Matematica/razao-proporcao.html";
    }
    else if(txtBusca=='porcentagem' ||txtBusca=='%'||txtBusca=='porcent'){
      window.location.href = "../Matematica/porcentagem.html";
    }
    else if(txtBusca=='regra de tres' ||txtBusca=='regra de 3'){
      window.location.href =  "../Matematica/regra-de-tres.html";
    }
    else if(txtBusca=='probalidade'){
      window.location.href = "../Matematica/probabilidade.html";
    }
    else if(txtBusca=='estatistica' ){
      window.location.href = "../Matematica/estatistica.html";
    }
    else if(txtBusca=='geometria plana' ||txtBusca=='geometria euclidiana'||txtBusca=='planos'){
      window.location.href = "../Matematica/geometria-plana.html";
    }
    else if(txtBusca=='espanhol' ){
      window.location.href = "../Espanhol/espanhol-materia.html";
    }
    else if(txtBusca=='sociologia' ){
      window.location.href = "../Sociologia/sociologia-materia.html";
    }
    else if(txtBusca=='portugues' ||txtBusca=='port' ||txtBusca=='lingua portuguesa'){
      window.location.href = "../Portugues/portugues-materia.html";
    }
    else if(txtBusca=='figuras de linguagem' || txtBusca=='figuras da linguagem'){
      window.location.href = "../Portugues/portugues-fguras-da-linguagem.html";
    }
    else if(txtBusca=='funcoes da lingaugem' ||txtBusca=='funcoes de lingaugem' ||txtBusca=='funcoes lingaugem' ){
      window.location.href = "../Portugues/portugues-funcoes-da-linguagem.html";
    }
    else if(txtBusca=='generos textuais' ||txtBusca=='generos'){
      window.location.href = "../Portugues/portugues-generos-textuais.html"
    }
    else if(txtBusca=='interpretacao textual' ||txtBusca=='interpretacao'){
      window.location.href = "../Portugues/portugues-interpretacao-textual.html";
    }
    else if(txtBusca=='intertextualidade' ||txtBusca=='intertexto'){
      window.location.href = "../Portugues/portugues-intertextualidade.html";
    }
    else if(txtBusca=='linguagem' ||txtBusca=='linguagem culta'  ||txtBusca=='linguagem coloquial'){
      window.location.href = "../Portugues/portugues-intertextualidade.html";
    }
   
    else if(txtBusca=='historia' ){
      window.location.href = "../historia/historia-materia.html";
    }
    else if(txtBusca=='geo' ||txtBusca=='geografia' ){
      window.location.href = "../geografia/geografia-materia.html";
    }
    else if(txtBusca=='geopolitica' ||  txtBusca=='geo politica' ){
      window.location.href = "../geografia/geografia-geopolitica.html";
    }
    else if(txtBusca=='biologia' ||txtBusca=='bio' ||txtBusca=='ciencias'){
      window.location.href = "../biologia/biologia-materia.html";
    }
    else if(txtBusca=='quimica' ){
      window.location.href = "../Quimica/quimica-materia.html";
    }
    else if(txtBusca=='atomos' ){
      window.location.href = "../Quimica/quimica-atomos.html";
    }
    else if(txtBusca=='funcoes inorganicas' ){
      window.location.href = "../Quimica/quimica-funcoes-inorganicas.html";
    }
    else if(txtBusca=='tabela periodic' ||txtBusca=='tabela periodica' ){
      window.location.href = "../Quimica/quimica-tabela-periodica.html";
    }
    else if(txtBusca=='isomeria' ){
      window.location.href = "../Quimica/quimica-isomeria.html";
    }
    else if(txtBusca=='ligacoes' ||txtBusca=='ligacoes quimicas' ){
      window.location.href = "../Quimica/quimica-ligacoes-quimicas.html";
    }
    else if(txtBusca=='sociologia' ||txtBusca=='socio' ||txtBusca=='ciencias sociais'){
      window.location.href = "../Sociologia/sociologia-materia.html";
    }
    else if(txtBusca=='fisica'){
      window.location.href = "../fisica/fisica-materia.html";
    }
    else if(txtBusca=='newton'){
      window.location.href = "../fisica/fisica-newton.html";
    }
    else if(txtBusca=='filo' ||txtBusca=='filosofia'){
      window.location.href = "../filosofia/filosofia-materia.html";
    }
    else if(txtBusca=='literatura' ){
      window.location.href = "../Literatura/literatura-materia.html";
    }
    
    else if(txtBusca=='literatura brasileira' ){
      window.location.href = "../Literatura/literatura-brasileira.html";
    }
    else if(txtBusca=='literatura portuguesa' ){
      window.location.href = "../Literatura/literatura-portuguesa.html";
    }
    else if( txtBusca==' literatura universal'  ){
      window.location.href = "../Literatura/literatura-universal.html";
    }
    else if(txtBusca=='generos literarios' || txtBusca=='movimentos literarios' ||  txtBusca=='modernismo' ){
      window.location.href = "../Literatura/literatura-generos-movimentos-litearios.html";
    }
    
    else if(txtBusca==' gramatica ingles' || txtBusca=='gramatica inglesa'  ){
      window.location.href = "../ingles/ingles-compreensao-de-texto.html";
    }
    else if(txtBusca=='ingles' || txtBusca=='ingles'  ){
      window.location.href = "../ingles/ingles-materia.html";
    }
    else if(txtBusca==' brasil colonia' ){
      window.location.href = "../historia/historia-brasilcolonia.html";
    }
    else if(txtBusca=='idade media' || txtBusca==' feudalismo'  ){
      window.location.href = "../historia/historia-idade-media.html";
    }
    else if(txtBusca=='idade moderna' || txtBusca==' absolutismo'  ){
      window.location.href = "../historia/historia-idade-moderna.html";
    }
    else if(txtBusca=='segundo reinado' || txtBusca==' dom pedro' || txtBusca=='brasil imperio'  ){
      window.location.href = "../historia/historia-segundo-reinado.html";
    }
    else if(txtBusca=='filosofia grega' || txtBusca=='milagre grego' || txtBusca=='socrates' || txtBusca=='grecia antiga'  ){
      window.location.href = "../Filosofia/filosofia-grecia.html";
    }
    else if(txtBusca=='empirismo' ){
      window.location.href = "../Filosofia/filosofia-empirismo.html";
    }
    else if(txtBusca=='racionalismo' ){
      window.location.href = "../Filosofia/filosofia-racionalismo.html";
    }
    else{
     alert("Não foi possível encontrar a página! Procure pela página da matéria!")
    }
  }

//sumir banner (header)
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector("#inicio").style.top = "0";
  } else {
    document.querySelector("#inicio").style.top = "-20%";
  }
  prevScrollpos = currentScrollPos;
}

//data rodape
diaMesAno=dataHoje();
        function dataHoje(){
            data=new Date();
            dia=data.getDate();
            mes=data.getMonth()+1;
            ano=data.getFullYear(); 
            return [dia,mes,ano]
        }
        $(document).ready(function(){
           $(".data").text("Data de hoje: "+dia+"/"+mes+"/"+ano);
        })

function abreTopico(topico){  
  window.location.href=topico+".html";

}

 var ctx = document.getElementById('grafico').getContext('2d');
 $("#grafico").addClass("cursor")

        var dados = {
            labels: ['Calor', 'Movimentos', 'Newtons' , 'outros'],
            datasets: [{
                data: [25,25, 25, 25 ],
                backgroundColor: [
                    'rgb(255, 0, 0)',
                    'rgb(0, 255, 0)',
                    'rgb(0, 0, 255)',
                    'rgb(255, 255, 0)',
                    




                ],
            }]
        };

        var config = {
            type: 'pie',
            data: dados,
        };

        var myPieChart = new Chart(ctx, config);
         myPieChart.canvas.addEventListener('click', function (event) {
            var setores = myPieChart.getElementsAtEventForMode(event, 'point', myPieChart.options);
            
            if (setores.length > 0) {
                var label = myPieChart.data.labels[setores[0].index];
                if(label=='Calor'){
                    window.location.href=('fisica-calor.html')
                }
                else if(label=='Movimentos'){
                    window.location.href=('fisica-movimentos.html')
                }
                if(label=='Newtons'){
                    window.location.href=('fisica-newton.html')
                }
            }
        });

//load        
$(window).on('load', function () {
$('#load').delay(800).fadeOut('slow'); 
$('body').delay(500).css({'overflow': 'visible'});
});




cont1=1
cont2=1
cont3=1
function filtraPrioridade(prioridade){

  switch(prioridade){
  case"prioridade1":
    if(cont1%2!=0){
        $(".pri1").addClass("filtra");
        $(".linha").css("display","flex")
      cont1++;
    }else if(cont1%2==0){
       $(".pri1").removeClass("filtra");
    $(".linha").css("justify-content","space-around")

    cont1++
    }
    break;
  case"prioridade2":
    if(cont2%2!=0){
        $(".pri2").addClass("filtra");
        $(".linha").css("display","flex")
      cont2++;
    }else if(cont2%2==0){
       $(".pri2").removeClass("filtra");
    $(".linha").css("justify-content","space-around")

    cont2++
    }
    break;
  case"prioridade3":
    if(cont3%2!=0){
        $(".pri3").addClass("filtra");
        $(".linha").css("display","flex")
      cont3++;
    }else if(cont3%2==0){
       $(".pri3").removeClass("filtra");
    $(".linha").css("justify-content","space-around")

    cont3++
    }
  }
}



$(".logo").click(function(){
  window.location.href= "../Index.html";
});
document.querySelector('.logo').addEventListener('mouseover',() => {
  document.querySelector('.logo').style.cursor = 'pointer';
});