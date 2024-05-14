function nhuan() {
    let x = document.getElementById('nam').value;
    /*
    if (x % 4 === 0 && x % 100 !== 0) {
        alert('Đây là năm nhuận');
    } else if (x % 100 === 0) {
        if (x % 400 === 0) {
            alert('Đây là năm nhuận');
        } else {
            alert('Không phải năm nhuận');
        }
    } else {
        alert('Không phải năm nhuận');
    }
}
     */
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