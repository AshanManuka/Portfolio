disable();

// disable add button
function disable(){
    $("#Add").prop("disabled",true);
}

// Using RegEx from Inputs
var cId = /^(C)[0-9]{3}$/;
var cName = /^[a-z ]{3,30}$/;
var cAddress = /^[a-z0-9 ,]{5,40}$/;
var cSalary = /^[1-9][0-9]*(.[0-9]{2})?$/;


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
        $("#Add").prop("disabled",false);

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
    let cusId = $("#txtCustomerID").val();
    let cusName = $("#txtCustomerName").val();
    let cusAddress = $("#txtCustomerAddress").val();
    let cusSalary = $("#txtCustomerSalary").val();

    var customer = {
        id : cusId,
        name : cusName,
        address : cusAddress,
        salary : cusSalary
    }

    customerList.push(customer);

    // Data submit alert
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Customer has been saved',
        showConfirmButton: false,
        timer: 1500
    });

    //calling to function
    clearFields();
    disable();
    loadAllCustomer();

}

// clickable all search button
$("#all-search-customer").click(function () {
    loadAllCustomer();
});


// load All customer to table
function loadAllCustomer() {
    $("#tblCustomer").empty();

    for(var cust of customerList){
        var row= `<tr><td>${cust.id}</td><td>${cust.name}</td><td>${cust.address}</td><td>${cust.salary}</td></tr>`;
        $("#tblCustomer").append(row);
    }
    selectFromTbl();
}

/*search customer function*/
$("#search-btn").click(function(){
    var searchId = $("#txtSearchId").val();

    for(var cust of customerList){
        if(cust.id === searchId){
            $("#txtCustomerID").val(cust.id);
            $("#txtCustomerName").val(cust.name);
            $("#txtCustomerAddress").val(cust.address);
            $("#txtCustomerSalary").val(cust.salary);
        }
    }
});

// select data from table function
function selectFromTbl(){

    $("#tblCustomer>tr").click(function(){
        let id = $(this).children(":eq(0)").text();
        let name = $(this).children(":eq(1)").text();
        let address = $(this).children(":eq(2)").text();
        let salary = $(this).children(":eq(3)").text();

        $("#txtCustomerID").val(id);
        $("#txtCustomerName").val(name);
        $("#txtCustomerAddress").val(address);
        $("#txtCustomerSalary").val(salary);
    });

    $("#tblCustomer").on('dblclick',function () {
        deleteCustomer();
    });
}

$("#delete").click(function () {
    deleteCustomer();
});


// customer delete function
function deleteCustomer(){
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#4b9ce8',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete !'
    }).then((result) => {
        if (result.isConfirmed) {
            let delId = $("#txtCustomerID").val();
            for(var cust of customerList){
                if(cust.id === delId){
                    var inNo = customerList.indexOf(cust);
                    customerList.splice(inNo,1);
                    loadAllCustomer();
                    clearFields();
                }
            }
            Swal.fire(
                'Deleted!',
                'Customer has been deleted.',
                'success'
            )
        }
    });
}


// customer update function
$("#update").on('click',function(){
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Update Customer!'
    }).then((result) => {
        if (result.isConfirmed) {
            updateCustomer();
            Swal.fire(
                'Updated!',
                'Item has been Updated.',
                'success'
            )
        }
    })
});

function updateCustomer(){
    let upId = $("#txtCustomerID").val();
    let upName = $("#txtCustomerName").val();
    let upAddress = $("#txtCustomerAddress").val();
    let upSalary = $("#txtCustomerSalary").val();

    for (var upCust of customerList) {
        if(upCust.id === upId){
            upCust.name = upName;
            upCust.address = upAddress;
            upCust.salary = upSalary;

            loadAllCustomer();
            clearFields();
        }
    }

}


















