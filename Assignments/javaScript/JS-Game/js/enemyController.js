var one = 15;
var two = 15;
var three = 15;

setInterval(flowEnemyOne,60);
setInterval(flowEnemyTwo,50);
setInterval(flowEnemyThree,45);

function flowEnemyOne(){
    goEnemyOne(one);
    one += 5;

    if(one === 410){
        one = 0;
        checkPositionOne();
    }
}

function flowEnemyTwo(){
    goEnemyTwo(two);
    two += 5;

    if(two === 410){
        two = 0;
        checkPositionTwo();
    }
}

function flowEnemyThree(){
    goEnemyThree(three);
    three += 5;

    if(three === 410){
        three = 0;
        checkPositionThree();
    }
}

function goEnemyOne(n){
    $("#enemy-one").css('top',n);
}

function goEnemyTwo(n){
    $("#enemy-two").css('top',n);
}

function goEnemyThree(n){
    $("#enemy-three").css('top',n);
}