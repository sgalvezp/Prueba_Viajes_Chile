
$(document).ready(function () {
    $("a").on('click', function (event) {   //click en opciones del menú
        if (this.hash !== "") {             //asegura precencia de link
            event.preventDefault();         //previene cambio abrupto
            var hash = this.hash;

            $('html, body').animate({           
                scrollTop: $(hash).offset().top  //smooth scroll 
            }, 1000, function () {
                
                window.location.hash = hash;     //cambia url
            });
        }
    });

    $("#enviar").on('click', function (event) {
        alert("¡Gracias por comunicarte con nosotros!");    //agradece mediante alert
        $("#exampleFormControlInput1").val("");             //borra el nombre del formulario 
        $("#exampleFormControlInput2").val("");             //borra el asunto del formulario
        $("#exampleFormControlTextarea1").val("");          //borra el mensaje
    });
});






