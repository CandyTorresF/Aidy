$(document).ready(function()
{
    //==================================================================================================================
    //Prepara las configuraciones inicales para la pagina cargada

    //==================================================================================================================
    function subExit()
    {
        var jsonData = {
            action: "echoLogout"
        };

        $.ajax
        ({
            url:"Controller/controlador.php", 
            type: "POST",
            data: jsonData, 
            dataType: "json",

            success: function(jsonResponse){
                //hay uno o mas usuarios con esta contraseña 
                if (jsonResponse == 1){
                    window.location.href = "index.html";
                }
                
                //borrar despues de test... 
                console.log(jsonResponse);
            },

            error: function(jsonResponse){
                console.log(jsonResponse);
            }
        });
    }
    //------------------------------------------------------------------------------------------------------------------
    $("#btnExit").on("click", function() {
        subExit();
    });

});