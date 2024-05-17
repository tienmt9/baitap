function nhuan() {
    x = document.getElementById('nam').value;
    if (x % 4 === 0) {
        if (x % 100 === 0) {
            if (x % 400 === 0) {
                alert('Đây là năm nhuận');
            } else {
                alert('Không phải năm nhuận');
            }
        } else {
            alert('Đây là năm nhuận');
        }

    } else {
        alert('Không phải năm nhuận');
    }
}
/* let year = parseInt(prompt("Enter a year"));
let isLeapYear = false;

if (year % 4 == 0) {
    if (year % 100 == 0) {
        if (year % 400 == 0) {
            isLeapYear = true;
        }
    } else {
        isLeapYear = true;
    }
}

if (isLeapYear) {
    alert(year + " is a leap year");
} else {
    alert(year + " is NOT a leap year");
}

 */