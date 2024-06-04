function calculate() {
    var inputArray = document.getElementById("arrayInput").value.split(",");
    var sumEven = 0;
    var sumOdd = 0;
    var parsedArray = [];

    if (inputArray.length > 20) {
        alert("Số lượng số nguyên không được vượt quá 20");
        return;
    }

    for (var i = 0; i < inputArray.length; i++) {
        parsedArray.push(parseInt(inputArray[i]));
    }

    for (var i = 0; i < parsedArray.length; i++) {
        if (parsedArray[i] % 2 === 0) {
            sumEven += parsedArray[i];
        } else {
            sumOdd += parsedArray[i];
        }
    }

    var result = sumEven - sumOdd;
    document.getElementById("result").innerHTML = "Kết quả là: " + result;
}