function generateJoinCode() {
    var code = '';
    var possibleChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (var i = 0; i < 6; i++) {
        code += possibleChars.charAt(Math.floor(Math.random() * possibleChars.length));
    }

    return code;
}

var joinCode = generateJoinCode();
console.log(joinCode);