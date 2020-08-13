function validate(valid) {
    var username = valid.uname.value;
    var pass = valid.password.value;

    console.log(username);
    if (username == null || username == "") {
        alert("invalid username");

        return false;
    }
    if (pass == null || pass == "") {
        alert("invalid password");

        return false;
    }
    return true;

}
