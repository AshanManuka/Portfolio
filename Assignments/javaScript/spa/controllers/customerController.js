
// Using RegEx from Inputs
var cId = /^(C)[0-9]{3}$/;
var cName = /^[a-z ]{3,30}$/;
var cAddress = /^[a-z0-9 ,]{5,40}$/;
var cSalary = /^[1-9][0-9]*(.[0-9]{2})?$/;


// Disable key TAB to disable function move over textFields
$("#txtCustomerID,#txtCustomerName,#txtCustomerAddress,#txtCustomerSalary").on('keydown',function(event){
    if(event.key === "Tab"){
       event.preventDefault();
    }
});

$("#txtCustomerID").on('keyup',function (event) {
    var inId = $("#txtCustomerID").val();
    var checkId = cId.test(inId);
    if(checkId){
        $("#lblOne").css("color", "#26de81");
        $("#txtCustomerID").css("border", "#26de81 solid 3px");

        if(event.key === "Enter"){
            $("#txtCustomerName").focus();
        }
    }
    else{
        $("#lblOne").css("color", "#EA2027");
        $("#txtCustomerID").css("border", "#EA2027 solid 3px");
    }
});

$("#txtCustomerName").on('keyup',function (event) {
    var inName = $("#txtCustomerName").val();
    var checkName = cName.test(inName);

    if(checkName){
        $("#lblTwo").css("color", "#26de81");
        $("#txtCustomerName").css("border", "#26de81 solid 3px");

        if(event.key === "Enter"){
            $("#txtCustomerAddress").focus();
        }
    }
    else{
        $("#lblTwo").css("color", "#EA2027");
        $("#txtCustomerName").css("border", "#EA2027 solid 3px");
    }
});

$("#txtCustomerAddress").on('keyup',function (event) {
    var inAddress = $("#txtCustomerAddress").val();
    var checkAddress = cAddress.test(inAddress);

    if(checkAddress){
        $("#lblThree").css("color", "#26de81");
        $("#txtCustomerAddress").css("border", "#26de81 solid 3px");

        if(event.key === "Enter"){
            $("#txtCustomerSalary").focus();
        }

    }
    else{
        $("#lblThree").css("color", "#EA2027");
        $("#txtCustomerAddress").css("border", "#EA2027 solid 3px");
    }
});

$("#txtCustomerSalary").on('keyup',function (event) {
    var inSalary = $("#txtCustomerSalary").val();
    var checkSalary = cSalary.test(inSalary);

    if(checkSalary){
        $("#lblFour").css("color", "#26de81");
        $("#txtCustomerSalary").css("border", "#26de81 solid 3px");

        if(event.key === "Enter"){
            $("#Add").focus();
        }

    }
    else{
        $("#lblFour").css("color", "#EA2027");
        $("#txtCustomerSalary").css("border", "#EA2027 solid 3px");
    }
});

$("#Add").on('click',function () {
    addCustomer();
});

$("#Add").on('keyup',function (event) {
    if(event.key === "Enter"){
        addCustomer();
    }

});


function addCustomer(){
    alert(" in add customer method");
}