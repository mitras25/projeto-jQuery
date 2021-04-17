$(document).ready(function(){
  // EFEITO CLICK
  $("#btn-plus").click(function(){
    $('p').css('fontSize', '130%');
    $("#faq-info").css('height', 'auto')
    $("#faq-roller").css('height', 'auto')
    $("#faq").css('height', 'auto')
    $("#btn-plus").hide()
    $("#btn-minus").show()
  })
  $("#btn-minus").click(function(){
    $("p").css('fontSize', '100%')
    $("#btn-minus").hide()
    $("#btn-plus").show()
  })
})
//FUNÇÃO PARA ADICIONAR SCROLL REVEAL
jQuery(document).ready( function($) {
  var revealClass = '.animated';
  var targetClass = '.has-scroll-reveal:not(' + revealClass + ')';
  var offset = 50; 

  var winHeight = $(window).height();

  $(window).bind('resizeEnd', function() {
    winHeight = $(window).height();
  });

  triggerAnimation(revealClass, targetClass, offset, winHeight);

  // EFEITO SCROLL
  $(window).on('scroll', function() {
      triggerAnimation(revealClass, targetClass, offset, winHeight);
  }); // window.on('scroll')

}); 

function triggerAnimation(revealClass, targetClass, offset, winHeight) {


    var trigger = $(window).scrollTop() + winHeight - offset;

    $(targetClass).each(function() {
      var elementOffset = $(this).offset().top;

      if( elementOffset < trigger ) {

        $(this).addClass( revealClass.replace('.','') );
      }
    });

}

$(window).resize(function() {

  if(this.resizeTO) clearTimeout(this.resizeTO);

  this.resizeTO = setTimeout(function() {
      $(this).trigger('resizeEnd');
  }, 500);

});

  // funcao adicionando data ao footer 
			// Função para formatar 1 em 01
			const zeroFill = n => {
				return ('0' + n).slice(-2);
			}

			// Cria intervalo
			const interval = setInterval(() => {
				// Pega o horário atual
				const now = new Date();

				// Formata a data conforme dd/mm/aaaa hh:ii:ss
				const dataHora = zeroFill(now.getUTCDate()) + '/' + zeroFill((now.getMonth() + 1)) + '/' + now.getFullYear() + ' ' + zeroFill(now.getHours()) + ':' + zeroFill(now.getMinutes()) + ':' + zeroFill(now.getSeconds());

    //exibe na tela usando a div#data-hora
    document.getElementById('data-hora').innerHTML = dataHora;
  }, 1000)

  
  /* CÁLCULO DAS FASES - PÁGINA DE SITUAÇÃO */
   function calculaFase(){
    let input1 = document.getElementById('leitos');
    let input2 = document.getElementById('enfermaria');
    let leitos = input1.value;
    var enfermaria = input2.value
    
  
    if(leitos >= 80 && enfermaria <= 3){
      document.getElementById('cross').style.backgroundColor = 'red'
    } else if(leitos >= 70 && enfermaria >= 3 || leitos <= 80 && enfermaria<= 5){
      document.getElementById('cross').style.backgroundColor = 'orange'
    } else if(leitos > 60 || leitos < 70 && enfermaria < 7){
      document.getElementById('cross').style.backgroundColor = '#cccc00'
    } else if(leitos < 60 && enfermaria > 7){
      document.getElementById('cross').style.backgroundColor = 'green'
    }
   }