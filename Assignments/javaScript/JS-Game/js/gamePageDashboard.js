var total;
var playerName;
getNow();

function getNow(){
        var nowHour = new Date().getHours();
        var nowMin = new Date().getMinutes();
        var nowSec = new Date().getSeconds();
        if(nowMin < 50){
            nowMin += 10;
            countTime(nowHour,nowMin,nowSec);
        }else if(nowMin === 50){
            nowHour += 1;
            nowMin = 0;
            countTime(nowHour,nowMin,nowSec);
        }else{
            nowHour += 1;
            var balanceMin = nowMin - 50;
            nowMin = balanceMin;
            countTime(nowHour,nowMin,nowSec);
        }
}

function countTime(hh,mm,ss){
    var tDay = new Date().toDateString()
    var lastTime = tDay+" "+hh+":"+mm+":"+ss;
    var countTime = new Date(lastTime).getTime();
    var x = setInterval(function() {
        var now = new Date().getTime();
        var distance = countTime - now;
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        var forLbl = minutes+ ":" + seconds;
        $("#timeId").text(forLbl);

        if(minutes === 2){
            $("#timeId").css('color',"red");
        }

        if (distance < 0) {
            clearInterval(x);
        //show section
            $("main").css('display',"none");
            $("#result-form").css('display',"inline");
            setStatus();
        }
    }, 1000);
}


$("#sec-twoo").on('click',function(){
    playerName = $("#txtName").val();
    alert(playerName);
});

function setStatus(){
    $("#pName").text(playerName);
    $("#score-id").text(total);
    console.log("total : "+total);
}


