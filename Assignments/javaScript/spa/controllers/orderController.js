
$("#order-btn").on('click',function(){
   loadCustomerList();
   loadItemList();
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


