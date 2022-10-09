
var totalArray = [];


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
        }
    }
}

// Add order item button
$("#addTo").on('click',function () {
    makeTotal();


    // clearF();
});



function clearF() {
    $("#itemId").val('');
    $("#uniPrice").val('');
    $("#qty").val('');
    $("#orderQty").val('');
}

function makeTotal(){
    var subTotal =   $("#uniPrice").val() * $("#orderQty").val();
    $("#subTotalPrice").val(subTotal);

    // Set Total to array
    totalArray.push(subTotal);
    
    calculateTotal();
}


function calculateTotal() {
    let total =0;
    for (var i=0; i<totalArray.length; i++ ){
            total += totalArray[i];
    }
    $("#totalPrice").val(total)
    orderAmount = total;

}













