let arr = [1, 2];

let x = +prompt("Nhập số cần đưa vào mảng: ");
let index = +prompt('Nhập vào vị trí của số đó: ');
let tg;
if (index < 0 || index > arr.length) {
    document.write(arr);
} else {
    tg = arr[index];
    arr[index] = x;
    for (let i = index; i < arr.length; i++) {
        // let tg0 = arr[index + 1];
        arr[index + 1] = arr[index];

    }
    arr.push(arr[index])
}
// for(let i = 0; ; i ++){
//     let nhap = +prompt{'Nhập giá trị cho mảng: '};
// }
//
// function insertNumberToArray(number){
//
// }