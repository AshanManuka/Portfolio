getNow();

function getNow(){
        var nowHour = new Date().getHours();
        var nowMin = new Date().getMinutes();
        var nowSec = new Date().getSeconds();
        if(nowMin < 50){
            nowMin += 10;
            countTime(nowHour,nowMin,nowSec);
        }

}


// countTime();

function countTime(hh,mm,ss){
    var tDay = new Date().toDateString()
    console.log(tDay);
    var lastTime = tDay+" "+hh+":"+mm+":"+ss;
    var countTime = new Date(lastTime).getTime();
    var x = setInterval(function() {
        var now = new Date().getTime();
        var distance = countTime - now;
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        console.log(minutes + " : " + seconds + "   ");

        if (distance < 0) {
            clearInterval(x);
            // document.getElementById("emo").innerHTML = "EXPIRED";
        }
    }, 1000);
}