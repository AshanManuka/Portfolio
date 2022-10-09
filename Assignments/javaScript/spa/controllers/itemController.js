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

$("#txtItemId").on('keyup',function (event) {
    var inId = $("#txtItemId").val();
    var checkId = iId.test(inId);
    if(checkId){
        $("#lblIOne").css("color", "#26de81");
        $("#txtItemId").css("border", "#26de81 solid 3px");

        if(event.key === "Enter"){
            $("#txtItemName").focus();
        }
    }
    else{
        $("#lblIOne").css("color", "#EA2027");
        $("#txtItemId").css("border", "#EA2027 solid 3px");
    }
});

$("#txtItemName").on('keyup',function (event) {
    var inName = $("#txtItemName").val();
    var checkName = iName.test(inName);

    if(checkName){
        $("#lblITwo").css("color", "#26de81");
        $("#txtItemName").css("border", "#26de81 solid 3px");

        if(event.key === "Enter"){
            $("#txtItemQty").focus();
        }
    }
    else{
        $("#lblITwo").css("color", "#EA2027");
        $("#txtItemName").css("border", "#EA2027 solid 3px");
    }
});

$("#txtItemQty").on('keyup',function (event) {
    var inQty = $("#txtItemQty").val();
    var checkQty = iQty.test(inQty);

    if(checkQty){
        $("#lblIThree").css("color", "#26de81");
        $("#txtItemQty").css("border", "#26de81 solid 3px");

        if(event.key === "Enter"){
            $("#txtUnitPrice").focus();
        }
    }
    else{
        $("#lblIThree").css("color", "#EA2027");
        $("#txtItemQty").css("border", "#EA2027 solid 3px");
    }
});

$("#txtUnitPrice").on('keyup',function (event) {
    var inPrice = $("#txtUnitPrice").val();
    var checkPrice = iPrice.test(inPrice);

    if(checkPrice){
        $("#lblIFour").css("color", "#26de81");
        $("#txtUnitPrice").css("border", "#26de81 solid 3px");
        $("#Add-item").prop("disabled",false);

        if(event.key === "Enter"){
            $("#Add-item").focus();
        }
    }
    else{
        $("#lblIFour").css("color", "#EA2027");
        $("#txtUnitPrice").css("border", "#EA2027 solid 3px");
    }
});

$("#Add-item").on('click',function () {
    addItem();
});

$("#Add-item").on('keyup',function (event) {
    if(event.key === "Enter"){
        addItem();
    }
});


function addItem(){
    let itemCode = $("#txtItemId").val();
    let itemName = $("#txtItemName").val();
    let itemQty = $("#txtItemQty").val();
    let itemUnitPrice = $("#txtUnitPrice").val();

    var item = {
        code : itemCode,
        name : itemName,
        qty : itemQty,
        price : itemUnitPrice
    }

    itemList.push(item);

    // Data submit alert
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Item has been saved',
        showConfirmButton: false,
        timer: 1500
    });

    //calling to function
    clearFields();
    disable();
    loadAllItem();

}

// clickable all search button
$("#all-search-item").click(function () {
    loadAllItem();
});

function loadAllItem() {
    $("#tblItem").empty();

    for (var itemElement of itemList) {
        var row =   `<tr><td>${itemElement.code}</td><td>${itemElement.name}</td><td>${itemElement.qty}</td><td>${itemElement.price}</td></tr>`;
        $("#tblItem").append(row);
    }
    selectFromItemTbl();
}


function selectFromItemTbl() {
    $("#tblItem>tr").click(function(){
        let code = $(this).children(":eq(0)").text();
        let name = $(this).children(":eq(1)").text();
        let qty = $(this).children(":eq(2)").text();
        let price = $(this).children(":eq(3)").text();

        $("#txtItemId").val(code);
        $("#txtItemName").val(name);
        $("#txtItemQty").val(qty);
        $("#txtUnitPrice").val(price);
    });

    $("#tblItem").on('dblclick',function () {
        deleteItem();
    });
}

$("#delete-item").on('click',function () {
    deleteItem();
});


// customer delete function
function deleteItem(){
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
            let delId = $("#txtItemId").val();
            for(var itm of itemList){
                if(itm.code === delId){
                    var inNo = itemList.indexOf(itm);
                    itemList.splice(inNo,1);
                    loadAllItem();
                    clearFields();
                }
            }
            Swal.fire(
                'Deleted!',
                'Item has been deleted.',
                'success'
            )
        }
    });
}


// customer update function
$("#update-item").on('click',function(){
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Update Item!'
    }).then((result) => {
        if (result.isConfirmed) {
            updateItem();
            Swal.fire(
                'Updated!',
                'Item has been Updated.',
                'success'
            )
        }
    })
});

function updateItem(){
    let upId = $("#txtItemId").val();
    let upName = $("#txtItemName").val();
    let upQty = $("#txtItemQty").val();
    let upUnitPrice = $("#txtUnitPrice").val();

    for (var upItm of itemList) {
        if(upItm.code === upId){
            upItm.name = upName;
            upItm.qty = upQty;
            upItm.price = upUnitPrice;

            loadAllItem();
            clearFields();
        }
    }

}

















