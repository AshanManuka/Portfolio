var score = 0;
var rowOne = false;
var rowTwo = false;
var rowThree = false;


$("body").on('keyup',function (event) {
    if(event.key === "1"){
        $("#playerImg").css('left',"28%");
        rowOne = true;
        rowTwo = false;
        rowThree = false;
        score++;
    }else if(event.key === "2"){
        $("#playerImg").css('left',"48%");
        rowOne = false;
        rowTwo = true;
        rowThree = false;
        score++;
    }else if(event.key === "3"){
        $("#playerImg").css('left',"69%");
        rowOne = false;
        rowTwo = false;
        rowThree = true;
        score++;
    }
});


