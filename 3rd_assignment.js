$(document).ready(function(){

    // $("input").blur(function(){

    // });

    $("form").css("margin","2%");

    $("button").click(function(){
        if(   ($("#fname").val().length===0) || ($("#lname").val().length===0) ){
            alert("Please fill all the fields.");
        }
    });
});