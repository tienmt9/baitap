function demKyTuInHoa(str) {
    var soKyTuInHoa = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] >= 'A' && str[i] <= 'Z') {
            soKyTuInHoa++;
        }
    }

    if (soKyTuInHoa > 0) {
        return soKyTuInHoa;
    } else {
        return "The Strings is not contain upper char";
    }
}

var inputString1 = "abcdEF";
var inputString2 = "accdef";
console.log(demKyTuInHoa(inputString1));
console.log(demKyTuInHoa(inputString2));