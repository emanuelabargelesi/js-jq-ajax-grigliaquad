// Griglia 6x6, ad ogni click parte una richiesta AJAX che prende un numero random da 1 a 9.
// Se è <= 5 il quadrato diventa giallo, se è > di 5 il quadrato diventa verde.
// Il numero ottenuto appare al centro del quadrato


$( document ).ready(function() {


     var apirandnum = "https://flynn.boolean.careers/exercises/api/random/int";


$("td").on('click', function() {

  var questonum = $(this);

//richiediamo via ajax all'API un numero random
      $.ajax(
         {
            url : apirandnum,
            method: "GET",
            success: function(data){
               var numapi = data.response;
               // console.log("num api", numapi);


// Se è <= 5 il quadrato diventa giallo, se è > di 5 il quadrato diventa verde.
                  if(numapi > 5){
                     $(questonum).addClass('green').text(numapi);
                  } else {
                     $(questonum).addClass('yellow').text(numapi);
                  }

          },
            error: function(richiesta,stato,errore){
               console.log("c'è un problema con il server",richiesta,stato,errore);
            }
         }
      );

  });

      });
