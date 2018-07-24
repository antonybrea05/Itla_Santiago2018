var storage = window.localStorage;
var token = storage.getItem("Token");
var postId = storage.getItem("PostId") -1;

function logout(){
    SecurityApi.logout(token)
        .then(function(response){
            storage.removeItem("Token"); // Eliminar el Token, del Storage.
            window.location="login.html"; // Re-direccional a la página de inicio.
        })
        .catch(function(error){
            console.log("Error: ", error);
        });
}

function showPost(ArrayList){
    PostApi.ShowPost(token)
        .then(function(data){
            var table = $("#tabla_post");
                var tr = document.createElement("tr");
                var tdPost = document.createElement("td");
                var divTitle = document.createElement("div");
                var divUser = document.createElement("div");
                var divBody = document.createElement("div");
                
                divTitle.textContent = data[postId].title;
                divUser.textContent = "By: "+ ArrayList[data[postId].userId-1].name + " (" + ArrayList[data[postId].userId-1].email +")";
                divBody.textContent = data[postId].body;

                divTitle.setAttribute("class", "Title");
                
                tdPost.appendChild(divTitle);
                tdPost.appendChild(divUser);
                tdPost.appendChild(divBody);
                
                tdPost.setAttribute("colspan", "2");

                tr.appendChild(tdPost);
                table.append(tr);

                PostInfo(ArrayList);
        })
        .catch(function(error){
            console.log(error);
        });
}

function PostInfo(ArrayList){
    PostApi.ShowComment(postId, token)
    .then(function(data){
        
        var table = $("#tabla_post");
        data.forEach(post => {
            var tr = document.createElement("tr");
            var tdPost = document.createElement("td");
            var divBody = document.createElement("div");
            var divUser = document.createElement("div");
            
            divBody.textContent = post.body;
            divUser.textContent = "By: "+ ArrayList[post.userId-1].name + " (" + ArrayList[post.userId-1].email +")";
            
            tdPost.appendChild(divBody);
            tdPost.appendChild(divUser);
            
            tdPost.setAttribute("colspan", "2");

            tr.appendChild(tdPost);
            table.append(tr);
        });
    })
    .catch(function(error){
        console.log(error);
    });

}
function userList(){
    UserApi.UserList(token)
    .then(function(ArrayList){
        showPost(ArrayList);
    })
    .catch(function(error){
        console.log(error);
    });
}
function comentar() {
    var body = document.getElementById("bodyPost").value;
    PostApi.CreateComment(postId, body, token)
    .then(function(){
        location.reload(); // Re-direccional a la página de inicio.
    })
    .catch(function(error){
        console.log(error);
    });
}


function btn_4(post){
    var id = post.getAttribute("id");
    window.localStorage.setItem("PostId", id);
    window.location = "post_index.html"; // Re-direccional a la página de inicio.
}
window.onload = function(){
    $("#btn-3").click(function(){
        logout();
    });
    $("#btn-5").click(function(){
        comentar();
    });

    userList();
}