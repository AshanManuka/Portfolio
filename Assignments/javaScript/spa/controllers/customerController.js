
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

$("#txtCustomerID").on('keydown',function (event) {
    if(event.key === "Enter"){
        $("#txtCustomerName").focus();
    }
});

$("#txtCustomerName").on('keydown',function (event) {
    if(event.key === "Enter"){
        $("#txtCustomerAddress").focus();
    }
});

$("#txtCustomerAddress").on('keydown',function (event) {
    if(event.key === "Enter"){
        $("#txtCustomerSalary").focus();
    }
});

$("#txtCustomerSalary").on('keydown',function (event) {
    if(event.key === "Enter"){
        $("#Add").focus();
    }
});