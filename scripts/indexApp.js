//modoEscuro
const chk = document.getElementById('chk')

chk.addEventListener('change', () => {
  document.body.classList.toggle('darkbody')
  let element2 = document.getElementById("inicio")
  element2.classList.toggle('darkheader')

  let element3 = document.getElementById("titulo2")
  element3.classList.toggle('darkrep')

  let element4 = document.getElementById("menur")
  element4.classList.toggle('darkmenu')
})


cont=1
$("#chk").change(function(){
  if(cont%2!=0){
    $(".logo").attr("src","styles/img/logomodoescuro.png");
    $(".image").attr("src","styles/img/clickindexdark.png");
    $(".card").addClass("darkcard")
    cont++
  }else if(cont%2==0){
    $(".logo").attr("src","styles/img/logo"+backup+".png");
    $(".image").attr("src","styles/img/clickindex.png");
    $(".card").removeClass("darkcard")  
    cont++
        

  }
});

function passaParametro(parametro){
  backup=parametro;

    $(".logo").attr("src","styles/img/logo"+parametro+".png")

  return[backup]
}





//Juntar funcionalidade com sidebar
// //direcionaPraPagnidaDaMateria
// function abrePagina(materia){
//   switch(materia){
//     case"mat":
//       window.location.href="../Matematica/matematica-materia.html";
//     break;
//     case"fis":
//       window.location.href="../fisica/fisica-materia.html";
//     break;
//     case"qui":
//       window.location.href="../quimica/quimica-materia.html";
//     break;
//     case"bio":
//       window.location.href="../biologia/biologia-materia.html";
//     break;
//     case"por":
//       window.location.href="../portugues/portugues-materia.html";
//     break;
//     case"lit":
//       window.location.href="../literatura/literatura-materia.html";
//     break;
//     case"ing":
//       window.location.href="../ingles/ingles-materia.html";
//     break;
//     case"esp":
//       window.location.href="../espanhol/espanhol-materia.html";
//     break;
//     case"soc":
//       window.location.href="../sociologia/sociologia-materia.html";
//     break;
//     case"fil":
//       window.location.href="../filosofia/filosofia-materia.html";
//     break;
//     case"geo":
//       window.location.href="../geografia/geografia-materia.html";
//     break;
//     case"his":
//       window.location.href="../historia/historia-materia.html";
//     break;
//   }
// }
//pegaData
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
//cabecalhoDesce
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

//legenda
cont1=1
cont2=1
cont3=1
cont4=1
function destacaMateria(mt){
  switch(mt){
  case"CE":
      if(cont1%2!=0){
        $("div.cienciaExata").addClass("inverso1")
          cont1++
      }else if (cont1%2==0) {
        $("div.cienciaExata").removeClass("inverso1")       
          cont1++
      }
      
    break
    case"CN":
     if(cont2%2!=0){
        $("div.cienciaNatural").addClass("inverso2")
        
          cont2++
      }else if (cont2%2==0) {
        $("div.cienciaNatural").removeClass("inverso2")     
          cont2++
      }
      
    break
     case"LI":
     if(cont3%2!=0){
        $("div.linguagem").addClass("inverso3")
    
          cont3++
      }else if (cont3%2==0) {
            $("div.linguagem").removeClass("inverso3")     
          cont3++
      }
      
    break
  case"CH":
     if(cont4%2!=0){
        $("div.cienciaHumana").addClass("inverso4")       
          cont4++
      }else if (cont4%2==0) {
        $("div.cienciaHumana").removeClass("inverso4")       
  cont4++
      }
      
    break
  }
}

  document.addEventListener("DOMContentLoaded", function () {
    var a = document.getElementById('enem-informativoCard');
    var b = document.getElementById('enem-informativo');

    a.addEventListener("click", function () {
      if (b.style.display === 'none') {
        b.style.display = 'block';
      } else {
        b.style.display = 'none';
      }
    });
  });
    

    document.addEventListener("DOMContentLoaded", function () {
      var redacaoEnem = document.getElementById('redacaoEnem');

      redacaoEnem.addEventListener("click", function () {
        window.location.href = ("redacao/redacao.html");
      });
    
    });
        document.addEventListener("DOMContentLoaded", function () {
      var sobre = document.getElementById('sobreCard');
      var areaqr=document.querySelector(".areaQr")
      sobre.addEventListener("click", function () {
         sobre.addEventListener("click", function () {
      if (areaqr.style.display === 'none') {
        areaqr.style.display = 'block';
      } else {
        areaqr.style.display = 'none';
      }
    });
      });
    
    });
    //   document.addEventListener("DOMContentLoaded", function () {
    //   var educa = document.getElementById('educaCard');

    //   educa.addEventListener("click", function () {
    //     window.location.href = ("../educa/educa.html");
    //   });
    
    // });
    document.addEventListener("DOMContentLoaded", function () {
    var a = document.getElementById('escola-eterCard');
    var b = document.getElementById('escola-eter');

    a.addEventListener("click", function () {
      if (b.style.display === 'none') {
        b.style.display = 'block';
      } else {
        b.style.display = 'none';
      }
    });
  });
 
    document.addEventListener("DOMContentLoaded", function () {
    var a = document.getElementById('faculdadesCard');
    var b = document.getElementById('faculdades');

    a.addEventListener("click", function () {
      if (b.style.display === 'none') {
        b.style.display = 'block';
        $("#faculdadesCard").css("max-width","30%")
      } else {
        b.style.display = 'none';
       
      }
    });
  });
    document.addEventListener("DOMContentLoaded", function () {
    var a = document.getElementById('carreiraCard');
    var b = document.getElementById('carreira');

    a.addEventListener("click", function () {
      if (b.style.display === 'none') {
        b.style.display = 'block';
      } else {
        b.style.display = 'none';
      }
    });
  });
  
    cont=1
 document.addEventListener("DOMContentLoaded", function () {
      var a = document.getElementById('materiasCard');
      var b=document.querySelector("#secaoMateria")
       a.addEventListener("click", function () {
      if (cont%2!=0) {
        b.style.display = 'block';
        window.location.href="index.html#secaoMateria"
        cont++;
      } else if(cont%2==0) {
        b.style.display = 'none';
        cont++;
      }

    
    });
});
function abreModal(){
  jlModal=document.querySelector(".modal")
   if (jlModal.style.display === 'none') {
        jlModal.style.display = 'block';
        
      } else {
        jlModal.style.display = 'none';
      }
    }
function fechaModal(){
  jlModal.style.display = 'none';
}
 




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
      window.location.href = "Matematica/matematica-materia.html";   
    }
    else if(txtBusca=='razao' ||txtBusca=='proporcao'||txtBusca=='razao e proporcao'){
      window.location.href = "Matematica/razao-proporcao.html";
    }
    else if(txtBusca=='porcentagem' ||txtBusca=='%'||txtBusca=='porcent'){
      window.location.href = "Matematica/porcentagem.html";
    }
    else if(txtBusca=='regra de tres' ||txtBusca=='regra de 3'){
      window.location.href =  "Matematica/regra-de-tres.html";
    }
    else if(txtBusca=='probalidade'){
      window.location.href = "Matematica/probabilidade.html";
    }
    else if(txtBusca=='estatistica' ){
      window.location.href = "Matematica/estatistica.html";
    }
    else if(txtBusca=='geometria plana' ||txtBusca=='geometria euclidiana'||txtBusca=='planos'){
      window.location.href = "Matematica/geometria-plana.html";
    }
    else if(txtBusca=='espanhol' ){
      window.location.href = "Espanhol/espanhol-materia.html";
    }
    else if(txtBusca=='sociologia' ){
      window.location.href = "Sociologia/sociologia-materia.html";
    }
    else if(txtBusca=='portugues' ||txtBusca=='port' ||txtBusca=='lingua portuguesa'){
      window.location.href = "Portugues/portugues-materia.html";
    }
    else if(txtBusca=='figuras de linguagem' || txtBusca=='figuras da linguagem'){
      window.location.href = "Portugues/portugues-fguras-da-linguagem.html";
    }
    else if(txtBusca=='funcoes da lingaugem' ||txtBusca=='funcoes de lingaugem' ||txtBusca=='funcoes lingaugem' ){
      window.location.href = "Portugues/portugues-funcoes-da-linguagem.html";
    }
    else if(txtBusca=='generos textuais' ||txtBusca=='generos'){
      window.location.href = "Portugues/portugues-generos-textuais.html"
    }
    else if(txtBusca=='interpretacao textual' ||txtBusca=='interpretacao'){
      window.location.href = "Portugues/portugues-interpretacao-textual.html";
    }
    else if(txtBusca=='intertextualidade' ||txtBusca=='intertexto'){
      window.location.href = "Portugues/portugues-intertextualidade.html";
    }
    else if(txtBusca=='linguagem' ||txtBusca=='linguagem culta'  ||txtBusca=='linguagem coloquial'){
      window.location.href = "Portugues/portugues-intertextualidade.html";
    }
   
    else if(txtBusca=='historia' ){
      window.location.href = "historia/historia-materia.html";
    }
    else if(txtBusca=='geo' ||txtBusca=='geografia' ){
      window.location.href = "geografia/geografia-materia.html";
    }
    else if(txtBusca=='geopolitica' ||  txtBusca=='geo politica' ){
      window.location.href = "geografia/geografia-geopolitica.html";
    }
    else if(txtBusca=='biologia' ||txtBusca=='bio' ||txtBusca=='ciencias'){
      window.location.href = "biologia/biologia-materia.html";
    }
    else if(txtBusca=='quimica' ){
      window.location.href = "Quimica/quimica-materia.html";
    }
    else if(txtBusca=='atomos' ){
      window.location.href = "Quimica/quimica-atomos.html";
    }
    else if(txtBusca=='funcoes inorganicas' ){
      window.location.href = "Quimica/quimica-funcoes-inorganicas.html";
    }
    else if(txtBusca=='tabela periodic' ||txtBusca=='tabela periodica' ){
      window.location.href = "Quimica/quimica-tabela-periodica.html";
    }
    else if(txtBusca=='isomeria' ){
      window.location.href = "Quimica/quimica-isomeria.html";
    }
    else if(txtBusca=='ligacoes' ||txtBusca=='ligacoes quimicas' ){
      window.location.href = "Quimica/quimica-ligacoes-quimicas.html";
    }
    else if(txtBusca=='sociologia' ||txtBusca=='socio' ||txtBusca=='ciencias sociais'){
      window.location.href = "Sociologia/sociologia-materia.html";
    }
    else if(txtBusca=='fisica'){
      window.location.href = "fisica/fisica-materia.html";
    }
    else if(txtBusca=='newton'){
      window.location.href = "fisica/fisica-newton.html";
    }
    else if(txtBusca=='filo' ||txtBusca=='filosofia'){
      window.location.href = "filosofia/filosofia-materia.html";
    }
    else if(txtBusca=='literatura' ){
      window.location.href = "Literatura/literatura-materia.html";
    }
    
    else if(txtBusca=='literatura brasileira' ){
      window.location.href = "Literatura/literatura-brasileira.html";
    }
    else if(txtBusca=='literatura portuguesa' ){
      window.location.href = "Literatura/literatura-portuguesa.html";
    }
    else if( txtBusca==' literatura universal'  ){
      window.location.href = "Literatura/literatura-universal.html";
    }
    else if(txtBusca=='generos literarios' || txtBusca=='movimentos literarios' ||  txtBusca=='modernismo' ){
      window.location.href = "Literatura/literatura-generos-movimentos-litearios.html";
    }
    
    else if(txtBusca==' gramatica ingles' || txtBusca=='gramatica inglesa'  ){
      window.location.href = "ingles/ingles-compreensao-de-texto.html";
    }
    else if(txtBusca=='ingles' || txtBusca=='ingles'  ){
      window.location.href = "ingles/ingles-materia.html";
    }
    else if(txtBusca==' brasil colonia' ){
      window.location.href = "historia/historia-brasilcolonia.html";
    }
    else if(txtBusca=='idade media' || txtBusca==' feudalismo'  ){
      window.location.href = "historia/historia-idade-media.html";
    }
    else if(txtBusca=='idade moderna' || txtBusca==' absolutismo'  ){
      window.location.href = "historia/historia-idade-moderna.html";
    }
    else if(txtBusca=='segundo reinado' || txtBusca==' dom pedro' || txtBusca=='brasil imperio'  ){
      window.location.href = "historia/historia-segundo-reinado.html";
    }
    else if(txtBusca=='filosofia grega' || txtBusca=='milagre grego' || txtBusca=='socrates' || txtBusca=='grecia antiga'  ){
      window.location.href = "Filosofia/filosofia-grecia.html";
    }
    else if(txtBusca=='empirismo' ){
      window.location.href = "Filosofia/filosofia-empirismo.html";
    }
    else if(txtBusca=='racionalismo' ){
      window.location.href = "Filosofia/filosofia-racionalismo.html";
    }
    else{
     alert("Não foi possível encontrar a página! Procure pela página da matéria!")
    }
  }
 /*

filter: blur(2px);
  -webkit-filter: blur(2px);

 */








