var totalArray = [];
var tblArray = [];

// Order Variables
var orderId;
var orderDate;
var orderCustomerId;
var orderAmount = 0;


//assign 0 to order id
$("#genOrderId").val("O001");

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
});

function addOrder() {
    makeTotal();
    calculateTotal();
    manageItem();
    fillTable();
    clearF1();
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
        makeDiscount();
        $("#cashPrice").focus();
    }
});

$("#cashPrice").on('keyup',function(event){
    if(event.key === "Enter"){
        makeBalance();
        $("#complte-btn").focus();
    }
});

$("#complte-btn").on('click',function () {
    completeOrder();
    clearF2();
});



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
    generateOrderId();

}



//generate order id
function generateOrderId(){
    var orId = $("#genOrderId").val();
    var nwPart = orId.substr(1);
    var inPart = parseInt(nwPart);
    inPart++;
    if (10 > inPart){
        nwOrderId = "O00"+inPart;
        $("#genOrderId").val(nwOrderId);
    }else {
        nwOrderId = "O0"+inPart;
        $("#genOrderId").val(nwOrderId);
    }


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
}













