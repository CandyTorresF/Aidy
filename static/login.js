$(document).ready(function()
{
    //==================================================================================================================
    //Prepara las configuraciones inicales para la pagina cargada
    subCheckSession();

    //==================================================================================================================
    function subLogin()
    {
        var jsonData = {
            action: "echoLogin",
            user: $("#usr").val(),
            password: $("#pass").val()

        };

        $.ajax
        ({
            url:"Controller/controlador.php", 
            type: "POST",
            data: jsonData, 
            dataType: "json",

            success: function(jsonResponse){
                //hay uno o mas usuarios con esta contraseña 
                if (jsonResponse > 0){
                    window.location.href = "contenido.html";
                }
                else{
                    alert("User or Password incorrect");
                }
                //borrar despues de test... 
                console.log(jsonResponse);
            },

            error: function(jsonResponse)
            {
                console.log(jsonResponse);
            }
        });
    }
    function subCheckSession()
    {
        var jsonData = {
            action: "checkSession"
        };

        $.ajax
        ({
            url:"Controller/controlador.php", 
            type: "POST",
            data: jsonData, 
            dataType: "json",

            success: function(jsonResponse){
                //hay uno o mas usuarios con esta contraseña 
                if (jsonResponse[0] == 0){
           
                }else{
                window.location.href = "contenido.html";
                }
                
                //borrar despues de test... 
                console.log(jsonResponse);
            },

            error: function(jsonResponse)
            {

                //window.location.href = "index.html";
                console.log(jsonResponse);
            }
        });
    }

});