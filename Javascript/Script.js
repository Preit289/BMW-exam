function kiemtra1() {
    //1. First name
    var sFirst = document.getElementById("txtFirst").value;
    var reFirst = /^[A-Za-z0-9 ]+$/;
    if (reFirst.test(sFirst) == false) {    //(2) reName.test(sName) == false hoặc !reName.test(sName)
        alert("The first name cannot be left blank!");
        document.getElementById("txtFirst").focus();     //selected()
        return false;
    }

    //2. Last name
    var sLast = document.getElementById("txtLast").value;
    var reLast = /^[A-Za-z0-9 ]+$/;
    if (reLast.test(sLast) == false) {
        alert("The last name cannot be left blank!");
        document.getElementById("txtLast").focus();     //selected()
        return false;
    }

    //3. Country
    var sCountry = document.getElementById("txtCountry").value;
    if (sCountry == 0) {
        alert("Country is required!");
        document.getElementById("txtCountry").focus();
        return false;
    }

    //4. Gender
    sGender = document.querySelector('input[name="sex"]:checked').value;

    //5. Email
    var sEmail = document.getElementById("txtEmail").value;
    var reEmail = /^[\w.]+[@]\w+[.]\w{3}([.]\w{2})?$/;
    if (sEmail.length == 0) {
        alert("Email cannot be left blank!");
        document.getElementById("txtEmail").focus();
        return false;
    }
    if (!reEmail.test(sEmail)) {
        alert("Email is incorrect!");
        document.getElementById("txtEmail").focus();
        return false;
    }

    //6. Phone
    var sPhone = document.getElementById("txtPhone").value;
    var rePhone = /^\d{8,12}$/;
    if (sPhone.length == 0) {
        alert("Phone cannot be left blank!");
        document.getElementById("txtEmail").focus();
        return false;
    }
    if (!rePhone.test(sPhone)) {
        alert("Phone is incorrect!");
        document.getElementById("txtPhone").focus();    //selected
        return false;
    }

    //7. Show message 1st style
    // alert("Congratulations!");

    //8. Show message 2nd style
    alert("Congratulation \nYour information has been sent successfully!");

    return true;
}