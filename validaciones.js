
            (function(){
                //Variables
                var formulario = document.getElementsByName('formulario')[0],
                    elementos = formulario.elements,
                    boton = document.getElementById('btn');
    
                var validarNombre = function(e){
                    if (formulario.nombre.value == 0){
                        alert("Completa el campo nombre");
                        e.preventDefault();
                    }
                };
                var validarApellido = function(e){
                    if (formulario.apellido.value == 0){
                        alert("Completa el campo apellido");
                        e.preventDefault();
                    }
                };

                var validarMail = function(e){
                    if (formulario.mail.value == 0){
                        alert("Completa el campo mail");
                        e.preventDefault();
                    }
                };
                var validarClave = function(e){
                    if (formulario.clave.value == 0){
                        alert("Debe ingresar la clave");
                        e.preventDefault();
                    }
                };
    
                var validarRadio = function(e){
                    if (formulario.sexo[0].checked == true || 
                        formulario.sexo[1].checked == true){
                    } else{
                        alert("Completa el campo sexo");
                        e.preventDefault();
                    }
                };
                
                var validarCheckbox = function(e){
                    if (formulario.terminos.checked == false){
                        alert("Acepta los términos y condiciones");
                        e.preventDefault();
                    }
                };
    
                var validar = function(e){
                    validarNombre(e);
                    validarApellido(e);
                    validarMail(e);
                    validarClave(e);
                    validarRadio(e);
                    validarCheckbox(e);
                };
                formulario.addEventListener("submit", validar);
            }())


