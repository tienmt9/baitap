let danhsach = [];
let avgScore = 0;
for (let i = 0; ; i++) {
    let a = +prompt("Nhập điểm: ");
    danhsach.push(a);
    alert('Nhập tiếp nhấn 1');
    let nhap = +prompt('');
    if (nhap !== 1) {
        break;
    }
}
findAvg(danhsach);

function findAvg(score) {
    for (let i = 0; i < score.length; i++) {
        avgScore = (avgScore + score[i]) / score.length;
    }
    document.write(`Điểm trung bình của danh sách là ${avgScore}`);
}
