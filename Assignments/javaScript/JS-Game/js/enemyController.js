var n = 15;

setInterval(flowEnemy,60);

function flowEnemyOne(){
    goEnemy(n);
    n += 5;

    if(n === 400){
        n = 0;
    }
}

function goEnemyOne(n){
    $("#enemy-one").css('top',n);
}

function goEnemyTwo(){
    $("#enemy-one").css('top',n);
}