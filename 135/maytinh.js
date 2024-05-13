function cong(){
    let x = document.getElementById('o1').value;
    document.getElementById('o1').value ='';
    let y = document.getElementById('o2').value;
    document.getElementById('o2').value ='';
    let result = +x + +y;
    document.getElementById('result').innerHTML='Result Division :' + result;
}
function tru(){
    let x = document.getElementById('o1').value;
    document.getElementById('o1').value ='';
    let y = document.getElementById('o2').value;
    document.getElementById('o2').value ='';
    let result = x - y;
    document.getElementById('result').innerHTML='Result Division :' + result;
}
function nhan(){
    let x = document.getElementById('o1').value;
    document.getElementById('o1').value ='';
    let y = document.getElementById('o2').value;
    document.getElementById('o2').value ='';
    let result = x * y;
    document.getElementById('result').innerHTML='Result Division :' + result;
}
function chia(){
    let x = document.getElementById('o1').value;
    document.getElementById('o1').value ='';
    let y = document.getElementById('o2').value;
    document.getElementById('o2').value ='';
    let result = x / y;
    document.getElementById('result').innerHTML='Result Division :' + result;
}