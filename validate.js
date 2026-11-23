
function validate() {
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var pizza = document.getElementById("pizza").value;
    var qty = document.getElementById("qty").value;

    if (name == "" || phone == "" || pizza == "" || qty <= 0) {
        alert("Please fill all fields");
        return false;
    }

    alert("Pizza Order Successful!");
    return false;
}