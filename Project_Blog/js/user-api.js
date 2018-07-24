var UserApi = (function(){

    var baseUrl = "http://localhost:8080";
    var PATH_USER = "/users/";
    
    return {
        User: function(token,id){
            return new Promise(function(resolve, reject){
                
                $.ajax({
                    method: 'GET',
                    url: baseUrl + PATH_USER + id,
                    headers: {'Authorization' : 'Bearer ' + token},
                    success: function(user){
                        resolve(user.name);
                    },
                    error: function(error){
                        reject(error);
                    }
                });

            });
        },
        UserList: function(token){
            return new Promise(function(resolve, reject){
                
                $.ajax({
                    method: 'GET',
                    url: baseUrl + PATH_USER,
                    headers: {'Authorization' : 'Bearer ' + token},
                    success: function(users){
                        resolve(users);
                    },
                    error: function(error){
                        reject(error);
                    }
                });

            });
        }
    }
})();