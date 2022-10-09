
$("#order-btn").on('click',function(){
   loadCustomerList();
});


function loadCustomerList(){
    $("#cust-id").empty();

    for (cust of customerList) {
        $("#cust-id").append(`<option>${cust.id}</option>`);
    }
}


