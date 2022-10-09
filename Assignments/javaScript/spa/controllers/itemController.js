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

