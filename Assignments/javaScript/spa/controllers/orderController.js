
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




