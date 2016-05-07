$ = jQuery;

var nstring = "79 991915473";
var k = null;

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

function sendMain() {
    swal({
       title: "Mensagem.",
        text: "Mande a mensagem para: " + nstring + " " + document.getElementById('msg').value +  " " + document.getElementById('from').value,
        type: "success"
    });
    
    return false;
}

function notAvaliable() {
    var encrypted = CryptoJS.AES.encrypt("Message", "Secret Passphrase");
    var decrypted = CryptoJS.AES.decrypt(encrypted, "Secret Passphrase");
    
    swal({
        title: "Espere um pouco...",
        text: "O serviço de cursos ainda não esta disponível.",
        type: "error"
    })
}