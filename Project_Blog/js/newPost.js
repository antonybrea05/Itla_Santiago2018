
function CreatePost() {
    var title = document.getElementById("title_post").value;
    var body = document.getElementById("body_post").value;
    PostApi.CreateComment(title,body, token)
    .then(function(){
        location.reload(); // Re-direccional a la página de inicio.
    })
    .catch(function(error){
        console.log(error);
    });
}

window.onload = function(){
    $("#btn-10").click(function(){
        CreatePost();
    });
}