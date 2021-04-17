$(document).ready(function () {
  //Aqui foi utilizado JQuery UI

  $("#content div:nth-child(1)").show();
  $(".abas li:first div").addClass("selected");
  $(".aba").click(function () {
      $(".aba").removeClass("selected");
      $(this).addClass("selected");
      var indice = $(this).parent().index();
      indice++;
      $("#content div").hide();
      $("#content div:nth-child(" + indice + ")").show();
  });

  $(".aba").hover(
      function () { $(this).addClass("ativa") },
      function () { $(this).removeClass("ativa") }
  );

  $(elemento).hover(
      function () {/*função a ser executada ao pôr o cursor sobre o elemento*/ },
      function () {/*função a ser executada ao tirar o cursor do elemento*/ }
  );

  
})
