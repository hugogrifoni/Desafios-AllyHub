function invertString(str) {
    var allyHub = "";
    for (var i = str.length - 1; i >= 0; i--) {
        allyHub += str[i];
    }
    return allyHub;
}
invertString('allyHub');