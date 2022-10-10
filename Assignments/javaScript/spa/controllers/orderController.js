var totalArray = [];
var tblArray = [];

// Order Variables
var orderId;
var orderDate;
var orderCustomerId;
var orderAmount = 0;




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
    var valueId = $(this).val();
    searchItemToFill(valueId);
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

//enter button in orderQty
$("#orderQty").on('keyup',function (event) {
    if(event.key === "Enter"){
        $("#addTo").focus();
    }
});

// Add order item button
$("#addTo").on('click',function () {
    addOrder();
    // clearF();
});

function addOrder() {
    makeTotal();
    calculateTotal();
    manageItem();
    fillTable();
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
// need to do this function
}

//load data to order table
function fillTable() {
    var oIId = $("#itemId").val();
    var oIName = $("#itm-name").val();
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

//make discount
$("#discountPrice").on('keyup',function(event){
    if(event.key === "Enter"){
        $("#complte-btn").focus();
    }
});

$("#complte-btn").on('click',function () {
    completeOrder();
});

function completeOrder(){
    alert("complete order");
}








function clearF() {
    $("#itemId").val('');
    $("#uniPrice").val('');
    $("#qty").val('');
    $("#orderQty").val('');
}













