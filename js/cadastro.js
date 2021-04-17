$(function () {
  $("#divDoBotao").hide()
  $('#aviso').hide()
  /* focus/blur coloca fundo no input quando selecionado */
  // EFEITOS FOCUS E BLUR
  $('input').focus(e => {
    $(e.target).css('background', '#E0E6F8')
  })

  $('input').blur(e => {
    $(e.target).css('backgroundColor', '#fff')
  })

  /* faz sumir ou aparecer o campo gestante */

  $("#primeiraCamadaC").hide()
  $('#sexo').click(() => {
    let fem = $('#sexo').val()
    if (fem === 'feminino') {
      // EFEITO FADEIN
      $("#primeiraCamadaC").fadeIn(2000)
    }
  })


  // validando data



  // calculando imc


  var peso
  var altura

  // validando o input de peso
  $("#oitavaCamadaC").hide()
  $('#peso').blur(function () {
    peso = $("#peso").val()
    while (isNaN(peso)) {
      $('#peso').addClass('classeVermelho')
      $('#oitavaCamada input').val('')
      alert('preencha o campo PESO com valor válido')
      return pes = false
    }
    if (peso == '' || peso <= 0) {
      $('#peso').addClass('classeVermelho')
      return pes = false
    } else {
      $('#peso').removeClass('classeVermelho')
      pes = true
      peso = $("#peso").val()
    }
  })

  //valida o input da altura
  $("#altura").blur(function () {
    altura = $("#altura").val()
    while (isNaN(altura)) {
      $('#altura').addClass('classeVermelho')
      $('#oitavaCamadaB input').val('')
      alert('preencha o campo ALTURA com valor válido')
      return alt = false
    }
    if (altura == '' || altura <= 0) {
      $('#altura').addClass('classeVermelho')
      return alti = false
    } else {
      $('#altura').removeClass('classeVermelho')
      alti = true
    }

    //Calcula o imc
    if (!pes || !alti) {
      alert('preencha os campos em vermelho')
    } else {
      // EFEITO SLIDEDOWN
      $("#oitavaCamadaC").slideDown(2000)
      let alt = (altura / 100)
      let imc = peso / (alt * alt)
      if (imc < 18.5) {
        let text = 'Abaixo do Peso'
        $('#oitavaCamadaC input').val(text)
        return imcAviso = 'Abaixo do Peso'
      } else if (imc >= 18.5 && imc < 25) {
        let text = 'Peso Normal'
        $('#oitavaCamadaC input').val(text)
        return imcAviso = 'Peso Normal'
      } else if (imc >= 25 && imc < 30) {
        let text = 'Acima do peso'
        $('#oitavaCamadaC input').val(text)
        return imcAviso = 'Acima do peso'
      } else {
        let text = 'obeso'
        $('#oitavaCamadaC input').val(text)
        return imcAviso = 'obeso'
      }
    }
  })


  // Essa função testa se o usário tem idade maior que 0 ou menor que 130
  const ano = document.getElementById("ano");
  const mes = document.getElementById("mes");
  const dia = document.getElementById("diaNascimento");
  var mes1 = mes.options[mes.selectedIndex]





  $('#ano').blur(() => {
    var mes1 = $('#mes').val()
    const dia2 = $("#diaNascimento").val()

    testaIdade(ano.value, mes1, dia2)

  })
  var rangeIdade
  function testaIdade(anoNascimento, mes1, dia) {
    // criamos o date para comparar a data atual com o ano de nascimento do usuário
    const date = new Date();

    rangeIdade = parseInt(date.getFullYear()) - parseInt(anoNascimento);

    if (rangeIdade < 0 || rangeIdade > 130 || isNaN(parseInt(anoNascimento))) {
      $("#ano").addClass('classeVermelho')
      alert('Data inválida ano errado')
      return;
    } else {

      if (mes1 == 1 && (dia <= 0 || dia > 29)) {
        $("#mes, #diaNascimento").addClass('classeVermelho')
        alert('Data inválida fevereiro')
        return;
      } else if (mes1 != 1 && (dia <= 0 || dia > 31)) {
        $("#diaNascimento").addClass('classeVermelho')
        alert('Data inválida dia errado')
        return;
      } else {
        $("#diaNascimento, #mes, #ano").removeClass('classeVermelho')
      }
      return rangeIdade;
    }

  }



  // função que testa caso o mes ou o dia do nascimento já tenha passado

  function idadeMesDia() {
    const diaHoje = new Date(); // cria obj data de referencia de hoje.
    const optMes = mes.options[mes.selectedIndex]; // pega o mes selecionado no input select]
    const optDia = parseInt(dia.value); // pega o valor do dia que o usuario colocou e transforma em inteiro
    const idadeMes = parseInt(diaHoje.getMonth()) - parseInt(optMes.value); // se esse valor é menor que zero ->
    // -> o mes de aniversario já passou e mantém a idade.
    const idadeDia = parseInt(diaHoje.getDate()) - parseInt(optDia); // se esse valor é menor que zero ->
    // -> o dia de aniversario já passou e mantém a idade.

    // baseado nos valores idadeMes e idadeDia testamos se o usuario ja fez aniversario esse ano ou não
    // se ele ainda não fez diminui 1 se ele ja fez mantem o valor
    if (idadeMes < 0 || (idadeMes == 0 && idadeDia < 0)) {
      return true;
    } else {
      return false;
    }
  }

  //const idadeValida = testaIdade(ano.value);
  const testandoIdade = idadeMesDia();

  if (testandoIdade) {
    // diminui um ano se ja passou o aniversário da pessoa
    idade = idade - 1;
  }

  // essa função testa o CPF. Retirado de -> https://www.devmedia.com.br/validar-cpf-com-javascript/23916

  $("#cpf").blur(() => {

    if ((cpf.value).length != 11) {
      alert('CPF inválido maior ou memor')
      $('#cpf').addClass('classeVermelho')
      return
    } else {
      TestaCPF(cpf.value)
    }

  })
  function TestaCPF(strCPF) {
    let Soma;
    let Resto;
    Soma = 0;
    if (strCPF == "00000000000") {
      // se a string for igual a zero retorna false
      $('#cpf').addClass('classeVermelho')
      $("#segundaCamada input").val("");
      alert('CPF inválido maior que 11')
      return false
    }

    for (i = 1; i <= 9; i++)
      // soma = 0 + parseInt do primeiro valor de strCpf * (11 - 1);
      Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
    // Resto = (Novo valor de Soma * 10) modulo 11);
    Resto = (Soma * 10) % 11;

    if (Resto == 10 || Resto == 11) {
      // se o resto é igual a 10 OU 11 resto = 0;
      Resto = 0;
    }

    if (Resto != parseInt(strCPF.substring(9, 10))) {
      // se resto é diferente do valor na 9 posição volta falso e cpf inválido
      $('#cpf').addClass('classeVermelho')
      $("#segundaCamada input").val("");
      alert('CPF inválido primeiro')
      return false
    }

    // Repetimos a lógica
    Soma = 0;
    for (i = 1; i <= 10; i++)
      Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;

    if (Resto == 10 || Resto == 11) {
      Resto = 0
    };
    if (Resto != parseInt(strCPF.substring(10, 11))) {
      $('#cpf').addClass('classeVermelho')
      $("#segundaCamada input").val("");
      alert('CPF inválido segundo')
      return false
    }
    $('#cpf').removeClass('classeVermelho');
  }

  // validando o email



  function verifica() {
    if (document.forms[0].email.value.length == 0) {
      alert('Por favor, informe o seu EMAIL.');
      document.frmEnvia.email.focus();
      return false;
    }
    return true;
  }
  $("#email").blur(function () {
    if (document.forms[1].email.value == "") {
      alert("Por favor, informe um E-MAIL válido!( vazio");
      $('#email').addClass('classeVermelho')
    } else {
      checarEmail()
    }

  })
  function checarEmail() {
    if (document.forms[1].email.value == ""
      || document.forms[1].email.value.indexOf('@') == -1
      || document.forms[1].email.value.indexOf('.') == -1) {

      alert("Por favor, informe um E-MAIL válido!");
      $('#email').addClass('classeVermelho')
      return

    }
    $('#email').removeClass('classeVermelho')
  }





  /* //Barra de progresso*/



    var $progress = $('#progress'), // Barra de Progresso.
      $progressElements = $('.progress'), // Elementos que devem ser checados
      // para modificar o valor da barra.
      TOTAL = $progressElements.length; // Total de elementos.


    $progressElements.on('blur, change', function () {

      // Faz um filtro com o total elementos válidos.
      // Nesse caso, campos que não estejam "em branco" e que não estejam marcados
      // como ':invalid'.
      var valid = $progressElements.filter(function () {
        return ($(this).val() || $(this).prop('checked')) && !$(this).is(':invalid');
      }).length;


      // Calcula a porcentagem e altera o valor da barra.
      var percent = (valid * 100) / TOTAL,
        current = $progress.val();


      var increase = percent > current;

      var transition = setInterval(function () {
        if ((increase && current >= percent) ||
          (!increase && current <= percent))
          clearInterval(transition);

        var value = $progress.val();
        value = increase ? value + 1 : value - 1;
        current = value;

        $progress.val(current);
      }, 10);

      if(percent == 100){
        $("#divDoBotao").show()
      }
    });
 


  /* -enviar --*/
  const resultado = document.querySelector(".aviso");
  
  $('#enviarBotao').click(() => {
    $('#barra').hide()
    // EFEITO TOGGLE
    $('.container').toggle(1000)
    $('#aviso').toggle()
    let idade = testaIdade(ano.value)
    const nomeAviso = $("#nome").val()
    const profAviso = $('#profissao').val()
    const comorAviso = $('.doenca:checked').length
    const imcAviso = $('#oitavaCamadaC input').val()
    // printa o resultado na div abaixo do form 
    if (idade > 68 || profAviso != 'outros' || comorAviso != 0 || imcAviso == 'obeso'){
      resultado.innerHTML = `Ola, ${nomeAviso} , você tem ${idade} anos e está apto a esta fase de Vacinação. Entraremos em contato com as informações referentes ao posto de vacinação mais apropriado a você. Agradecemos o seu cadastro, esperamos que goste do nosso serviço`
    }else{
      resultado.innerHTML = `Ola, ${nomeAviso} , você tem ${idade} anos e não está apto a esta fase de Vacinação. Aguarde a fase referente ao seu perfil. Agradecemos o seu cadastro e entraremos em contato em breve!`
    }
  })

  // EFEITO CLICK()
  $("#voltarBotao").click(() =>{
    $(location).attr('href', 'index.html')
  })
});














