

function validacion() {

  var inputUsuario = $("#usuario").val();
  var inputPass = $("#pass").val();

  if ( inputUsuario == null || inputUsuario.length == 0 || /^\s+$/.test(inputUsuario) ) {
    // Si no se cumple la condicion...
    swal(
      'Oops...',
      'Los campos son obligatorios!',
      'error'
    )

    if ($("#usuario").hasClass( "bar" )) {

    }

    $("#pass").removeClass( "error-class" );
    $("#usuario").addClass( "error-class" );
    return false;
  }
  else if ( !(/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(inputUsuario)) ) {

    swal(
      'Oops...',
      'No introdujo una dirección de email invalida!',
      'error'
    );
    $("#pass").removeClass( "error-class" );
    $("#usuario").addClass( "error-class" );
    return false;
  }
  else if (inputPass == null || inputPass.length == 0 || /^\s+$/.test(inputPass)) {
    // Si no se cumple la condicion...
    swal(
      'Oops...',
      'Los campos son obligatorios!',
      'error'
    )
    $("#usuario").removeClass( "error-class" );
    $("#pass").addClass( "error-class" );
    return false;
  }
  // exprecion = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

  else if ( !(inputPass.length > 8) ) {
    swal(
      'Oops...',
      'La contraseña debe ser de al menos 8 caracteres!',
      'error'
    )
    $("#usuario").removeClass( "error-class" );
    $("#pass").addClass( "error-class" );

    return false;
  }
  $("#pass").removeClass( "error-class" );
  $("#usuario").removeClass( "error-class" );
  swal(
    'Buen trabajo!',
    'Has pasado la validación, Bienvenido!',
    'success'
  )
  return false;
  
}