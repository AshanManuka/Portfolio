
$("body").on('keyup',function (event) {
    if(event.key === "1"){
        $("#playerImg").css('left',"28%");
    }else if(event.key === "2"){
        $("#playerImg").css('left',"48%");
    }else if(event.key === "3"){
        $("#playerImg").css('left',"69%");
    }
});


