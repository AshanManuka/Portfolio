document.getElementById("item-btn").addEventListener("click", function () {
    document.getElementById("main-one-sec").style.display="none";
    document.getElementById("main-three-sec").style.display="none";
    document.getElementById("main-two-sec").style.display="inline";
    document.getElementById("hm").innerText="Items";
});

document.getElementById("customer-btn").addEventListener("click", function () {
    document.getElementById("main-two-sec").style.display="none";
    document.getElementById("main-three-sec").style.display="none";
    document.getElementById("main-one-sec").style.display="inline";
    document.getElementById("hm").innerText="Customer";
});

document.getElementById("order-btn").addEventListener("click", function () {
    document.getElementById("main-one-sec").style.display="none";
    document.getElementById("main-two-sec").style.display="none";
    document.getElementById("main-three-sec").style.display="inline";
    document.getElementById("hm").innerText="Orders";
});

// Disable key TAB to disable function move over textFields
$("#txtCustomerID,#txtCustomerName,#txtCustomerAddress,#txtCustomerSalary,#txtItemID,#txtItemName,#txtItemQty,#txtUnitPrice").on('keydown',function(event){
    if(event.key === "Tab"){
        event.preventDefault();
    }
});