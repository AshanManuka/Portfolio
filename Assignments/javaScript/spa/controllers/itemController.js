disable();

// disable add button
function disable(){
    $("#Add-item").prop("disabled",true);
}

// Using RegEx from Inputs
var iId = /^(I)[0-9]{3}$/;
var iName = /^[a-z ]{3,30}$/;
var iQty = /^[0-9]{1,4}$/;
var iPrice = /^[1-9][0-9]*(.[0-9]{2})?$/;

$("#txtItemID").on('keyup',function (event) {
    var inId = $("#txtItemID").val();
    var checkId = iId.test(inId);
    if(checkId){
        $("#lblIOne").css("color", "#26de81");
        $("#txtItemID").css("border", "#26de81 solid 3px");

        if(event.key === "Enter"){
            $("#txtItemName").focus();
        }
    }
    else{
        $("#lblIOne").css("color", "#EA2027");
        $("#txtItemID").css("border", "#EA2027 solid 3px");
    }
});

$("#txtItemName").on('keyup',function (event) {
    var inName = $("#txtItemName").val();
    var checkName = iName.test(inName);

    if(checkName){
        $("#lblITwo").css("color", "#26de81");
        $("#txtItemName").css("border", "#26de81 solid 3px");

        if(event.key === "Enter"){
            $("#txtItemQty").focus();
        }
    }
    else{
        $("#lblITwo").css("color", "#EA2027");
        $("#txtItemName").css("border", "#EA2027 solid 3px");
    }
});

$("#txtItemQty").on('keyup',function (event) {
    var inQty = $("#txtItemQty").val();
    var checkQty = iQty.test(inQty);

    if(checkQty){
        $("#lblIThree").css("color", "#26de81");
        $("#txtItemQty").css("border", "#26de81 solid 3px");

        if(event.key === "Enter"){
            $("#txtUnitPrice").focus();
        }
    }
    else{
        $("#lblIThree").css("color", "#EA2027");
        $("#txtItemQty").css("border", "#EA2027 solid 3px");
    }
});

$("#txtUnitPrice").on('keyup',function (event) {
    var inPrice = $("#txtUnitPrice").val();
    var checkPrice = iPrice.test(inPrice);

    if(checkPrice){
        $("#lblIFour").css("color", "#26de81");
        $("#txtUnitPrice").css("border", "#26de81 solid 3px");
        $("#Add-item").prop("disabled",false);

        if(event.key === "Enter"){
            $("#Add-item").focus();
        }
    }
    else{
        $("#lblIFour").css("color", "#EA2027");
        $("#txtUnitPrice").css("border", "#EA2027 solid 3px");
    }
});

$("#Add-item").on('click',function () {
    addItem();
});

$("#Add-item").on('keyup',function (event) {
    if(event.key === "Enter"){
        addItem();
    }
});


function addItem(){

}
