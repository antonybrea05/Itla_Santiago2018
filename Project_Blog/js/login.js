function login(){
    var email = $("#email").val();
    var password = $("#pass").val();
    SecurityApi.login(email, password)
        .then(function(response){
            var token = response.token;
            window.localStorage.setItem("Token", token); // Registrar el token en local storage.
            window.location = "index.html"; // Redireccionar a index.html
        })
        .catch(function(error){
            alert("La credencial utilizada es incorrecta");
        });    
}

function logup(){
    var name = $("#name").val();
    var email = $("#email").val();
    var password = $("#pass").val();
    var password2 = $("#pass2").val();
    if(password == password2){
        SecurityApi.logup(name, email, password)
        .then(function(response){
            login(); // logear usuario creado.
        })
        .catch(function(error){
            console.log(error);
        });
    }
    else{
        alert("Las contraseñas no son iguales");
    }
}

window.onload = function(){
    $("#btn-1").click(function(){
        login();
    });

    $("#btn-2").click(function(){
        logup();
    });
}