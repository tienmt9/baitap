function chuyendoitiente(){
    let x = document.getElementById('sotien').value;
    document.getElementById('sotien').value='';
    let from = document.getElementById('from').value;
    let to = document.getElementById('to').value;
    let rates = {
        usd: {
            vnd: 25452.5,
            usd: 1
        },
        vnd: {
            usd: 0.000039,
            vnd: 1
        }
    };

    var result = x * rates[from][to];
    document.getElementById('result').innerHTML='Result :' + result;
}