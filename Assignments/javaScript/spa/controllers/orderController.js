
disableCompleteBtn();

// disable add button
function disableCompleteBtn(){
    $("#complte-btn").prop("disabled",true);
}

// Validation in order form
var orQty = /^[0-9]{1,3}$/;
var payment = /^[1-9][0-9]*(.[0-9]{2})?$/;



var totalArray = [];
var tblArray = [];


// Order Variables
var valueId;
var orderAmount = 0;


//assign 0 to order id
$("#genOrderId").val("O-001");



$("#order-btn").on('click',function(){
   loadCustomerList();
   loadItemList();

});

// select customer id from dropdown box
$('#cust-id').on('change', function() {
    var valueId = $(this).val();
    searchCustomerToFill(valueId);
});


// select item name from dropdown box
$('#itm-name').on('change', function() {
    valueId = $(this).val();
    searchItemToFill(valueId);
});

//enter button in orderQty
$("#orderQty").on('keyup',function (event) {
    if(event.key === "Enter"){
        $("#addTo").focus();
    }
});

// Add order item button
$("#addTo").on('click',function () {
    addOrder();
});

//make discount
$("#discountPrice").on('keyup',function(event){
    var typeDiscount = $("#discountPrice").val();
    var confirmDiscount = payment.test(typeDiscount);
    if (confirmDiscount){
        $("#discountPrice").css("border", "#26de81 solid 3px");
        if(event.key === "Enter"){
            makeDiscount();
            $("#cashPrice").focus();
            $("#discountPrice").css("border", "#000000");
        }
    }else {
        $("#discountPrice").css("border", "#EA2027 solid 3px");
    }
});

$("#cashPrice").on('keyup',function(event){
    var typePayment = $("#cashPrice").val();
    var confirmPayment = payment.test(typePayment);
    if (confirmPayment){
        $("#cashPrice").css("border", "#26de81 solid 3px");
        $("#complte-btn").prop("disabled",false);
        if(event.key === "Enter"){
            makeDiscount();
            $("#complte-btn").focus();
            $("#cashPrice").css("border", "#000000");
        }
    }else {
        $("#cashPrice").css("border", "#EA2027 solid 3px");
    }

    if(event.key === "Enter"){
        makeBalance();
        $("#complte-btn").focus();
    }
});

$("#complte-btn").on('click',function () {
    completeOrder();
    clearF2();
});



function loadCustomerList(){
    $("#cust-id").empty();
    for (cust of customerList) {
        $("#cust-id").append(`<option>${cust.id}</option>`);
    }
}

function loadItemList(){
    $("#itm-name").empty();
    for (itm of itemList) {
        $("#itm-name").append(`<option>${itm.name}</option>`);
    }
}

function searchCustomerToFill(value){
    for (cus of customerList) {
        if (cus.id === value){
            $("#txtCustName").val(cus.name);
        }
    }
}

function searchItemToFill(value){
    for (itm of itemList) {
        if (itm.name === value){
            $("#itemId").val(itm.code);
            $("#uniPrice").val(itm.price);
            $("#qty").val(itm.qty);
            $("#orderQty").focus();
        }
    }
}

function addOrder() {

    var checkOrderQty = $("#orderQty").val();
    var confirmOrderQty = orQty.test(checkOrderQty);
    if (confirmOrderQty){
        makeTotal();
        calculateTotal();
        manageItem();
        fillTable();
        clearF1();

        $("#orderQty").css("border", "#000000")
    }
    else {
        $("#orderQty").css("border", "#EA2027 solid 3px");
    }


}



function makeTotal(){
    var subTotal =   $("#uniPrice").val() * $("#orderQty").val();
    $("#subTot").val(subTotal);

    // Set Total to array
    totalArray.push(subTotal);
}


function calculateTotal() {
    let total =0;
    for (var i=0; i<totalArray.length; i++ ){
            total += totalArray[i];
    }
    $("#totalPrice").val(total)
    orderAmount = total;
}

// For manage item because added to order
function manageItem(){
    var itCode = $("#itemId").val();
    var orQty = $("#orderQty").val();

    for (itm of itemList) {
        if (itm.code === itCode){
            let newQ = itm.qty - orQty;
            itm.qty = newQ;
            loadAllItem();
            loadItemList();

        }
    }

}

//load data to order table
function fillTable() {
    var oIId = $("#itemId").val();
    var oIName = valueId;
    var oPrice = $("#uniPrice").val();
    var oQty = $("#orderQty").val();

    //tbArray object
    var tblObj = {
        id : oIId,
        name : oIName,
        price : oPrice,
        qty : oQty,
        amount : orderAmount
    }

    // insert data to tbl Array
    tblArray.push(tblObj);

    $("#orderTable").empty();

    for(var ord of tblArray){
        var row= `<tr><td>${ord.id}</td><td>${ord.name}</td><td>${ord.price}</td><td>${ord.qty}</td><td>${ord.amount}</td></tr>`;
        $("#orderTable").append(row);
    }
    selectFromTbl();
}


// making discount
function makeDiscount(){
    var dis = $("#discountPrice").val();
    $("#fullAmount").val(orderAmount - dis);
}

function makeBalance() {
    var bal = $("#cashPrice").val() - $("#fullAmount").val();
    $("#balancePrice").val(bal);
}

// order complete function
function completeOrder(){
    fillOrderTable();
    orderAmount = 0;
    totalArray.length = 0;

    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Order Completed !',
        showConfirmButton: false,
        timer: 1500
    });

    tblArray.length = 0;
    $("#orderTable").empty();
    disableCompleteBtn();
    generateOrderId();
}



//generate order id
function generateOrderId(){
    var orId = $("#genOrderId").val();
    var nwPart = orId.substr(2);
    var inPart = parseInt(nwPart);
    inPart++;
    if (10 > inPart){
        nwOrderId = "O-00"+inPart;
        $("#genOrderId").val(nwOrderId);
    }else {
        nwOrderId = "O-0"+inPart;
        $("#genOrderId").val(nwOrderId);
    }
}



function fillOrderTable(){
    var orderI = $("#genOrderId").val();
    var selectCustId = valueId;
    var date = setdate();
    var orderTotal = orderAmount;

    /*console.log(orderI+" , "+selectCustId+" , "+date+" , "+orderTotal);*/

    




}

function setdate(){
    var today = new Date();
    var dd = today.getDate();

    var mm = today.getMonth()+1;
    var yyyy = today.getFullYear();
    if(dd<10)
    {
        dd='0'+dd;
    }

    if(mm<10)
    {
        mm='0'+mm;
    }
    today = dd+'-'+mm+'-'+yyyy;

    return today;
}











function clearF1(){
    $("#itemId").val('');
    $("#uniPrice").val('');
    $("#qty").val('');
    $("#orderQty").val('');
}

function clearF2() {
    $("#totalPrice").val('');
    $("#fullAmount").val('');
    $("#discountPrice").val('');
    $("#cashPrice").val('');
    $("#balancePrice").val('');
    $("#subTot").val('');
    $("#txtCustName").val('');
}













