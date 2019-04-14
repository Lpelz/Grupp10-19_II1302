$(document).ready(function(){       
    loggedin(); 
});

function login(){
    var username = $("#username").val();
    var password = $("#password").val();
    $.post("/auth", {   
        username: username,
        password: password
    }, function(response){  
        $("#username").val(''); 
        $("#password").val('');
        if(response === false){
          alert('invalid username or password, try again!');
        }
        else{
            $("#logout").css("visibility","visible");
            $(".login").empty();
            window.location.href = '/index';
        }
       }); 
}


function logout(){
    $.post("/logout", function(response){ 
        if(response===false){ 
        $("#logout").css("visibility","hidden");
        $(".login").append('Login');
        }
    }); 
}
function loggedin(){
    $.post("/loggedin", function(response){  
           if(response === true){
           $("#logout").css("visibility","visible");
           $(".login").empty();
           }
    }); 
}