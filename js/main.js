document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener('submit', validarFormulario); 
  });
  
  function validarFormulario(evento) {
    evento.preventDefault();
    var usuario = document.getElementById('usuario').value;
    if(usuario.length == 0) {
      alert('Debes ingresar tu nombre antes de continuar');
      return;
    }
    var email = document.getElementById('email').value;
    if (email.length == 0) {
      alert('Debes ingresar tu email  antes de continuar');
      return;
    }
    var mensaje = document.getElementById('mensaje').value;
    if (mensaje.length == 0) {
      alert('No olvides tu mensaje');
      return;
    }
    this.submit();
    alert("Nos comunicaremos contigo a la brevedad");
  }

// function valida_envia(){
//     //valido el usuario
//     if (document.formulario.usuario.value.length==0){
//            alert("No olvides tu nombre")
//            document.formulario.usuario.focus()
//            return 0;
//     }
 
//     // //valido la email.
//     // email = document.formulario.email.value.length==0){
//     // email = validarEmail(email)
//     // document.formulario.email.value=email
//     // if (email==""){
//     //        alert("Debe ingresar su email de contacto")
//     //        document.formulario.email.focus()
//     //        return 0;
//     // }else{
//     //        if (email<18){
//     //               alert("Debe ser mayor de 18 años.")
//     //               document.formulario.email.focus()
//     //               return 0;
//     //        }
//     // }
 
//     // //valido el interés
//     // if (document.formulario.interes.selectedIndex==0){
//     //        alert("Debe seleccionar un motivo de su contacto.")
//     //        document.formulario.interes.focus()
//     //        return 0;
//     // }
 
//     //el formulario se envia
//     alert("Muchas gracias por enviar el formulario");
//     document.formulario.submit();

