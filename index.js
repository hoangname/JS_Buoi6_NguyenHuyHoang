function domId(id) {
    return document.getElementById(id);
}
// B1: 
domId('btnB1').onclick = function () {
    let n = bai1();
    domId('ketQuaB1').innerHTML = n;
}
function bai1() {
    let total = 0;
    let n = 1;
    while (total <= 10000) {
        total += n;
        n++;
    }
    return n - 1;
}

// B2 :
domId('btnB2').onclick = function () {
    let x = +domId('nhapSoXB2').value;
    let n = +domId('nhapSoNB2').value;
    let ketQua = bai2(x, n);
    domId('ketQuaB2').innerHTML = ketQua;

}
function bai2(x, n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += x ** i;
    }
    return total;
}

//B3:
domId('btnB3').onclick = function () {
    let n = +domId('nhapSoB3').value;
    let ketQua = bai3(n);
    domId('ketQuaB3').innerHTML = ketQua;

}
function bai3(n) {
    let ketQua = 1;
    for (let i = 1; i <= n; i++) {
        ketQua *= i;
    }
    return ketQua;
}

// B4 :
domId('btnB4').onclick = function (){
    let ketQua = bai4();  
    domId('ketQuaB4').innerHTML = ketQua;
}
function bai4 (){
    let ketQua = '';
    for (let i = 1; i <= 10; i++) {
        if (i % 2 === 0) {
            ketQua += '<div style="background-color: red; color: white;" class="mt-2">Hello !!!</div>';
        } else {
            ketQua += '<div style="background-color: blue; color: white;" class="mt-2">Hello !!!</div>';
        }
    }
    return ketQua;
}
// B5 :
domId('btnB5').onclick = function (){
    let n = +domId('nhapSoB5').value;
    let ketQua = '';
    for(x=2; x<= n; x++){
        let check = checkSNT(x);
        if (check){
            ketQua += x + ' ';
        }
    }
domId('ketQuaB5').innerHTML = ketQua;
}
function checkSNT (x){
    let check = true;
    if(x>2){
        for (i=2; i<= Math.sqrt(x); i++){
            if(x%i===0){
                check = false;
                break;
            }
        }
    }
    return check;
}