var PostApi = (function(){

    var baseUrl = "http://localhost:8080";
    var PATH_POST = "/post";

    return {
        CreatePost: function(title,body, token){
            return new Promise(function(resolve, reject){
                var ld = {
                    "title": title,
                    "body": body
                }
                $.ajax({
                    method: 'POST',
                    data: JSON.stringify(ld),
                    url: baseUrl + PATH_POST,
                    headers: {'Authorization' : 'Bearer ' + token},
                    success: function (){
                        resolve();
                    },
                    error: function(error){
                        reject(error);
                    }
                });
            });
        },
        ShowPost: function(token){
            return new Promise(function(resolve, reject){
                
                $.ajax({
                    method: 'GET',
                    url: baseUrl + PATH_POST,
                    headers: {'Authorization' : 'Bearer ' + token},
                    success: function(data){
                        resolve(data);
                    },
                    error: function(error){
                        reject(error);
                    }
                });

            });
        },
        CreateComment: function(id, body, token){
            return new Promise(function(resolve, reject){id++;
                var ld = {
                    "body": body
                }
                $.ajax({
                    method: 'POST',
                    data: JSON.stringify(ld),
                    url: baseUrl + PATH_POST + "/" + id + "/comment",
                    headers: {'Authorization' : 'Bearer ' + token},
                    success: function (){
                        resolve();
                    },
                    error: function(error){
                        reject(error);
                    }
                });
            });
        },
        ShowComment: function(id, token){
            return new Promise(function(resolve, reject){id++;
                $.ajax({
                    method: 'GET',
                    url: baseUrl + PATH_POST + "/" + id + "/comment",
                    headers: {'Authorization' : 'Bearer ' + token},
                    success: function(data){
                        resolve(data);
                    },
                    error: function(error){
                        reject(error);
                    }
                });

            });
        }
    }
})();